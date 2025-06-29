"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Camera, Lightbulb, Settings, X, RotateCw, ZoomIn, ZoomOut } from "lucide-react"

interface SplineControlsProps {
  onCameraChange?: (position: CameraPosition) => void
  onLightingChange?: (lighting: LightingSettings) => void
  onReset?: () => void
  className?: string
}

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
  ambientIntensity: number
  shadowIntensity: number
}

export function SplineControls({ onCameraChange, onLightingChange, onReset, className = "" }: SplineControlsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"camera" | "lighting">("camera")

  // Camera state
  const [camera, setCamera] = useState<CameraPosition>({
    x: 0,
    y: 0,
    z: 5,
    rotationX: 0,
    rotationY: 0,
    zoom: 1,
  })

  // Lighting state
  const [lighting, setLighting] = useState<LightingSettings>({
    intensity: 1,
    color: "#ffffff",
    ambientIntensity: 0.4,
    shadowIntensity: 0.8,
  })

  // Preset camera positions
  const cameraPresets = [
    { name: "Front", position: { x: 0, y: 0, z: 5, rotationX: 0, rotationY: 0, zoom: 1 } },
    { name: "Top", position: { x: 0, y: 5, z: 2, rotationX: -45, rotationY: 0, zoom: 1 } },
    { name: "Side", position: { x: 5, y: 0, z: 0, rotationX: 0, rotationY: 90, zoom: 1 } },
    { name: "Isometric", position: { x: 3, y: 3, z: 3, rotationX: -30, rotationY: 45, zoom: 1 } },
  ]

  // Lighting presets
  const lightingPresets = [
    { name: "Bright", settings: { intensity: 1.5, color: "#ffffff", ambientIntensity: 0.6, shadowIntensity: 0.9 } },
    { name: "Warm", settings: { intensity: 1.2, color: "#ffeb3b", ambientIntensity: 0.5, shadowIntensity: 0.7 } },
    { name: "Cool", settings: { intensity: 1.0, color: "#2196f3", ambientIntensity: 0.4, shadowIntensity: 0.8 } },
    { name: "Dramatic", settings: { intensity: 2.0, color: "#ffffff", ambientIntensity: 0.2, shadowIntensity: 1.0 } },
  ]

  // Update camera position
  const updateCamera = (newCamera: Partial<CameraPosition>) => {
    const updatedCamera = { ...camera, ...newCamera }
    setCamera(updatedCamera)
    onCameraChange?.(updatedCamera)
  }

  // Update lighting settings
  const updateLighting = (newLighting: Partial<LightingSettings>) => {
    const updatedLighting = { ...lighting, ...newLighting }
    setLighting(updatedLighting)
    onLightingChange?.(updatedLighting)
  }

  // Reset to defaults
  const handleReset = () => {
    const defaultCamera = { x: 0, y: 0, z: 5, rotationX: 0, rotationY: 0, zoom: 1 }
    const defaultLighting = { intensity: 1, color: "#ffffff", ambientIntensity: 0.4, shadowIntensity: 0.8 }

    setCamera(defaultCamera)
    setLighting(defaultLighting)
    onCameraChange?.(defaultCamera)
    onLightingChange?.(defaultLighting)
    onReset?.()
  }

  // Apply preset
  const applyPreset = (preset: any, type: "camera" | "lighting") => {
    if (type === "camera") {
      updateCamera(preset.position)
    } else {
      updateLighting(preset.settings)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Control Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/20 backdrop-blur-md hover:bg-black/30 text-white border border-white/20 rounded-full p-3 shadow-lg transition-all duration-300"
        size="sm"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
      </Button>

      {/* Controls Panel */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-black/80 backdrop-blur-xl rounded-xl border border-white/20 p-4 min-w-[320px] shadow-2xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">3D Controls</h3>
            <Button
              onClick={handleReset}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-white/10 rounded-lg p-1 mb-4">
            <button
              onClick={() => setActiveTab("camera")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "camera"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Camera className="h-4 w-4" />
              Camera
            </button>
            <button
              onClick={() => setActiveTab("lighting")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "lighting"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Lightbulb className="h-4 w-4" />
              Lighting
            </button>
          </div>

          {/* Camera Controls */}
          {activeTab === "camera" && (
            <div className="space-y-4">
              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-2">
                <Button
                  onClick={() => updateCamera({ rotationY: camera.rotationY - 15 })}
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10 p-2"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => updateCamera({ zoom: Math.min(camera.zoom + 0.2, 3) })}
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10 p-2"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => updateCamera({ zoom: Math.max(camera.zoom - 0.2, 0.5) })}
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10 p-2"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => updateCamera({ rotationY: camera.rotationY + 15 })}
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10 p-2"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>

              {/* Position Controls */}
              <div className="space-y-3">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Position X</label>
                  <input
                    type="range"
                    value={camera.x}
                    onChange={(e) => updateCamera({ x: Number(e.target.value) })}
                    min={-10}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{camera.x.toFixed(1)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Position Y</label>
                  <input
                    type="range"
                    value={camera.y}
                    onChange={(e) => updateCamera({ y: Number(e.target.value) })}
                    min={-10}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{camera.y.toFixed(1)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Distance</label>
                  <input
                    type="range"
                    value={camera.z}
                    onChange={(e) => updateCamera({ z: Number(e.target.value) })}
                    min={1}
                    max={20}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{camera.z.toFixed(1)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Zoom</label>
                  <input
                    type="range"
                    value={camera.zoom}
                    onChange={(e) => updateCamera({ zoom: Number(e.target.value) })}
                    min={0.5}
                    max={3}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{camera.zoom.toFixed(1)}x</span>
                </div>
              </div>

              {/* Camera Presets */}
              <div>
                <label className="text-white/80 text-sm mb-2 block">Presets</label>
                <div className="grid grid-cols-2 gap-2">
                  {cameraPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      onClick={() => applyPreset(preset, "camera")}
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-white hover:bg-white/10 text-xs"
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Lighting Controls */}
          {activeTab === "lighting" && (
            <div className="space-y-4">
              {/* Lighting Controls */}
              <div className="space-y-3">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Light Intensity</label>
                  <input
                    type="range"
                    value={lighting.intensity}
                    onChange={(e) => updateLighting({ intensity: Number(e.target.value) })}
                    min={0}
                    max={3}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{lighting.intensity.toFixed(1)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Ambient Light</label>
                  <input
                    type="range"
                    value={lighting.ambientIntensity}
                    onChange={(e) => updateLighting({ ambientIntensity: Number(e.target.value) })}
                    min={0}
                    max={1}
                    step={0.05}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{lighting.ambientIntensity.toFixed(2)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Shadow Intensity</label>
                  <input
                    type="range"
                    value={lighting.shadowIntensity}
                    onChange={(e) => updateLighting({ shadowIntensity: Number(e.target.value) })}
                    min={0}
                    max={1}
                    step={0.05}
                    className="w-full"
                  />
                  <span className="text-white/60 text-xs">{lighting.shadowIntensity.toFixed(2)}</span>
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Light Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={lighting.color}
                      onChange={(e) => updateLighting({ color: e.target.value })}
                      className="w-8 h-8 rounded border border-white/20 bg-transparent cursor-pointer"
                    />
                    <span className="text-white/60 text-xs">{lighting.color}</span>
                  </div>
                </div>
              </div>

              {/* Lighting Presets */}
              <div>
                <label className="text-white/80 text-sm mb-2 block">Presets</label>
                <div className="grid grid-cols-2 gap-2">
                  {lightingPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      onClick={() => applyPreset(preset, "lighting")}
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-white hover:bg-white/10 text-xs"
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-white/50 text-xs text-center">Use controls to customize your 3D experience</p>
          </div>
        </div>
      )}
    </div>
  )
}
