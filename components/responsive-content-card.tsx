import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"

interface ResponsiveContentCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  category?: string
  readTime?: string
  difficulty?: "beginner" | "intermediate" | "advanced"
}

export function ResponsiveContentCard({
  title,
  description,
  imageSrc,
  href,
  category,
  readTime,
  difficulty,
}: ResponsiveContentCardProps) {
  const difficultyColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-blue-100 text-blue-800",
    advanced: "bg-purple-100 text-purple-800",
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] sm:aspect-[3/2] md:aspect-[16/9]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        {category && (
          <Badge className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm text-black hover:bg-white/70">
            {category}
          </Badge>
        )}
      </div>
      <CardHeader className="p-3 sm:p-4 pb-0 flex-grow">
        <CardTitle className="text-base sm:text-lg line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-1 text-xs sm:text-sm">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-3 sm:p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {readTime && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {readTime}
            </div>
          )}
          {difficulty && (
            <Badge variant="outline" className={`text-xs ${difficultyColor[difficulty]}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
          )}
        </div>
        <Link
          href={href}
          className="text-blue-600 hover:text-blue-800 transition-colors p-1 -m-1"
          aria-label={`Read more about ${title}`}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
