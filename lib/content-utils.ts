import type { ContentSection, ContentBlock, SubcategoryPageProps } from "@/types/subcategory-page"

// Generate a unique ID for content blocks
export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

// Create a text block with HTML content
export function createTextBlock(html: string): ContentBlock {
  return {
    type: "text",
    id: generateId("text"),
    content: {
      text: html,
    },
  }
}

// Create an image block
export function createImageBlock(src: string, alt: string, caption?: string): ContentBlock {
  return {
    type: "image",
    id: generateId("image"),
    content: {
      src,
      alt,
      caption,
    },
  }
}

// Create a callout block
export function createCalloutBlock(
  title: string,
  text: string,
  variant: "info" | "warning" | "success" | "error" = "info",
): ContentBlock {
  return {
    type: "callout",
    id: generateId("callout"),
    content: {
      title,
      text,
      variant,
    },
  }
}

// Helper to create a content section
export function createSection(title: string, blocks: ContentBlock[]): ContentSection {
  const anchor = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return {
    id: generateId("section"),
    title,
    anchor,
    blocks,
  }
}

// Helper to create page data
export function createPageData(
  category: SubcategoryPageProps["category"],
  title: string,
  description: string,
  sections: ContentSection[],
  relatedPages: SubcategoryPageProps["relatedPages"],
  heroImage?: string,
  showTableOfContents = true,
): SubcategoryPageProps {
  return {
    category,
    title,
    description,
    sections,
    relatedPages,
    heroImage,
    showTableOfContents,
  }
}
