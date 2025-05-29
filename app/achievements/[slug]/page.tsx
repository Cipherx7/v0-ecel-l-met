"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Trophy, Users, MapPin, Share2, Instagram, Linkedin, Link2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const achievementsData = {
  "nec-adv-air": {
    title: "NEC 24 Advance Track Winner",
    date: "February 2025",
    location: "IIT Bombay, Mumbai",
    image: "https://i.ibb.co/ksbVTLHQ/Whats-App-Image-2025-02-14-at-10-41-09-b5af0410.jpg",
    description:
      "The National Entrepreneurship Challenge (NEC) is one of India's largest entrepreneurship competitions organized by E-Cell, IIT Bombay. The Advanced Air category is one of the most competitive tracks, focusing on innovative solutions in the aerospace and aviation sectors.",
    achievement:
      "Ecell MET secured the first position in the NEC Advanced Air category, demonstrating excellence in innovation and entrepreneurial skills. Our team presented a groundbreaking solution for drone-based agricultural monitoring that impressed the judges with its technical sophistication and market potential.",
    team: ["Abhishek Pawar", "Tanmay Hirodkar", "Samarth Kuwar", "Vidhi Belani"],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=NEC Team",
      "/placeholder.svg?height=400&width=600&text=NEC Presentation",
      "/placeholder.svg?height=400&width=600&text=NEC Award Ceremony",
    ],
    testimonial: {
      quote:
        "The team from Ecell MET demonstrated exceptional creativity and technical prowess in their solution. Their presentation was well-researched and showed great market understanding.",
      author: "admin",
      position: "Judge, NEC Advanced Air Category",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/p/CxYz123AbCd/",
      linkedin:
        "https://www.linkedin.com/posts/ecell-met_nec-iitbombay-entrepreneurship-activity-7142856321457823744-xGt5",
      news: "https://timesofindia.indiatimes.com/city/nashik/met-students-win-national-entrepreneurship-challenge/articleshow/98765432.cms",
    },
  },
  "wec-runner-up": {
    title: "WEC 1 Runner-up",
    date: "April 2025",
    location: "Virtual Event",
    image: "https://i.ibb.co/W4CWsz0D/ALDL2314.jpg",
    description:
      "The World Entrepreneurship Challenge (WEC) is a global competition that brings together entrepreneurial talent from universities across the world. It provides a platform for students to showcase their innovative ideas and business models on an international stage.",
    achievement:
      "Ecell MET achieved the first runner-up position in the World Entrepreneurship Challenge, showcasing our global competitiveness and innovative solutions. Our team presented a sustainable energy solution that addresses the growing energy needs of rural communities.",
    team: ["Vidhi Belani", "Darshan Mali", "Siddharth Perkar", "Ashwin Shinde"],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=WEC Team",
      "/placeholder.svg?height=400&width=600&text=WEC Presentation",
      "/placeholder.svg?height=400&width=600&text=WEC Award Ceremony",
    ],
    testimonial: {
      quote:
        "The team from MET Institute of Technology presented a compelling solution with significant social impact. Their business model was well-thought-out and showed great potential for scalability.",
      author: "Prof. Maria Rodriguez",
      position: "Head Judge, World Entrepreneurship Challenge",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/p/CxYz123AbCd/",
      linkedin:
        "https://www.linkedin.com/posts/ecell-met_wec-entrepreneurship-innovation-activity-7142856321457823744-xGt5",
      news: "https://timesofindia.indiatimes.com/city/nashik/met-students-secure-second-place-in-world-entrepreneurship-challenge/articleshow/98765432.cms",
    },
  },
  "nec-basic-track": {
    title: "NEC 23 Basic Track 5th Rank",
    date: "February 2024",
    location: "IIT Bombay, Mumbai",
    image: "/placeholder.svg?height=600&width=1200&text=NEC 23 Award",
    description:
      "The National Entrepreneurship Challenge (NEC) 2023 Basic Track is designed for early-stage entrepreneurial ideas and concepts. It focuses on the fundamentals of business planning and idea validation.",
    achievement:
      "Ecell MET secured the 5th position in the National Entrepreneurship Challenge 2023 Basic Track, showcasing our consistent performance and dedication to entrepreneurship. Our team presented an innovative EdTech solution aimed at improving access to quality education in semi-urban areas.",
    team: ["Aditya Sonje", "Pallavi Thoke", "Abhay Shukla", "Vaishnavi Kumavat"],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=NEC 23 Team",
      "/placeholder.svg?height=400&width=600&text=NEC 23 Presentation",
      "/placeholder.svg?height=400&width=600&text=NEC 23 Event",
    ],
    testimonial: {
      quote:
        "The team from Ecell MET showed great potential with their EdTech solution. Their understanding of the target market and user needs was impressive.",
      author: "Ankit Mehta",
      position: "Mentor, NEC 2023",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/p/CxYz123AbCd/",
      linkedin:
        "https://www.linkedin.com/posts/ecell-met_nec-iitbombay-entrepreneurship-activity-7142856321457823744-xGt5",
      news: "https://timesofindia.indiatimes.com/city/nashik/met-students-rank-fifth-in-national-entrepreneurship-challenge/articleshow/98765432.cms",
    },
  },
}

export default function AchievementPage({ params }) {
  const { slug } = params
  const achievement = achievementsData[slug]
  const [showShareOptions, setShowShareOptions] = useState(false)

  if (!achievement) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <div className="container mx-auto flex-1 px-4 py-12 text-center">
          <h1 className="text-3xl font-bold">Achievement not found</h1>
          <p className="mt-4">The achievement you're looking for doesn't exist.</p>
          <Button asChild className="mt-8 bg-red-600 hover:bg-red-700">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
    setShowShareOptions(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 hover:text-red-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-xl">
          <div className="aspect-[21/9] w-full">
            <Image
              src={achievement.image || "/placeholder.svg"}
              alt={achievement.title}
              width={1200}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-12">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">{achievement.title}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-red-600" />
                <span>Achievement</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-red-600" />
                <span>{achievement.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-red-600" />
                <span>{achievement.location}</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="absolute right-6 top-6">
            <div className="relative">
              <Button
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="rounded-full bg-black/50 p-2 hover:bg-black/70"
                size="icon"
                variant="ghost"
              >
                <Share2 className="h-5 w-5" />
              </Button>

              {showShareOptions && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-gray-900 p-2 shadow-lg">
                  <div className="flex flex-col gap-2">
                    <a
                      href={achievement.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-800"
                    >
                      <Instagram className="h-4 w-4 text-pink-500" />
                      <span>Instagram Post</span>
                    </a>
                    <a
                      href={achievement.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-800"
                    >
                      <Linkedin className="h-4 w-4 text-blue-500" />
                      <span>LinkedIn Post</span>
                    </a>
                    <a
                      href={achievement.socialLinks.news}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-800"
                    >
                      <Link2 className="h-4 w-4 text-green-500" />
                      <span>News Article</span>
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-800"
                    >
                      <Link2 className="h-4 w-4 text-gray-400" />
                      <span>Copy Link</span>
                    </button>
                    <button
                      onClick={() => setShowShareOptions(false)}
                      className="flex items-center justify-center rounded-md p-2 text-sm hover:bg-gray-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">About the Competition</h2>
              <p className="text-gray-300">{achievement.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Our Achievement</h2>
              <p className="text-gray-300">{achievement.achievement}</p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {achievement.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${achievement.title} Gallery Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8 rounded-xl bg-gray-900 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center text-xl font-bold">
                  <Users className="mr-2 h-5 w-5 text-red-600" />
                  Team Members
                </h3>
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                  <Link href="/explore/team">Current Team</Link>
                </Button>
              </div>
              <ul className="space-y-2">
                {achievement.team.map((member, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-3 h-8 w-8 overflow-hidden rounded-full bg-gray-800">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=${member.charAt(0)}`}
                        alt={member}
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Testimonial</h3>
              <blockquote className="border-l-4 border-red-600 pl-4">
                <p className="mb-4 italic text-gray-300">"{achievement.testimonial.quote}"</p>
                <footer className="text-sm">
                  <strong>{achievement.testimonial.author}</strong>
                  <p className="text-gray-400">{achievement.testimonial.position}</p>
                </footer>
              </blockquote>
            </div>

            <div className="mt-8 rounded-xl bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Share This Achievement</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={achievement.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={achievement.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={achievement.socialLinks.news}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  <Link2 className="h-4 w-4" />
                  <span>News Article</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-6 text-2xl font-bold">More Achievements</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(achievementsData)
              .filter((key) => key !== slug)
              .map((key) => (
                <Link
                  key={key}
                  href={`/achievements/${key}`}
                  className="rounded-md bg-gray-900 px-6 py-3 transition-colors hover:bg-gray-800"
                >
                  {achievementsData[key].title}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
