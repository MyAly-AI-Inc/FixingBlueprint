import type { QuoteBlock } from "@/types/subcategory-page"

interface QuoteBlockProps {
  block: QuoteBlock
  className?: string
}

export function QuoteBlockComponent({ block, className = "" }: QuoteBlockProps) {
  const { quote, author, role } = block.content

  return (
    <blockquote className={`border-l-4 border-gray-300 pl-4 my-8 italic ${className}`} id={block.id}>
      <p className="text-xl">{quote}</p>
      {author && (
        <footer className="mt-2">
          <cite className="font-medium not-italic">
            {author}
            {role && <span className="text-gray-500 ml-2">— {role}</span>}
          </cite>
        </footer>
      )}
    </blockquote>
  )
}
