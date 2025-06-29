import type { Metadata } from "next"
import { Settings, Sliders, Ruler, Clock } from "lucide-react"
import { SubcategoryHeader } from "@/components/subcategory/subcategory-header"
import { SubcategorySection } from "@/components/subcategory/subcategory-section"
import { SubcategoryVisualIntro } from "@/components/subcategory/subcategory-visual-intro"
import { SubcategoryTextWithImage } from "@/components/subcategory/subcategory-text-with-image"
import { SubcategoryExpertTips } from "@/components/subcategory/subcategory-expert-tips"
import { SubcategoryQuiz } from "@/components/subcategory/subcategory-quiz"
import { SubcategoryCTA } from "@/components/subcategory/subcategory-cta"
import { SubcategoryApplications } from "@/components/subcategory/subcategory-applications"

export const metadata: Metadata = {
  title: "3D Printer Setup & Calibration Guide | 3DBlueprint.io",
  description:
    "Learn how to properly set up and calibrate your 3D printer for optimal performance. Step-by-step instructions for bed leveling, temperature tuning, and more.",
  openGraph: {
    title: "3D Printer Setup & Calibration Guide | 3DBlueprint.io",
    description:
      "Learn how to properly set up and calibrate your 3D printer for optimal performance. Step-by-step instructions for bed leveling, temperature tuning, and more.",
    images: [
      {
        url: "/images/3d-printer-electronics.png",
        width: 1200,
        height: 630,
        alt: "3D Printer Setup and Calibration",
      },
    ],
  },
}

export default function PrinterSetupPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubcategoryHeader
        category="fundamentals"
        title="3D Printer Setup & Calibration"
        description="Master the essential steps to set up your 3D printer correctly and achieve perfect calibration for high-quality prints every time."
        imagePath="/images/3d-printer-electronics.png"
        imageAlt="3D printer being calibrated with precision tools"
      />

      <SubcategorySection>
        <SubcategoryVisualIntro
          category="fundamentals"
          cards={[
            { icon: Settings, title: "Setup Time", value: "1-2 hrs" },
            { icon: Sliders, title: "Calibration", value: "5 Steps" },
            { icon: Ruler, title: "Precision", value: "±0.1mm" },
            { icon: Clock, title: "Maintenance", value: "Monthly" },
          ]}
        />

        <SubcategoryTextWithImage
          category="fundamentals"
          title="Why Proper Setup Matters"
          content="A well-calibrated 3D printer is the foundation of successful printing. Even the most expensive printer will produce poor results if not properly set up and calibrated. This guide walks you through the essential steps to ensure your printer is correctly configured, from initial assembly to fine-tuning calibration. Following these steps will dramatically improve print quality, reduce failures, and extend the life of your printer."
          imagePath="/images/3d-printing-specialist.png"
          imageAlt="3D printing specialist calibrating a printer"
          imagePosition="right"
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Essential Setup & Calibration Steps</h2>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">Initial Assembly</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">1</span>
                <span>Unpack and identify all components using the manual</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">2</span>
                <span>Assemble the frame ensuring all bolts are properly tightened</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">3</span>
                <span>Install the power supply and control board according to instructions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">4</span>
                <span>Mount the motors and connect all wiring harnesses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">5</span>
                <span>Install the build plate and extruder assembly</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">Bed Leveling</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">1</span>
                <span>Heat the bed to printing temperature (typically 60°C for PLA)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">2</span>
                <span>Use the printer's control panel to home all axes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">3</span>
                <span>Adjust each corner using a piece of paper to check nozzle distance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">4</span>
                <span>Check the center and make additional adjustments if needed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">5</span>
                <span>For automatic bed leveling, run the leveling routine and set Z-offset</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">Extruder Calibration</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">1</span>
                <span>Mark filament 120mm from entry point on the extruder</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">2</span>
                <span>Command the printer to extrude 100mm of filament</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">3</span>
                <span>Measure the remaining distance to calculate actual extrusion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">4</span>
                <span>Calculate new E-steps value: Current E-steps × (100 ÷ Actual extrusion)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">5</span>
                <span>Update firmware settings and save configuration</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">Temperature Tuning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">1</span>
                <span>Print a temperature tower for your specific filament</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">2</span>
                <span>Examine each section for stringing, layer adhesion, and detail</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">3</span>
                <span>Identify the optimal temperature range for your material</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">4</span>
                <span>Set bed temperature based on material requirements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">5</span>
                <span>Save optimal settings in your slicer profiles</span>
              </li>
            </ul>
          </div>
        </div>

        <SubcategoryTextWithImage
          category="fundamentals"
          title="Advanced Calibration Techniques"
          content="Once you've mastered the basics, advanced calibration can take your prints to the next level. Fine-tuning retraction settings reduces stringing, calibrating flow rate improves dimensional accuracy, and adjusting acceleration and jerk settings can minimize artifacts like ringing. Consider using calibration prints like retraction towers, flow rate cubes, and acceleration tests to dial in these settings. Remember that calibration is an ongoing process—different materials and print requirements may need different settings."
          imagePath="/images/3d-printing-firmware-code.png"
          imageAlt="Advanced calibration settings on a 3D printer control screen"
          imagePosition="left"
        />
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryApplications
          category="fundamentals"
          title="Calibration Test Prints"
          applications={[
            {
              title: "Calibration Cube",
              description:
                "A simple 20mm cube used to verify dimensional accuracy in all axes. Check each dimension with calipers to identify any scaling issues.",
              imagePath: "/images/3d-printing-lab-with-filaments.png",
              imageAlt: "3D printed calibration cube being measured with calipers",
              materials: ["Any Material"],
            },
            {
              title: "Temperature Tower",
              description:
                "A graduated tower with different temperatures for each section. Helps identify the optimal printing temperature for your specific filament.",
              imagePath: "/images/specialized-filaments.png",
              imageAlt: "Temperature tower showing different print qualities at various temperatures",
              materials: ["PLA", "PETG", "ABS"],
            },
            {
              title: "Benchy",
              description:
                "The classic 3D printer torture test. This small boat model tests overhangs, bridging, small details, and overall print quality.",
              imagePath: "/images/3d-design-hologram.png",
              imageAlt: "3D printed Benchy boat model used for calibration",
              materials: ["Any Material"],
            },
            {
              title: "Retraction Test",
              description:
                "Tests different retraction settings to minimize stringing between separate parts. Essential for dialing in clean prints with no stringing.",
              imagePath: "/images/multi-material-printing.png",
              imageAlt: "Retraction test print showing different levels of stringing",
              materials: ["PLA", "PETG", "ABS"],
            },
          ]}
        />

        <SubcategoryExpertTips
          category="fundamentals"
          title="Expert Calibration Tips"
          tips={[
            {
              tip: "Always calibrate your extruder steps first, then flow rate. They're related but different - steps control how much the motor turns, while flow fine-tunes the actual extrusion volume.",
              author: "David Kim",
              role: "3D Printing Engineer",
              avatarPath: "/team/david-kim.png",
            },
            {
              tip: "Keep a calibration log for each filament type and brand. Different materials and even different colors from the same brand can require slightly different settings.",
              author: "Emma Wilson",
              role: "Digital Fabrication Specialist",
              avatarPath: "/professional-woman-headshot.png",
            },
            {
              tip: "For perfect first layers, clean your build plate with isopropyl alcohol before each print and re-level your bed every few prints or when changing materials.",
              author: "Raj Patel",
              role: "Maker Space Coordinator",
              avatarPath: "/indian-developer-portrait.png",
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <SubcategoryQuiz
          category="fundamentals"
          title="Test Your Calibration Knowledge"
          description="Check your understanding of 3D printer setup and calibration."
          questions={[
            {
              question: "What is the purpose of bed leveling?",
              options: [
                "To make the printer look level on your desk",
                "To ensure the nozzle maintains a consistent distance from the build surface",
                "To prevent the printer from vibrating",
                "To calibrate the X and Y axes",
              ],
              correctAnswer: 1,
              explanation:
                "Bed leveling ensures the nozzle maintains a consistent distance from the build surface across the entire print area, which is crucial for first layer adhesion and overall print quality.",
            },
            {
              question: "What tool is commonly used to assist with manual bed leveling?",
              options: ["A ruler", "A piece of paper", "A level", "A screwdriver"],
              correctAnswer: 1,
              explanation:
                "A piece of paper (typically about 0.1mm thick) is used to gauge the gap between the nozzle and bed. You should feel slight resistance when moving the paper.",
            },
            {
              question: "What does extruder calibration (E-steps) control?",
              options: [
                "The temperature of the extruder",
                "The speed of the extruder motor",
                "How much filament is pushed through the nozzle",
                "The diameter of the extruded filament",
              ],
              correctAnswer: 2,
              explanation:
                "E-steps calibration ensures the extruder motor pushes exactly the amount of filament it's commanded to, which is essential for dimensional accuracy.",
            },
            {
              question: "What is a temperature tower used for?",
              options: [
                "Testing the maximum temperature your printer can reach",
                "Cooling the printer after use",
                "Finding the optimal printing temperature for a specific filament",
                "Calibrating the thermistor",
              ],
              correctAnswer: 2,
              explanation:
                "A temperature tower prints the same geometry at different temperatures, allowing you to visually identify which temperature produces the best results for a specific filament.",
            },
            {
              question: "How often should you calibrate your 3D printer?",
              options: [
                "Only when you first set it up",
                "After any major changes (new nozzle, firmware update, etc.)",
                "Every time you print",
                "Once a year",
              ],
              correctAnswer: 1,
              explanation:
                "You should recalibrate after any major changes to your printer, such as replacing the nozzle, updating firmware, changing the extruder, or if you notice print quality issues.",
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryCTA
          category="fundamentals"
          title="Ready for Your First Print?"
          description="Now that your printer is properly set up and calibrated, it's time to create your first successful 3D print."
          buttonText="First Print Guide"
          buttonLink="/blueprint/fundamentals/first-print"
        />
      </SubcategorySection>
    </main>
  )
}
