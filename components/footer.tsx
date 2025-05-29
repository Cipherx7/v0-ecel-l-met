import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 backdrop-blur-sm backdrop-filter">
            <h3 className="mb-4 text-xl font-bold">
              <span className="text-red-600">E</span>cell MET
            </h3>
            <p className="mb-4 text-gray-400">
              Fostering innovation and entrepreneurship at MET Institute of Technology, Nashik.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-red-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-red-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-red-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-red-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 backdrop-blur-sm backdrop-filter">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 transition-colors hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives/ecommunity" className="text-gray-400 transition-colors hover:text-red-600">
                  Ecommunity
                </Link>
              </li>
              <li>
                <Link href="/submit-idea" className="text-gray-400 transition-colors hover:text-red-600">
                  Submit Idea
                </Link>
              </li>
              <li>
                <Link href="/startups" className="text-gray-400 transition-colors hover:text-red-600">
                  Startups
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 backdrop-blur-sm backdrop-filter">
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore/gallery" className="text-gray-400 transition-colors hover:text-red-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/explore/team" className="text-gray-400 transition-colors hover:text-red-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/explore/events" className="text-gray-400 transition-colors hover:text-red-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/learn/blog" className="text-gray-400 transition-colors hover:text-red-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 backdrop-blur-sm backdrop-filter">
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-600" />
                <span className="text-gray-400">
                  MET Institute of Technology, Bhujbal Knowledge City, Nashik, Maharashtra
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-red-600" />
                <span className="text-gray-400">+91 9822544582</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-600" />
                <span className="text-gray-400">met.iot.ecell@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-t border-gray-800 p-6 text-center backdrop-blur-sm backdrop-filter">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Ecell MET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
