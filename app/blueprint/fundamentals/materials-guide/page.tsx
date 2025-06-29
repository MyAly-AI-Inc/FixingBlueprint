import type { Metadata } from "next"
import { Package, Layers, Gauge, DollarSign } from "lucide-react"
import { SubcategoryHeader } from "@/components/subcategory/subcategory-header"
import { SubcategorySection } from "@/components/subcategory/subcategory-section"
import { SubcategoryVisualIntro } from "@/components/subcategory/subcategory-visual-intro"
import { SubcategoryMaterialPreview } from "@/components/subcategory/subcategory-material-preview"
import { SubcategoryMaterialCard } from "@/components/subcategory/subcategory-material-card"
import { SubcategoryQuiz } from "@/components/subcategory/subcategory-quiz"
import { SubcategoryComparison } from "@/components/subcategory/subcategory-comparison"
import { SubcategoryCTA } from "@/components/subcategory/subcategory-cta"
import { SubcategoryTextWithImage } from "@/components/subcategory/subcategory-text-with-image"
import { SubcategoryExpertTips } from "@/components/subcategory/subcategory-expert-tips"
import { SubcategoryApplications } from "@/components/subcategory/subcategory-applications"

export const metadata: Metadata = {
  title: "3D Printing Materials Guide | 3DBlueprint.io",
  description:
    "Comprehensive guide to 3D printing materials including filaments, resins, and specialty materials. Learn about properties, uses, and selection criteria.",
  openGraph: {
    title: "3D Printing Materials Guide | 3DBlueprint.io",
    description:
      "Comprehensive guide to 3D printing materials including filaments, resins, and specialty materials. Learn about properties, uses, and selection criteria.",
    images: [
      {
        url: "/images/3d-printing-materials.png",
        width: 1200,
        height: 630,
        alt: "3D Printing Materials Guide",
      },
    ],
  },
}

export default function MaterialsGuidePage() {
  const materialCards = [
    {
      title: "PLA",
      subtitle: "Polylactic Acid",
      imagePath: "/images/specialized-filaments.png",
      imageAlt: "Colorful PLA filament spools",
      properties: [
        { icon: "strength" as const, rating: 3 as const },
        { icon: "temperature" as const, rating: 1 as const },
        { icon: "durability" as const, rating: 3 as const },
        { icon: "cost" as const, rating: 5 as const },
      ],
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57"],
    },
    {
      title: "ABS",
      subtitle: "Acrylonitrile Butadiene Styrene",
      imagePath: "/images/multi-material-printing.png",
      imageAlt: "ABS printed parts showing durability",
      properties: [
        { icon: "strength" as const, rating: 4 as const },
        { icon: "temperature" as const, rating: 4 as const },
        { icon: "durability" as const, rating: 4 as const },
        { icon: "cost" as const, rating: 4 as const },
      ],
      colors: ["#2C3E50", "#E74C3C", "#F39C12", "#27AE60", "#3498DB"],
    },
    {
      title: "PETG",
      subtitle: "Polyethylene Terephthalate Glycol",
      imagePath: "/images/large-format-printing.png",
      imageAlt: "PETG printed mechanical components",
      properties: [
        { icon: "strength" as const, rating: 4 as const },
        { icon: "temperature" as const, rating: 3 as const },
        { icon: "durability" as const, rating: 4 as const },
        { icon: "cost" as const, rating: 3 as const },
      ],
      colors: ["#00000000", "#3498DB", "#E74C3C", "#F39C12", "#2ECC71"],
    },
    {
      title: "TPU",
      subtitle: "Thermoplastic Polyurethane",
      imagePath: "/images/3d-printing-lab-with-filaments.png",
      imageAlt: "Flexible TPU printed objects",
      properties: [
        { icon: "strength" as const, rating: 3 as const },
        { icon: "temperature" as const, rating: 3 as const },
        { icon: "durability" as const, rating: 4 as const },
        { icon: "cost" as const, rating: 3 as const },
      ],
      colors: ["#E74C3C", "#2C3E50", "#F39C12", "#00000000", "#3498DB"],
    },
    {
      title: "Nylon",
      subtitle: "Polyamide",
      imagePath: "/images/3d-printing-specialist.png",
      imageAlt: "Nylon printed engineering parts",
      properties: [
        { icon: "strength" as const, rating: 5 as const },
        { icon: "temperature" as const, rating: 5 as const },
        { icon: "durability" as const, rating: 5 as const },
        { icon: "cost" as const, rating: 2 as const },
      ],
      colors: ["#FFFFFF", "#2C3E50", "#7F8C8D", "#34495E"],
    },
    {
      title: "Resin",
      subtitle: "Photopolymer",
      imagePath: "/images/3d-design-hologram.png",
      imageAlt: "Detailed resin printed figurines",
      properties: [
        { icon: "strength" as const, rating: 3 as const },
        { icon: "temperature" as const, rating: 1 as const },
        { icon: "durability" as const, rating: 3 as const },
        { icon: "cost" as const, rating: 2 as const },
      ],
      colors: ["#00000000", "#7F8C8D", "#E74C3C", "#3498DB", "#2ECC71"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <SubcategoryHeader
        category="fundamentals"
        title="3D Printing Materials Guide"
        description="Discover the perfect materials for your 3D printing projects. From common filaments to specialty resins, learn about properties, applications, and how to choose the right material for your needs."
        imagePath="/images/3d-printing-materials.png"
        imageAlt="Various 3D printing materials including filaments and resins"
      />

      <SubcategorySection>
        <SubcategoryVisualIntro
          category="fundamentals"
          cards={[
            { icon: Package, title: "Material Types", value: "15+" },
            { icon: Layers, title: "Print Layers", value: "0.1mm" },
            { icon: Gauge, title: "Temp Range", value: "180-260°C" },
            { icon: DollarSign, title: "Cost Range", value: "$15-80/kg" },
          ]}
        />

        <SubcategoryTextWithImage
          category="fundamentals"
          title="Understanding 3D Printing Materials"
          content="The material you choose for your 3D printing project dramatically affects the final result. Each material has unique properties that make it suitable for specific applications. From biodegradable PLA for decorative items to durable ABS for functional parts, your choice of filament determines strength, flexibility, heat resistance, and appearance of your prints. This guide will help you navigate the growing world of 3D printing materials to find the perfect match for your project needs."
          imagePath="/images/3d-printing-lab-with-filaments.png"
          imageAlt="Various 3D printing filaments in a laboratory setting"
          imagePosition="right"
        />

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Popular Materials at a Glance</h2>
          <SubcategoryMaterialPreview
            category="fundamentals"
            materials={[
              { name: "PLA", imagePath: "/images/specialized-filaments.png", color: "#4ECDC4" },
              { name: "ABS", imagePath: "/images/multi-material-printing.png", color: "#E74C3C" },
              { name: "PETG", imagePath: "/images/large-format-printing.png", color: "#3498DB" },
              { name: "TPU", imagePath: "/images/3d-printing-lab-with-filaments.png", color: "#F39C12" },
              { name: "Nylon", imagePath: "/images/3d-printing-specialist.png", color: "#2C3E50" },
              { name: "Resin", imagePath: "/images/3d-design-hologram.png", color: "#9B59B6" },
              { name: "PVA", imagePath: "/images/3d-printing-materials.png", color: "#1ABC9C" },
              { name: "PC", imagePath: "/images/3d-printer-electronics.png", color: "#34495E" },
            ]}
          />
        </div>
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Explore 3D Printing Materials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {materialCards.map((card, index) => (
            <SubcategoryMaterialCard key={index} category="fundamentals" card={card} index={index} />
          ))}
        </div>
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryTextWithImage
          category="fundamentals"
          title="How to Choose the Right Material"
          content="Selecting the right material starts with understanding your project requirements. Consider the mechanical properties needed (strength, flexibility, durability), environmental factors (heat resistance, UV stability, water resistance), aesthetic requirements (color, finish, transparency), and practical considerations (print difficulty, cost, availability). For functional parts that need to withstand stress, consider ABS, PETG, or Nylon. For decorative items where detail matters, PLA or resin might be better choices. Always match your material to both your printer's capabilities and your project's needs."
          imagePath="/images/3d-printing-specialist.png"
          imageAlt="3D printing specialist examining different material samples"
          imagePosition="left"
        />

        <SubcategoryApplications
          category="fundamentals"
          title="Real-World Applications"
          applications={[
            {
              title: "Functional Prototypes",
              description:
                "Create working prototypes to test form, fit, and function before final production. These prototypes can validate designs and identify issues early in development.",
              imagePath: "/images/3d-design-hologram.png",
              imageAlt: "3D printed functional prototype with moving parts",
              materials: ["ABS", "PETG", "Nylon"],
            },
            {
              title: "Architectural Models",
              description:
                "Detailed architectural models help visualize buildings and spaces. These models can include intricate details and accurate scaling for presentation purposes.",
              imagePath: "/images/3d-printing-lab-with-filaments.png",
              imageAlt: "3D printed architectural model of a modern building",
              materials: ["PLA", "Resin"],
            },
            {
              title: "Custom Tools & Fixtures",
              description:
                "Create specialized tools and fixtures for specific tasks. These custom solutions can improve efficiency and ergonomics in various workflows.",
              imagePath: "/images/multi-material-printing.png",
              imageAlt: "3D printed custom tools and fixtures for workshop use",
              materials: ["ABS", "PETG", "Nylon"],
            },
            {
              title: "Medical Models",
              description:
                "Anatomical models for surgical planning and education. These models can replicate patient-specific anatomy for better surgical outcomes.",
              imagePath: "/images/specialized-filaments.png",
              imageAlt: "3D printed medical model of human anatomy",
              materials: ["PLA", "Resin", "TPU"],
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <SubcategoryComparison
          category="fundamentals"
          title="Material Properties Comparison"
          description="Compare key properties to find the perfect material for your project."
          propertyLabels={{
            strength: "Strength",
            flexibility: "Flexibility",
            temperature: "Heat Resistance",
            durability: "Durability",
            printEase: "Ease of Printing",
            cost: "Cost",
          }}
          items={[
            {
              name: "PLA",
              properties: {
                strength: { value: "Medium", rating: 3 },
                flexibility: { value: "Low", rating: 1 },
                temperature: { value: "60°C", rating: 1 },
                durability: { value: "Medium", rating: 3 },
                printEase: { value: "Very Easy", rating: 5 },
                cost: { value: "$20/kg", rating: 4 },
              },
            },
            {
              name: "ABS",
              properties: {
                strength: { value: "High", rating: 4 },
                flexibility: { value: "Medium", rating: 2 },
                temperature: { value: "105°C", rating: 4 },
                durability: { value: "High", rating: 4 },
                printEase: { value: "Moderate", rating: 2 },
                cost: { value: "$25/kg", rating: 4 },
              },
            },
            {
              name: "PETG",
              properties: {
                strength: { value: "High", rating: 4 },
                flexibility: { value: "Medium", rating: 3 },
                temperature: { value: "75°C", rating: 3 },
                durability: { value: "High", rating: 4 },
                printEase: { value: "Easy", rating: 3 },
                cost: { value: "$30/kg", rating: 3 },
              },
            },
            {
              name: "TPU",
              properties: {
                strength: { value: "Medium", rating: 3 },
                flexibility: { value: "Very High", rating: 5 },
                temperature: { value: "80°C", rating: 3 },
                durability: { value: "High", rating: 4 },
                printEase: { value: "Difficult", rating: 2 },
                cost: { value: "$40/kg", rating: 3 },
              },
            },
            {
              name: "Nylon",
              properties: {
                strength: { value: "Very High", rating: 5 },
                flexibility: { value: "Medium", rating: 3 },
                temperature: { value: "180°C", rating: 5 },
                durability: { value: "Very High", rating: 5 },
                printEase: { value: "Difficult", rating: 2 },
                cost: { value: "$50/kg", rating: 2 },
              },
            },
            {
              name: "Resin",
              properties: {
                strength: { value: "Medium", rating: 3 },
                flexibility: { value: "Low", rating: 1 },
                temperature: { value: "50°C", rating: 1 },
                durability: { value: "Medium", rating: 3 },
                printEase: { value: "Different", rating: 3 },
                cost: { value: "$80/L", rating: 2 },
              },
            },
          ]}
          defaultVisibleItems={["PLA", "ABS", "PETG"]}
        />
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryExpertTips
          category="fundamentals"
          title="Expert Tips for Material Success"
          tips={[
            {
              tip: "Always store PLA in airtight containers with desiccant. PLA absorbs moisture from the air, which can cause poor print quality and bubbling during printing.",
              author: "Sarah Chen",
              role: "Materials Specialist",
              avatarPath: "/team/sarah-chen.png",
            },
            {
              tip: "When printing with ABS, an enclosure makes a huge difference. It prevents warping by maintaining a consistent temperature around your print.",
              author: "Michael Rodriguez",
              role: "3D Printing Technician",
              avatarPath: "/team/michael-rodriguez.png",
            },
            {
              tip: "For flexible filaments like TPU, print slowly (around 20-30mm/s) and use a direct drive extruder rather than a Bowden setup for best results.",
              author: "Priya Sharma",
              role: "Product Designer",
              avatarPath: "/team/priya-sharma.png",
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection className="bg-gray-50">
        <SubcategoryQuiz
          category="fundamentals"
          title="Test Your Material Knowledge"
          description="Quick quiz to check your understanding of 3D printing materials."
          questions={[
            {
              question: "Which material is best for beginners?",
              options: ["ABS", "PLA", "Nylon", "TPU"],
              correctAnswer: 1,
              explanation:
                "PLA is biodegradable, prints at lower temperatures, and doesn't require a heated bed, making it perfect for beginners.",
            },
            {
              question: "What material offers the best heat resistance?",
              options: ["PLA", "PETG", "Nylon", "TPU"],
              correctAnswer: 2,
              explanation:
                "Nylon can withstand temperatures up to 180°C, making it ideal for parts exposed to high heat.",
            },
            {
              question: "Which material is best for flexible parts?",
              options: ["ABS", "TPU", "PETG", "PLA"],
              correctAnswer: 1,
              explanation: "TPU (Thermoplastic Polyurethane) is specifically designed for flexibility and elasticity.",
            },
            {
              question: "What printing technology uses liquid resin?",
              options: ["FDM", "SLA", "FFF", "MJF"],
              correctAnswer: 1,
              explanation: "SLA (Stereolithography) uses UV light to cure liquid resin layer by layer.",
            },
            {
              question: "Which material requires good ventilation?",
              options: ["PLA", "PETG", "ABS", "All materials"],
              correctAnswer: 2,
              explanation:
                "ABS releases potentially harmful fumes when heated, requiring good ventilation or an enclosure with filtration.",
            },
          ]}
        />
      </SubcategorySection>

      <SubcategorySection>
        <SubcategoryCTA
          category="fundamentals"
          title="Ready to Start Printing?"
          description="Now that you understand materials, learn how to set up your printer for the best results."
          buttonText="Printer Setup Guide"
          buttonLink="/blueprint/fundamentals/printer-setup"
        />
      </SubcategorySection>
    </main>
  )
}
