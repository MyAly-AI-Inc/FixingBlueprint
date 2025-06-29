import type { ImageBlock } from "@/types/subcategory-page"
import Image from "next/image"

interface ImageBlockProps {
  block: ImageBlock
  className?: string
}

export function ImageBlockComponent({ block, className = "" }: ImageBlockProps) {
  const { src, alt, caption, width = 800, height = 500 } = block.content

  return (
    <figure className={`my-8 ${className}`} id={block.id}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>}
    </figure>
  )
}
