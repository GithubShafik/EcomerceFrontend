"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import croppedlogo2 from "../assets/croppedlogo2.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // const services = [
  //   { name: "Copyright Law", href: "/services/copyright-law" },
  //   { name: "Design Law", href: "/services/design-law" },
  //   { name: "Commercial Contracts", href: "/services/commercial-contracts" },
  //   { name: "Trademark Law", href: "/services/trademark-law" },
  //   { name: "Dispute Resolution", href: "/services/dispute-resolution" },
  //   { name: "International Trade", href: "/services/international-trade" },
  //   { name: "Real Estate Law", href: "/services/real-estate-law" },
  //   { name: "Family Law", href: "/services/family-law" },
  //   { name: "Bankruptcy Law", href: "/services/bankruptcy-law" },
  // ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
           <Image src={croppedlogo2} alt="logo" height={50} />
          </Link>
          {/* <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-amber-600" />
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 text-lg">Mohammed Al Kheyaili</div>
              <div className="text-xs text-gray-600">Advocates & Legal Consultants</div>
            </div>
          </Link> */}

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/services"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.name} asChild>
                        <Link
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/team"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            {/* <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Globe className="h-4 w-4" />
              العربية
            </Button> */}

            {/* Book Appointment Button */}
            {/* <Button asChild className="hidden md:flex bg-amber-600 hover:bg-amber-700">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button> */}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Services
                  </Link>

                  {/* <div className="space-y-2">
                    <div className="text-lg font-medium flex items-center gap-2">
                      Services <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600 hover:text-gray-900"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div> */}

                  <Link href="/team" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Team
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Contact
                  </Link>

                  {/* <div className="pt-4 space-y-3">
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Globe className="h-4 w-4 mr-2" />
                      العربية
                    </Button>
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
