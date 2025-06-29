"use client"

import type { ContentBlock } from "@/types/subcategory-page"
import { TextBlockComponent } from "./text-block"
import { ImageBlockComponent } from "./image-block"
import { VideoBlockComponent } from "./video-block"
import { CodeBlockComponent } from "./code-block"
import { QuoteBlockComponent } from "./quote-block"
import { CalloutBlockComponent } from "./callout-block"
import { StepsBlockComponent } from "./steps-block"
import { ComparisonBlockComponent } from "./comparison-block"
import { TableBlockComponent } from "./table-block"
import { FAQBlockComponent } from "./faq-block"

interface ContentBlockRendererProps {
  block: ContentBlock
  className?: string
}

export function ContentBlockRenderer({ block, className = "" }: ContentBlockRendererProps) {
  switch (block.type) {
    case "text":
      return <TextBlockComponent block={block} className={className} />
    case "image":
      return <ImageBlockComponent block={block} className={className} />
    case "video":
      return <VideoBlockComponent block={block} className={className} />
    case "code":
      return <CodeBlockComponent block={block} className={className} />
    case "quote":
      return <QuoteBlockComponent block={block} className={className} />
    case "callout":
      return <CalloutBlockComponent block={block} className={className} />
    case "steps":
      return <StepsBlockComponent block={block} className={className} />
    case "comparison":
      return <ComparisonBlockComponent block={block} className={className} />
    case "table":
      return <TableBlockComponent block={block} className={className} />
    case "faq":
      return <FAQBlockComponent block={block} className={className} />
    default:
      return <div>Unknown block type: {(block as any).type}</div>
  }
}
