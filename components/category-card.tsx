import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export interface CategoryCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
  imageAlt?: string
  tags?: string[]
  comingSoon?: boolean
}

export function CategoryCard({
  title,
  description,
  imageUrl,
  href,
  imageAlt = "",
  tags,
  comingSoon = false,
}: CategoryCardProps) {
  return (
    <Card className="h-full flex flex-col group border-border hover:border-primary/60 transition-colors duration-300 ease-in-out overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-primary/20">
      <Link href={href} className="flex flex-col h-full" aria-disabled={comingSoon} tabIndex={comingSoon ? -1 : 0}>
        <CardHeader className="p-0 relative">
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt || `Image for ${title}`}
              width={400}
              height={225}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
              priority={false} // Set to true for above-the-fold critical images
            />
          </div>
          {comingSoon && (
            <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 text-xs font-semibold rounded">
              Coming Soon
            </div>
          )}
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground flex-grow mb-3">{description}</CardDescription>
          {tags && tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto flex items-center text-sm font-medium text-primary group-hover:underline">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

// Default export for convenience if preferred in some places, but named export is crucial for the fix.
export default CategoryCard
