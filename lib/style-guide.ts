export type CategoryType =
  | "fundamentals"
  | "design-modeling"
  | "technical-skills"
  | "business-and-entrepreneurship"
  | "advanced-topics"
  | "resources"

// Alias mapping for shorter category names
export type CategoryAlias = "fundamentals" | "design" | "technical" | "business" | "advanced" | "resources"

// Map short category names to their full versions
const categoryAliasMap: Record<CategoryAlias, CategoryType> = {
  fundamentals: "fundamentals",
  design: "design-modeling",
  technical: "technical-skills",
  business: "business-and-entrepreneurship",
  advanced: "advanced-topics",
  resources: "resources",
}

interface CategoryStyle {
  name: string
  path: string
  description: string
  tailwindClasses: {
    primaryText: string
    secondaryText: string
    accentBg: string
    lightBg: string
    darkBg: string
    primaryBorder: string
    secondaryBorder: string
    primaryButton: string
    secondaryButton: string
    heroGradient: string
    focusRing: string
  }
}

const categoryStyles: Record<CategoryType, CategoryStyle> = {
  fundamentals: {
    name: "Fundamentals",
    path: "/blueprint/fundamentals",
    description: "Learn the basics of 3D printing",
    tailwindClasses: {
      primaryText: "text-blue-600",
      secondaryText: "text-blue-800",
      accentBg: "bg-blue-500",
      lightBg: "bg-blue-50",
      darkBg: "bg-blue-900",
      primaryBorder: "border-blue-500",
      secondaryBorder: "border-blue-300",
      primaryButton: "bg-blue-600 text-white hover:bg-blue-700",
      secondaryButton: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      heroGradient: "from-blue-500 to-blue-700",
      focusRing: "focus:ring-blue-500",
    },
  },
  "design-modeling": {
    name: "Design & Modeling",
    path: "/blueprint/design-modeling",
    description: "Master 3D design techniques",
    tailwindClasses: {
      primaryText: "text-purple-600",
      secondaryText: "text-purple-800",
      accentBg: "bg-purple-500",
      lightBg: "bg-purple-50",
      darkBg: "bg-purple-900",
      primaryBorder: "border-purple-500",
      secondaryBorder: "border-purple-300",
      primaryButton: "bg-purple-600 text-white hover:bg-purple-700",
      secondaryButton: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      heroGradient: "from-purple-500 to-purple-700",
      focusRing: "focus:ring-purple-500",
    },
  },
  "technical-skills": {
    name: "Technical Skills",
    path: "/blueprint/technical-skills",
    description: "Develop advanced technical abilities",
    tailwindClasses: {
      primaryText: "text-teal-600",
      secondaryText: "text-teal-800",
      accentBg: "bg-teal-500",
      lightBg: "bg-teal-50",
      darkBg: "bg-teal-900",
      primaryBorder: "border-teal-500",
      secondaryBorder: "border-teal-300",
      primaryButton: "bg-teal-600 text-white hover:bg-teal-700",
      secondaryButton: "bg-teal-100 text-teal-800 hover:bg-teal-200",
      heroGradient: "from-teal-500 to-teal-700",
      focusRing: "focus:ring-teal-500",
    },
  },
  "business-and-entrepreneurship": {
    name: "Business & Entrepreneurship",
    path: "/blueprint/business-and-entrepreneurship",
    description: "Build a successful 3D printing business",
    tailwindClasses: {
      primaryText: "text-amber-600",
      secondaryText: "text-amber-800",
      accentBg: "bg-amber-500",
      lightBg: "bg-amber-50",
      darkBg: "bg-amber-900",
      primaryBorder: "border-amber-500",
      secondaryBorder: "border-amber-300",
      primaryButton: "bg-amber-600 text-white hover:bg-amber-700",
      secondaryButton: "bg-amber-100 text-amber-800 hover:bg-amber-200",
      heroGradient: "from-amber-500 to-amber-700",
      focusRing: "focus:ring-amber-500",
    },
  },
  "advanced-topics": {
    name: "Advanced Topics",
    path: "/blueprint/advanced-topics",
    description: "Explore cutting-edge 3D printing concepts",
    tailwindClasses: {
      primaryText: "text-red-600",
      secondaryText: "text-red-800",
      accentBg: "bg-red-500",
      lightBg: "bg-red-50",
      darkBg: "bg-red-900",
      primaryBorder: "border-red-500",
      secondaryBorder: "border-red-300",
      primaryButton: "bg-red-600 text-white hover:bg-red-700",
      secondaryButton: "bg-red-100 text-red-800 hover:bg-red-200",
      heroGradient: "from-red-500 to-red-700",
      focusRing: "focus:ring-red-500",
    },
  },
  resources: {
    name: "Resources",
    path: "/blueprint/resources",
    description: "Access tools, libraries, and community support",
    tailwindClasses: {
      primaryText: "text-green-600",
      secondaryText: "text-green-800",
      accentBg: "bg-green-500",
      lightBg: "bg-green-50",
      darkBg: "bg-green-900",
      primaryBorder: "border-green-500",
      secondaryBorder: "border-green-300",
      primaryButton: "bg-green-600 text-white hover:bg-green-700",
      secondaryButton: "bg-green-100 text-green-800 hover:bg-green-200",
      heroGradient: "from-green-500 to-green-700",
      focusRing: "focus:ring-green-500",
    },
  },
}

export function getCategoryStyle(category: CategoryType | CategoryAlias): CategoryStyle {
  // If it's an alias, map it to the full category name
  const fullCategory = categoryAliasMap[category as CategoryAlias] || (category as CategoryType)

  // Get the style for the full category
  const style = categoryStyles[fullCategory]

  // If style is undefined, throw a helpful error
  if (!style) {
    throw new Error(
      `Category style not found for "${category}". Available categories are: ${Object.keys(categoryStyles).join(", ")}`,
    )
  }

  return style
}

export function getAllCategoryStyles(): Record<CategoryType, CategoryStyle> {
  return categoryStyles
}

export function getCategoryFromPath(path: string): CategoryType | null {
  if (path.includes("/fundamentals")) return "fundamentals"
  if (path.includes("/design-modeling")) return "design-modeling"
  if (path.includes("/technical-skills")) return "technical-skills"
  if (path.includes("/business-and-entrepreneurship")) return "business-and-entrepreneurship"
  if (path.includes("/advanced-topics")) return "advanced-topics"
  if (path.includes("/resources")) return "resources"
  return null
}
