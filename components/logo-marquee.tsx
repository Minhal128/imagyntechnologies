"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface LogoMarqueeProps {
  className?: string
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const animate = () => {
      if (!marqueeElement) return

      if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth / 2) {
        marqueeElement.scrollLeft = 0
      } else {
        marqueeElement.scrollLeft += 1
      }

      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [])

  const techGiants = [
    { name: "Microsoft", logo: "/images/logos/microsoft.svg" },
    { name: "Google", logo: "/images/logos/google.svg" },
    { name: "Apple", logo: "/images/logos/apple.svg" },
    { name: "Amazon", logo: "/images/logos/amazon.svg" },
    { name: "Meta", logo: "/images/logos/meta.svg" },
    { name: "IBM", logo: "/images/logos/ibm.svg" },
    { name: "Oracle", logo: "/images/logos/oracle.svg" },
    { name: "Intel", logo: "/images/logos/intel.svg" },
  ]

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={marqueeRef}
        className="flex items-center whitespace-nowrap overflow-x-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex space-x-16 py-8 animate-marquee">
          {/* Duplicate logos for continuous scrolling */}
          {Array.from({ length: 2 }).map((_, dupeIndex) => (
            <div key={dupeIndex} className="flex space-x-16">
              {techGiants.map((company, index) => (
                <div key={`${dupeIndex}-${index}`} className="w-32 h-12 relative flex items-center justify-center">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={128}
                    height={48}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

