"use client"

import type React from "react"

import { Suspense, lazy, useState, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { SplineControls } from "./spline-controls"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

// Define the types
interface CameraPosition {
  x: number
  y: number
  z: number
  rotationX: number
  rotationY: number
  zoom: number
}

interface LightingSettings {
  intensity: number
  color: string
  shadowIntensity: number
  ambientIntensity: number
}

// Lazy load the Spline component
const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene?: string
  objUrl?: string
  mtlUrl?: string
  className?: string
  fallback?: React.ReactNode
  enableControls?: boolean
  autoRotate?: boolean
  quality?: "low" | "medium" | "high"
  enableShadows?: boolean
  enablePostProcessing?: boolean
  showCustomControls?: boolean
  useObjViewer?: boolean
  onLoad?: () => void
}

function OBJViewer({ objUrl, mtlUrl, enableControls = true, autoRotate = false }) {
  const OBJModel = () => {
    const { scene, gl } = useThree()
    const [obj, setObj] = useState<any>(null)
    const [mtl, setMtl] = useState<any>(null)

    useEffect(() => {
      // Set up scene background
      if (scene) {
        scene.background = null
      }
    }, [scene])

    useEffect(() => {
      if (objUrl) {
        new OBJLoader().load(
          objUrl,
          (loadedObj) => {
            setObj(loadedObj)
          },
          undefined,
          (error) => {
            console.error("Error loading OBJ:", error)
          },
        )
      }
    }, [objUrl])

    useEffect(() => {
      if (mtlUrl) {
        new MTLLoader().load(
          mtlUrl,
          (loadedMtl) => {
            setMtl(loadedMtl)
          },
          undefined,
          (error) => {
            console.error("Error loading MTL:", error)
          },
        )
      }
    }, [mtlUrl])

    useEffect(() => {
      if (obj && mtl) {
        obj.traverse((child: any) => {
          if (child.isMesh && child.material && child.material.name) {
            const material = mtl.materials[child.material.name]
            if (material) {
              child.material = material
            }
          }
        })
      }
    }, [obj, mtl])

    return obj ? <primitive object={obj} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} /> : null
  }

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <OBJModel />
          <Environment preset="studio" />
        </Suspense>
        {enableControls && <OrbitControls autoRotate={autoRotate} />}
      </Canvas>
    </>
  )
}

export function SplineScene({
  scene,
  objUrl,
  mtlUrl,
  className,
  fallback,
  enableControls = true,
  autoRotate = false,
  quality = "high",
  enableShadows = true,
  enablePostProcessing = true,
  showCustomControls = true,
  useObjViewer = false,
  onLoad,
}: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const splineRef = useRef<any>(null)

  const handleLoad = (spline: any) => {
    splineRef.current = spline
    setIsLoading(false)

    // Apply initial settings
    if (spline) {
      try {
        // Set initial camera position
        const camera = spline.findObjectByName("Camera")
        if (camera) {
          camera.position.set(0, 0, 5)
        }

        // Configure lighting
        const lights = spline.scene.children.filter(
          (child: any) => child.type === "DirectionalLight" || child.type === "AmbientLight",
        )

        lights.forEach((light: any) => {
          if (light.type === "DirectionalLight") {
            light.intensity = 1
            light.castShadow = enableShadows
          } else if (light.type === "AmbientLight") {
            light.intensity = 0.4
          }
        })
      } catch (error) {
        console.warn("Could not configure Spline scene:", error)
      }
    }

    if (onLoad) {
      onLoad()
    }
  }

  const handleError = (error: any) => {
    console.error("Error loading Spline scene:", error)
    setHasError(true)
    setIsLoading(false)
  }

  // Handle camera changes from controls
  const handleCameraChange = (position: CameraPosition) => {
    if (splineRef.current) {
      try {
        const camera = splineRef.current.findObjectByName("Camera")
        if (camera) {
          camera.position.set(position.x, position.y, position.z)
          camera.rotation.set((position.rotationX * Math.PI) / 180, (position.rotationY * Math.PI) / 180, 0)

          // Apply zoom by adjusting FOV or position
          if (camera.fov) {
            camera.fov = 75 / position.zoom
            camera.updateProjectionMatrix()
          }
        }
      } catch (error) {
        console.warn("Could not update camera:", error)
      }
    }
  }

  // Handle lighting changes from controls
  const handleLightingChange = (lighting: LightingSettings) => {
    if (splineRef.current) {
      try {
        const lights = splineRef.current.scene.children.filter(
          (child: any) =>
            child.type === "DirectionalLight" || child.type === "AmbientLight" || child.type === "PointLight",
        )

        lights.forEach((light: any) => {
          if (light.type === "DirectionalLight" || light.type === "PointLight") {
            light.intensity = lighting.intensity
            if (lighting.color && typeof lighting.color === "string") {
              light.color.setHex(Number.parseInt(lighting.color.replace("#", "0x"), 16))
            }
            if (light.shadow) {
              light.shadow.opacity = lighting.shadowIntensity
            }
          } else if (light.type === "AmbientLight") {
            light.intensity = lighting.ambientIntensity
          }
        })
      } catch (error) {
        console.warn("Could not update lighting:", error)
      }
    }
  }

  // Reset scene to defaults
  const handleReset = () => {
    if (splineRef.current) {
      try {
        const camera = splineRef.current.findObjectByName("Camera")
        if (camera) {
          camera.position.set(0, 0, 5)
          camera.rotation.set(0, 0, 0)
          if (camera.fov) {
            camera.fov = 75
            camera.updateProjectionMatrix()
          }
        }

        // Reset lighting
        const lights = splineRef.current.scene.children.filter(
          (child: any) => child.type === "DirectionalLight" || child.type === "AmbientLight",
        )

        lights.forEach((light: any) => {
          if (light.type === "DirectionalLight") {
            light.intensity = 1
            light.color.setHex(0xffffff)
          } else if (light.type === "AmbientLight") {
            light.intensity = 0.4
          }
        })
      } catch (error) {
        console.warn("Could not reset scene:", error)
      }
    }
  }

  // Enhanced scene parameters
  const sceneParams = {
    controls: enableControls,
    autoRotate: autoRotate,
    quality: quality,
    shadows: enableShadows,
    postProcessing: enablePostProcessing,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  }

  // If there's an error and a fallback is provided, show the fallback
  if (hasError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={`relative ${className}`}>
      {/* Custom Controls */}
      {showCustomControls && !useObjViewer && (
        <div className="absolute top-4 right-4 z-20">
          <SplineControls
            onCameraChange={handleCameraChange}
            onLightingChange={handleLightingChange}
            onReset={handleReset}
          />
        </div>
      )}

      {isLoading && !useObjViewer && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-purple-500 rounded-full animate-spin animation-delay-150"></div>
            </div>
            <p className="text-blue-600 font-medium">Loading 3D Experience...</p>
          </div>
        </div>
      )}

      {useObjViewer ? (
        <div className="w-full h-full rounded-xl overflow-hidden">
          <OBJViewer objUrl={objUrl} mtlUrl={mtlUrl} enableControls={enableControls} autoRotate={autoRotate} />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl">
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <p className="text-blue-600 font-medium">Initializing 3D Scene...</p>
              </div>
            </div>
          }
        >
          <div
            className={`transition-all duration-700 relative ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            {scene && (
              <Spline
                scene={scene}
                onLoad={handleLoad}
                onError={handleError}
                style={{
                  background: "transparent",
                  borderRadius: "1rem",
                }}
              />
            )}
          </div>
        </Suspense>
      )}
    </div>
  )
}
