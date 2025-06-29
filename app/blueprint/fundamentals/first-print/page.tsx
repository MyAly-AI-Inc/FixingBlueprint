import type { Metadata } from "next"
import { Rocket, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { CategoryHero } from "@/components/category-hero"
import { SubcategorySection } from "@/components/subcategory/subcategory-section"
import { SubcategoryVisualIntro } from "@/components/subcategory/subcategory-visual-intro"
import { SubcategoryTextWithImage } from "@/components/subcategory/subcategory-text-with-image"
import { SubcategoryExpertTips } from "@/components/subcategory/subcategory-expert-tips"
import { SubcategoryQuiz } from "@/components/subcategory/subcategory-quiz"
import { SubcategoryCTA } from "@/components/subcategory/subcategory-cta"
import { SubcategoryApplications } from "@/components/subcategory/subcategory-applications"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Your First 3D Print Guide | 3DBlueprint.io",
  description:
    "Step-by-step guide to completing your first successful 3D print. Learn how to prepare your model, configure slicer settings, and monitor the printing process.",
  openGraph: {
    title: "Your First 3D Print Guide | 3DBlueprint.io",
    description:
      "Step-by-step guide to completing your first successful 3D print. Learn how to prepare your model, configure slicer settings, and monitor the printing process.",
    images: [
      {
        url: "/images/3d-printing-beginner.png",
        width: 1200,
        height: 630,
        alt: "First 3D Print Guide",
      },
    ],
  },
}

export default function FirstPrintPage() {
  return (
    <main className="min-h-screen bg-white">
      <CategoryHero
        category="fundamentals"
        title="Your First 3D Print"
        description="A complete guide to successfully completing your first 3D print, from selecting a model to removing it from the build plate."
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          category="fundamentals"
          items={[
            { label: "Blueprint", href: "/blueprint" },
            { label: "Fundamentals", href: "/blueprint/fundamentals" },
            { label: "Your First 3D Print", href: "/blueprint/fundamentals/first-print", isCurrent: true },
          ]}
          className="my-6"
        />
      </div>

      <SubcategorySection>
        <SubcategoryVisualIntro
          category="fundamentals"
          cards={[
            { icon: Clock, title: "Print Time", value: "1-3 hrs" },
            { icon: Rocket, title: "Difficulty", value: "Beginner" },
            { icon: CheckCircle, title: "Success Rate", value: "90%" },
            { icon: AlertTriangle, title: "Common Issues", value: "3" },
          ]}
        />

        <SubcategoryTextWithImage
          category="fundamentals"
          title="Preparing for Your First Print"
          content="Your first 3D print is an exciting milestone in your maker journey. This guide will walk you through the entire process, from selecting an appropriate beginner model to removing your finished print from the build plate. We'll cover the essential steps, common pitfalls to avoid, and tips to ensure your first printing experience is successful. Remember that 3D printing involves a learning curve, so don't be discouraged if your first print isn't perfect—each print is an opportunity to learn and improve."
          imagePath="/images/3d-printing-beginner.png"
          imageAlt="Beginner setting up their first 3D print"
          imagePosition="right"
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">First Print Workflow</h2>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">1. Choose the Right Model</h3>
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/3d-design-hologram.png"
                alt="3D model selection for beginners"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-700">
              For your first print, select a simple model without overhangs, bridges, or fine details. Look for models
              specifically tagged as "beginner-friendly" on sites like Thingiverse, Printables, or Cults3D. Good options
              include:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-700">
              <li>Simple geometric shapes (cubes, pyramids)</li>
              <li>Low-poly figurines</li>
              <li>Basic household items (phone stands, cable clips)</li>
              <li>Calibration cubes or test prints</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">2. Slicer Setup</h3>
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/3d-printing-firmware-code.png"
                alt="Slicer software settings for first print"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-700">
              Use a slicer program (like Cura, PrusaSlicer, or Simplify3D) to convert your 3D model into printer
              instructions. For your first print:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-700">
              <li>Use the default profile for your printer if available</li>
              <li>Set layer height to 0.2mm (balance of quality and speed)</li>
              <li>Use 20% infill (sufficient for most models)</li>
              <li>Enable supports only if absolutely necessary</li>
              <li>Set print speed to 50mm/s or lower</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">3. Printer Preparation</h3>
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/3d-printer-electronics.png"
                alt="3D printer preparation"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-700">Before starting your print, ensure your printer is ready:</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-700">
              <li>Verify the bed is level (crucial for first layer adhesion)</li>
              <li>Clean the build plate with isopropyl alcohol</li>
              <li>Check that filament is properly loaded and not tangled</li>
              <li>Preheat the nozzle and bed to the recommended temperatures</li>
              <li>Apply adhesion solution if needed (glue stick, hairspray, etc.)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-blue-600">4. Monitoring & Completion</h3>
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/3d-printing-lab-with-filaments.png"
                alt="Monitoring a 3D print in progress"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-700">During and after printing:</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-700">
              <li>Watch the first layer closely to ensure proper adhesion</li>
              <li>Check periodically but avoid opening enclosures if possible</li>
              <li>Wait for the bed to cool before removing the print</li>
              <li>Use a scraper tool to gently remove the print</li>
              <li>Inspect the print and note any issues for future improvement</li>
            </ul>
          </div>
        </div>

        <SubcategoryTextWithImage
          category="fundamentals"
          title="Troubleshooting Common First Print Issues"
          content="Even with careful preparation, you might encounter some issues with your first print. The most common problems include poor bed adhesion (first layer not sticking), stringing (thin strands of filament between parts), and layer shifting (misaligned layers). Don't worry—these are normal challenges that every 3D printing enthusiast faces. The key is to identify the specific issue, understand its cause, and make the necessary adjustments for your next print. Remember that 3D printing is an iterative process, and each print helps you refine your skills."
          imagePath="/images/3dprinting-troubleshooting.jpeg"
          imageAlt="Troubleshooting common 3D printing issues"
          imagePosition="left"
        />
      </SubcategorySection>

      <SubcategorySection>
        <h2 className="mb-8 text-2xl font-bold text-gray-900">First Print Troubleshooting Guide</h2>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-red-100 bg-red-50 p-6">
            <h3 className="mb-3 text-lg font-bold text-red-700">Poor Bed Adhesion</h3>
            <p className="mb-4 text-gray-700">Print not sticking to the build plate or coming loose during printing.</p>
            <h4 className="mb-2 font-semibold text-gray-900">Solutions:</h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              <li>Re-level the bed (most common fix)</li>
              <li>Clean the build plate thoroughly</li>
              <li>Increase bed temperature by 5°C</li>
              <li>Use adhesion helpers (glue stick, hairspray)</li>
              <li>Add a brim or raft in slicer settings</li>
            </ul>
          </div>

          <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-6">
            <h3 className="mb-3 text-lg font-bold text-yellow-700">Stringing</h3>
            <p className="mb-4 text-gray-700">Thin strands of filament between separate parts of your print.</p>
            <h4 className="mb-2 font-semibold text-gray-900">Solutions:</h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              <li>Increase retraction distance (by 1mm)</li>
              <li>Increase retraction speed</li>
              <li>Lower printing temperature by 5-10°C</li>
              <li>Enable "combing" in slicer settings</li>
              <li>Ensure filament is dry (moisture causes stringing)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-700">Layer Shifting</h3>
            <p className="mb-4 text-gray-700">Layers appear misaligned, creating a "stepped" appearance.</p>
            <h4 className="mb-2 font-semibold text-gray-900">Solutions:</h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              <li>Reduce print speed by 25%</li>
              <li>Check and tighten belts</li>
              <li>Ensure stepper motors aren't overheating</li>
              <li>Check that the printer is on a stable surface</li>
              <li>Verify nothing is obstructing the print head</li>
            </ul>
          </div>
        </div>

        <SubcategoryApplications
          category="fundamentals"
          title="Recommended First Prints"
          applications={[
            {
              title: "Calibration Cube",
              description:
                "A simple 20mm cube that helps verify your printer's dimensional accuracy. It's quick to print and gives you immediate feedback on your printer's performance.",
              imagePath: "/images/3d-printing-lab-with-filaments.png",
              imageAlt: "3D printed calibration cube",
              materials: ["PLA"],
            },
            {
              title: "Phone Stand",
              description:
                "A practical item that's simple to print and doesn't require supports. It's satisfying to create something useful on your first attempt.",
              imagePath: "/images/desk-organizer.png",
              imageAlt: "3D printed phone stand",
              materials: ["PLA", "PETG"],
            },
            {
              title: "Low-Poly Figurine",
              description:
                "Simple geometric models with flat surfaces are forgiving for beginners. These decorative items make great desk accessories or gifts.",
              imagePath: "/images/3d-design-hologram.png",
              imageAlt: "Low-poly 3D printed figurine",
              materials: ["PLA"],
            },
            {
              title: "Cable Organizer",
              description:
                "A practical print that solves a common problem. Cable organizers are simple, quick to print, and immediately useful.",
              imagePath: "/images/smart-container.png",
              imageAlt: "3D printed cable organizer",
              materials: ["PLA", "PETG"],
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <SubcategoryExpertTips
          category="fundamentals"
          title="Expert First Print Tips"
          tips={[
            {
              tip: "Watch the first layer like a hawk. If it's not sticking properly, cancel the print, adjust your settings, and start again. A good first layer is the foundation of a successful print.",
              author: "Sarah Chen",
              role: "3D Printing Instructor",
              avatarPath: "/team/sarah-chen.png",
            },
            {
              tip: "Start with PLA filament for your first prints. It's the most forgiving material, requires lower temperatures, and doesn't warp easily. Save the exotic materials for when you have more experience.",
              author: "Michael Rodriguez",
              role: "Maker Space Director",
              avatarPath: "/team/michael-rodriguez.png",
            },
            {
              tip: "Take photos of your first print, even if it fails! Document your journey and keep notes on what worked and what didn't. You'll be amazed at how quickly you progress.",
              author: "Priya Sharma",
              role: "Digital Fabrication Artist",
              avatarPath: "/team/priya-sharma.png",
            },
          ]}
        />

        <SubcategoryQuiz
          category="fundamentals"
          title="Test Your First Print Knowledge"
          description="Check your understanding of the 3D printing process."
          questions={[
            {
              question: "What is the recommended layer height for a beginner's first print?",
              options: ["0.05mm", "0.1mm", "0.2mm", "0.4mm"],
              correctAnswer: 2,
              explanation:
                "0.2mm provides a good balance between print quality and speed. Thinner layers (0.05mm or 0.1mm) take much longer to print and are more prone to failures, while thicker layers (0.4mm) may be too coarse for most models.",
            },
            {
              question: "Which of these is NOT a good choice for a first print?",
              options: [
                "A simple phone stand",
                "A calibration cube",
                "A complex mechanical assembly with moving parts",
                "A low-poly figurine",
              ],
              correctAnswer: 2,
              explanation:
                "Complex mechanical assemblies with moving parts require precise calibration and often include challenging features like overhangs and tight tolerances. These should be attempted after gaining experience with simpler prints.",
            },
            {
              question: "What should you do if your print isn't sticking to the bed?",
              options: [
                "Increase print speed",
                "Decrease bed temperature",
                "Re-level the bed and clean the build surface",
                "Reduce the first layer height",
              ],
              correctAnswer: 2,
              explanation:
                "Poor bed adhesion is most commonly caused by an unlevel bed or a dirty build surface. Re-leveling the bed and cleaning it with isopropyl alcohol often resolves adhesion issues.",
            },
            {
              question: "What infill percentage is typically recommended for a beginner's first print?",
              options: ["0%", "10-20%", "50-60%", "100%"],
              correctAnswer: 1,
              explanation:
                "10-20% infill is sufficient for most decorative or basic functional prints. It provides adequate strength while saving material and print time. Higher infill percentages are only needed for parts that require additional strength.",
            },
            {
              question: "When is the best time to remove your print from the build plate?",
              options: [
                "Immediately after printing finishes",
                "After the build plate has cooled down",
                "While the print is still in progress",
                "24 hours after printing",
              ],
              correctAnswer: 1,
              explanation:
                "Waiting for the build plate to cool down allows the plastic to contract slightly, making it easier to remove. Attempting to remove a print while the plate is still hot can damage both the print and the build surface.",
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryCTA
          category="fundamentals"
          title="Ready to Advance Your Skills?"
          description="Now that you've completed your first print, it's time to explore more advanced 3D printing techniques and materials."
          buttonText="Explore Design & Modeling"
          buttonLink="/blueprint/design-modeling"
        />
      </SubcategorySection>
    </main>
  )
}
