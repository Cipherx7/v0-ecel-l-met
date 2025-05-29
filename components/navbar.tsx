"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Users, Lightbulb, BookOpen, ImageIcon, ChevronRight } from "lucide-react"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Toggle body scroll lock
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        document.body.style.overflow = ""
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      // Reset overflow when component unmounts
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <>
      {/* Startup Count Strip */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-1 text-center text-sm font-medium text-white">
        <span className="animate-pulse">🔥</span> Proud home to <span className="font-bold">156 startups</span> and
        counting! <span className="animate-pulse">🔥</span>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md backdrop-filter">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <Image
                src="https://ecellmet.tech/assets/img/favicon.png"
                alt="Ecell MET Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="text-red-600">E</span>cell MET
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="text-white">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black hover:bg-gray-900 hover:text-red-600 data-[state=open]:bg-gray-900 data-[active]:bg-black">
                    Initiatives
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          href="https://chat.whatsapp.com/Hfvomxikdan89dAXKF6wXw"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <Users className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Ecommunity</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            Join our entrepreneurial community
                          </p>
                        </Link>
                        <Link
                          href="/submit-idea"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <Lightbulb className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Submit Idea</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            Share your innovative ideas with us
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black hover:bg-gray-900 hover:text-red-600 data-[state=open]:bg-gray-900 data-[active]:bg-black">
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          href="https://ecellmet.medium.com/"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Blog</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            Read articles on entrepreneurship
                          </p>
                        </Link>
                        <Link
                          href="/learn/resources"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Resources</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            Access entrepreneurship resources
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black hover:bg-gray-900 hover:text-red-600 data-[state=open]:bg-gray-900 data-[active]:bg-black">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          href="/explore/gallery"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <ImageIcon className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Gallery</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            View photos from our events
                          </p>
                        </Link>
                        <Link
                          href="/explore/team"
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600"
                        >
                          <div className="flex items-center">
                            <Users className="mr-2 h-5 w-5 text-red-600" />
                            <div className="text-base font-medium">Our Team</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                            Meet the people behind Ecell MET
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/explore/events" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-red-600 focus:bg-gray-900 focus:text-red-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black",
                      )}
                    >
                      Events
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/startups" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-red-600 focus:bg-gray-900 focus:text-red-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black",
                      )}
                    >
                      Startups
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/connect" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-red-600 focus:bg-gray-900 focus:text-red-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black",
                      )}
                    >
                      Connect
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-red-600 focus:bg-gray-900 focus:text-red-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black",
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-white border-red-600 bg-black hover:bg-red-600 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Backdrop overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/80 z-40 lg:hidden" onClick={toggleMenu} aria-hidden="true" />
        )}

        {/* Mobile Menu - Slide from right */}
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 z-50 w-72 bg-black border-l border-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#000000" }}
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
              <div className="relative h-6 w-6">
                <Image
                  src="https://ecellmet.tech/assets/img/favicon.png"
                  alt="Ecell MET Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-red-600">E</span>cell MET
              </span>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-white border-red-600 bg-black hover:bg-red-600 hover:text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation content with scrolling */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 mb-6">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Initiatives</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://chat.whatsapp.com/Hfvomxikdan89dAXKF6wXw"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Users className="mr-3 h-5 w-5 text-red-600" />
                      <span>Ecommunity</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/submit-idea"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Lightbulb className="mr-3 h-5 w-5 text-red-600" />
                      <span>Submit Idea</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Learn</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://ecellmet.medium.com/"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <BookOpen className="mr-3 h-5 w-5 text-red-600" />
                      <span>Blog</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/learn/resources"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <BookOpen className="mr-3 h-5 w-5 text-red-600" />
                      <span>Resources</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/explore/gallery"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <ImageIcon className="mr-3 h-5 w-5 text-red-600" />
                      <span>Gallery</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore/team"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Users className="mr-3 h-5 w-5 text-red-600" />
                      <span>Our Team</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore/events"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <ImageIcon className="mr-3 h-5 w-5 text-red-600" />
                      <span>Events</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/startups"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Lightbulb className="mr-3 h-5 w-5 text-red-600" />
                      <span>Startups</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/connect"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Users className="mr-3 h-5 w-5 text-red-600" />
                      <span>Connect</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="flex items-center text-white hover:text-red-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      <Users className="mr-3 h-5 w-5 text-red-600" />
                      <span>About</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Footer with social links */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex justify-center space-x-4">
              <a
                href="https://twitter.com/ecellmet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ecellmet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/ecellmet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
