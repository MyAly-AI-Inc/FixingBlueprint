import type { VideoBlock } from "@/types/subcategory-page"

interface VideoBlockProps {
  block: VideoBlock
  className?: string
}

export function VideoBlockComponent({ block, className = "" }: VideoBlockProps) {
  const { src, title, thumbnail } = block.content

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
