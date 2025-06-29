"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface NeuralNetworkDiagramProps {
  className?: string
}

export function NeuralNetworkDiagram({ className }: NeuralNetworkDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  // Define the neural network architecture
  const layers = [
    { name: "Input", nodes: 4, color: "rgba(59, 130, 246, 0.8)" },
    { name: "Hidden", nodes: 6, color: "rgba(139, 92, 246, 0.8)" },
    { name: "Hidden", nodes: 8, color: "rgba(139, 92, 246, 0.8)" },
    { name: "Output", nodes: 3, color: "rgba(236, 72, 153, 0.8)" },
  ]

  // Labels for the diagram
  const inputLabels = ["3D Model", "Material", "Size", "Constraints"]
  const outputLabels = ["Design", "Parameters", "Visualization"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a slight delay for a more natural reveal
          setTimeout(() => {
            setIsVisible(true)
          }, 300)
        } else {
          // Don't hide when scrolling away to avoid re-animations when scrolling back
          // This improves performance
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    // Handle window resize with debounce for better performance
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (svgRef.current) {
          // Force a re-render on resize
          setIsVisible(false)
          setTimeout(() => setIsVisible(true), 100)
        }
      }, 250)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current)
      }
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  // Generate connections between layers
  const connections: { from: { layer: number; node: number }; to: { layer: number; node: number } }[] = []

  for (let layerIdx = 0; layerIdx < layers.length - 1; layerIdx++) {
    const fromLayer = layers[layerIdx]
    const toLayer = layers[layerIdx + 1]

    for (let fromNodeIdx = 0; fromNodeIdx < fromLayer.nodes; fromNodeIdx++) {
      for (let toNodeIdx = 0; toNodeIdx < toLayer.nodes; toNodeIdx++) {
        connections.push({
          from: { layer: layerIdx, node: fromNodeIdx },
          to: { layer: layerIdx + 1, node: toNodeIdx },
        })
      }
    }
  }

  // Calculate positions
  const width = 800
  const height = 400
  const horizontalPadding = 100
  const verticalPadding = 80
  const layerWidth = (width - horizontalPadding * 2) / (layers.length - 1)
  const getNodeX = (layerIdx: number) => horizontalPadding + layerIdx * layerWidth
  const getNodeY = (layerIdx: number, nodeIdx: number) => {
    const layerHeight = height - verticalPadding * 2
    const nodeSpacing = layerHeight / (layers[layerIdx].nodes - 1 || 1)
    return verticalPadding + nodeIdx * nodeSpacing
  }

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: "400px" }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connections */}
        <g className="connections">
          {isVisible &&
            connections.map((conn, idx) => {
              const fromX = getNodeX(conn.from.layer)
              const fromY = getNodeY(conn.from.layer, conn.from.node)
              const toX = getNodeX(conn.to.layer)
              const toY = getNodeY(conn.to.layer, conn.to.node)

              const isHighlighted =
                (hoveredNode === conn.from.node && conn.from.layer === 0) ||
                (hoveredNode === conn.to.node && conn.to.layer === layers.length - 1)

              return (
                <path
                  key={`conn-${idx}`}
                  d={`M${fromX},${fromY} C${fromX + layerWidth / 2},${fromY} ${toX - layerWidth / 2},${toY} ${toX},${toY}`}
                  stroke={isHighlighted ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.2)"}
                  strokeWidth={isHighlighted ? "2" : "1"}
                  fill="none"
                  className={cn(
                    "transition-all duration-500",
                    isVisible ? "opacity-100" : "opacity-0",
                    isHighlighted ? "z-10" : "z-0",
                  )}
                  style={{
                    animationDelay: `${idx * 5}ms`,
                    animationDuration: "1s",
                  }}
                />
              )
            })}
        </g>

        {/* Nodes */}
        {layers.map((layer, layerIdx) => (
          <g key={`layer-${layerIdx}`} className="layer">
            {Array.from({ length: layer.nodes }).map((_, nodeIdx) => {
              const x = getNodeX(layerIdx)
              const y = getNodeY(layerIdx, nodeIdx)
              const isInput = layerIdx === 0
              const isOutput = layerIdx === layers.length - 1
              const isHovered = hoveredNode === nodeIdx && (isInput || isOutput)

              return (
                <g
                  key={`node-${layerIdx}-${nodeIdx}`}
                  className="node-group"
                  onMouseEnter={() => (isInput || isOutput) && setHoveredNode(nodeIdx)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isInput || isOutput ? 20 : 12}
                    fill={layer.color}
                    stroke={isHovered ? "white" : "rgba(255, 255, 255, 0.5)"}
                    strokeWidth={isHovered ? 2 : 1}
                    className={cn(
                      "transition-all duration-500 cursor-pointer",
                      isVisible ? "opacity-100 transform scale-100" : "opacity-0 transform scale-0",
                    )}
                    style={{
                      animationDelay: `${layerIdx * 100 + nodeIdx * 50}ms`,
                      filter: isHovered ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : "",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  />

                  {/* Labels for input and output nodes */}
                  {(isInput || isOutput) && (
                    <text
                      x={isInput ? x - 30 : x + 30}
                      y={y}
                      textAnchor={isInput ? "end" : "start"}
                      fill="white"
                      fontSize="12"
                      fontWeight={isHovered ? "bold" : "normal"}
                      dominantBaseline="middle"
                      className={cn(
                        "transition-all duration-500 pointer-events-none",
                        isVisible ? "opacity-100" : "opacity-0",
                      )}
                      style={{
                        filter: isHovered ? "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))" : "",
                      }}
                    >
                      {isInput ? inputLabels[nodeIdx] : outputLabels[nodeIdx]}
                    </text>
                  )}
                </g>
              )
            })}

            {/* Layer labels */}
            <text
              x={getNodeX(layerIdx)}
              y={height - 20}
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.7)"
              fontSize="14"
              className={cn("transition-all duration-500", isVisible ? "opacity-100" : "opacity-0")}
            >
              {layer.name} Layer
            </text>
          </g>
        ))}

        {/* Data flow animation */}
        {isVisible && (
          <g className="data-flow">
            {[0, 1, 2].map((idx) => (
              <circle
                key={`flow-${idx}`}
                r="4"
                fill="white"
                className="animate-flow-particle"
                style={{
                  animationDelay: `${idx * 2}s`,
                }}
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path={`M${getNodeX(0)},${getNodeY(0, 1)} 
                         C${getNodeX(0) + layerWidth / 2},${getNodeY(0, 1)} 
                          ${getNodeX(1) - layerWidth / 2},${getNodeY(1, 2)} 
                          ${getNodeX(1)},${getNodeY(1, 2)}
                         C${getNodeX(1) + layerWidth / 2},${getNodeY(1, 2)} 
                          ${getNodeX(2) - layerWidth / 2},${getNodeY(2, 3)} 
                          ${getNodeX(2)},${getNodeY(2, 3)}
                         C${getNodeX(2) + layerWidth / 2},${getNodeY(2, 3)} 
                          ${getNodeX(3) - layerWidth / 2},${getNodeY(3, 1)} 
                          ${getNodeX(3)},${getNodeY(3, 1)}`}
                />
              </circle>
            ))}
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>Input Data</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span>Processing Layers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500"></div>
          <span>Design Output</span>
        </div>
      </div>
    </div>
  )
}
