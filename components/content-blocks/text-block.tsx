import type { TextBlock } from "@/types/subcategory-page"

interface TextBlockProps {
  block: TextBlock
  className?: string
}

export function TextBlockComponent({ block, className = "" }: TextBlockProps) {
  return (
    <div className={`prose max-w-none ${className}`} id={block.id}>
      <div dangerouslySetInnerHTML={{ __html: block.content.text }} />
    </div>
  )
}
