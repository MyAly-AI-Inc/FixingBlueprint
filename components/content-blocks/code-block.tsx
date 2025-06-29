import type { CodeBlock } from "@/types/subcategory-page"

interface CodeBlockProps {
  block: CodeBlock
  className?: string
}

export function CodeBlockComponent({ block, className = "" }: CodeBlockProps) {
  const { code, language, title } = block.content

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      {title && <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm font-mono rounded-t-lg">{title}</div>}
      <pre className={`language-${language} ${!title ? "rounded-t-lg" : ""} rounded-b-lg overflow-x-auto`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
