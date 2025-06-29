interface ImageContentProps {
  src: string
  alt: string
  caption?: string
}

export function ImageContent({ src, alt, caption }: ImageContentProps) {
  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden">
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-auto object-cover" />
      </div>
      {caption && <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>}
    </figure>
  )
}
