"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")

  // Sample gallery images
  const galleryImages = [
    { id: 1, title: "Startup Expo 2023", category: "Events" },
    { id: 2, title: "Entrepreneurship Workshop", category: "Workshops" },
    { id: 3, title: "Pitch Competition", category: "Competitions" },
    { id: 4, title: "Networking Session", category: "Networking" },
    { id: 5, title: "Mentor Meeting", category: "Mentorship" },
    { id: 6, title: "Hackathon 2023", category: "Competitions" },
    { id: 7, title: "Industry Visit", category: "Field Trips" },
    { id: 8, title: "Investor Pitch Day", category: "Funding" },
    { id: 9, title: "Team Building Activity", category: "Team Building" },
    { id: 10, title: "Annual Celebration", category: "Celebrations" },
    { id: 11, title: "Guest Lecture Series", category: "Education" },
    { id: 12, title: "Product Launch", category: "Launches" },
  ]

  const categories = ["All", "Events", "Workshops", "Competitions", "Team"]

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 hover:text-red-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Ecell MET <span className="text-red-600">Entrepreneugraphy</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Explore moments from our events, workshops, and activities that showcase the vibrant entrepreneurial
            ecosystem at Ecell MET.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-red-600 text-white scale-110"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${image.title}`}
                  alt={image.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.category}</p>
              </div>
              <div className="absolute inset-0 bg-red-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-md border border-red-600 bg-transparent px-6 py-2 text-red-600 transition-colors hover:bg-red-600 hover:text-white">
            Load More
          </button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg">
              <button
                className="absolute right-4 top-4 z-10 rounded-full bg-red-600 p-2 text-white hover:bg-red-700"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <Image
                src={`/placeholder.svg?height=800&width=800&text=${selectedImage.title}`}
                alt={selectedImage.title}
                width={800}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="bg-black p-4">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
