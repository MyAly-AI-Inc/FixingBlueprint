"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div className={cn("h-[40rem] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={el || "/placeholder.svg"}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 group-hover:scale-105"
                  height={400}
                  width={400}
                  alt="3D printing gallery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={el || "/placeholder.svg"}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 group-hover:scale-105"
                  height={400}
                  width={400}
                  alt="3D printing gallery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={el || "/placeholder.svg"}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 group-hover:scale-105"
                  height={400}
                  width={400}
                  alt="3D printing gallery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
