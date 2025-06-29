import { CategoryGrid } from "@/components/category-grid"
import { CategoryHero } from "@/components/category-hero"

export default function CategoriesPage() {
  return (
    <div>
      <CategoryHero
        category="resources"
        title="Blueprint Learning Tracks"
        description="Explore our comprehensive learning tracks designed to help you master 3D printing from beginner to advanced levels."
        imageUrl="/images/3d-printing-neon-lab.jpeg"
      />

      <div className="container mx-auto px-4 py-16">
        <CategoryGrid
          title="All Learning Tracks"
          description="Choose a learning track that matches your interests and goals."
          columns={{ default: 1, sm: 2, lg: 3 }}
          showDescriptions={true}
        />

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-brand-text-heading dark:text-gray-200">Featured Tracks</h2>
          <CategoryGrid
            categories={["fundamentals", "design-modeling", "technical-skills"]}
            columns={{ default: 1, md: 3 }}
            cardVariant="compact"
            showDescriptions={false}
          />
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-brand-text-heading dark:text-gray-200">Advanced Learning</h2>
          <CategoryGrid
            categories={["business-and-entrepreneurship", "advanced-topics"]}
            columns={{ default: 1, md: 2 }}
            cardVariant="featured"
            highlightCategory="advanced-topics"
          />
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-brand-text-heading dark:text-gray-200">Quick Access</h2>
          <CategoryGrid
            categories={[
              "fundamentals",
              "design-modeling",
              "technical-skills",
              "business-and-entrepreneurship",
              "advanced-topics",
              "resources",
            ]}
            columns={{ default: 2, sm: 3, md: 6 }}
            cardVariant="compact"
            showDescriptions={false}
            gap="gap-4"
          />
        </div>
      </div>
    </div>
  )
}
