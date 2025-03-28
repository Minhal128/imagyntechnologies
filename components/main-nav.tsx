"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/why-us", label: "Why Us" },
    { href: "/mission", label: "Mission" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Imagyn Technologies Logo"
              width={180}
              height={60}
              className="h-auto"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-base font-medium transition-colors",
                pathname === route.href ? "text-orange-600 font-semibold" : "text-black hover:text-orange-600",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Button asChild className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white rounded-md">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="container py-4 flex flex-col space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors p-2",
                  pathname === route.href
                    ? "text-orange-600 font-semibold bg-orange-50 rounded-md"
                    : "text-black hover:text-orange-600 hover:bg-gray-100 rounded-md",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-orange-600 text-white hover:bg-orange-700 p-2 rounded-md text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

