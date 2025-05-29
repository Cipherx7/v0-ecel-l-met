"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Book, Video, Globe, Users, ExternalLink, BookOpen, Youtube, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("books")

  // Books data
  const books = [
    {
      id: 1,
      title: "Zero to One",
      author: "Peter Thiel",
      description: "Notes on startups, or how to build the future",
      image: "/placeholder.svg?height=300&width=200&text=Zero to One",
      link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    },
    {
      id: 2,
      title: "The Lean Startup",
      author: "Eric Ries",
      description: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      image: "/placeholder.svg?height=300&width=200&text=Lean Startup",
      link: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
    },
    {
      id: 3,
      title: "Start with Why",
      author: "Simon Sinek",
      description: "How Great Leaders Inspire Everyone to Take Action",
      image: "/placeholder.svg?height=300&width=200&text=Start with Why",
      link: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
    },
    {
      id: 4,
      title: "The $100 Startup",
      author: "Chris Guillebeau",
      description: "Reinvent the Way You Make a Living, Do What You Love, and Create a New Future",
      image: "/placeholder.svg?height=300&width=200&text=$100 Startup",
      link: "https://www.amazon.com/100-Startup-Reinvent-Living-Create/dp/0307951529",
    },
    {
      id: 5,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think",
      image: "/placeholder.svg?height=300&width=200&text=Thinking Fast and Slow",
      link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    },
    {
      id: 6,
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      description: "Building a Business When There Are No Easy Answers",
      image: "/placeholder.svg?height=300&width=200&text=Hard Things",
      link: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205",
    },
  ]

  // Blogs data
  const blogs = [
    {
      id: 1,
      title: "Y Combinator Blog",
      description: "Startup advice, insights, and news from the renowned startup accelerator",
      image: "/placeholder.svg?height=200&width=300&text=Y Combinator",
      link: "https://www.ycombinator.com/blog/",
    },
    {
      id: 2,
      title: "Ecell MET Medium",
      description: "Articles and stories from our own entrepreneurship cell",
      image: "/placeholder.svg?height=200&width=300&text=Ecell MET",
      link: "https://ecellmet.medium.com/",
    },
    {
      id: 3,
      title: "Entrepreneur",
      description: "Latest news, articles, and resources for entrepreneurs",
      image: "/placeholder.svg?height=200&width=300&text=Entrepreneur",
      link: "https://www.entrepreneur.com/",
    },
    {
      id: 4,
      title: "TechCrunch",
      description: "Startup and technology news, analysis, and profiles",
      image: "/placeholder.svg?height=200&width=300&text=TechCrunch",
      link: "https://techcrunch.com/",
    },
    {
      id: 5,
      title: "Inc.",
      description: "Resources, advice, and inspiration for business owners and entrepreneurs",
      image: "/placeholder.svg?height=200&width=300&text=Inc.",
      link: "https://www.inc.com/",
    },
    {
      id: 6,
      title: "Harvard Business Review",
      description: "Ideas and best practices for leadership and management",
      image: "/placeholder.svg?height=200&width=300&text=HBR",
      link: "https://hbr.org/",
    },
  ]

  // Video courses data
  const videoCourses = [
    {
      id: 1,
      title: "How to Start a Startup",
      provider: "Y Combinator",
      description: "A series of lectures from Stanford University covering all aspects of starting a startup",
      image: "/placeholder.svg?height=200&width=300&text=YC Startup Course",
      link: "https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1",
    },
    {
      id: 2,
      title: "Entrepreneurship 101",
      provider: "MIT OpenCourseWare",
      description: "Introduction to entrepreneurship and innovation from MIT",
      image: "/placeholder.svg?height=200&width=300&text=MIT Entrepreneurship",
      link: "https://ocw.mit.edu/courses/sloan-school-of-management/15-390-new-enterprises-spring-2013/",
    },
    {
      id: 3,
      title: "Business Model Canvas Explained",
      provider: "Strategyzer",
      description: "Learn how to use the Business Model Canvas to map, design, and assess your business model",
      image: "/placeholder.svg?height=200&width=300&text=Business Model Canvas",
      link: "https://www.youtube.com/watch?v=QoAOzMTLP5s",
    },
    {
      id: 4,
      title: "Startup Funding Explained",
      provider: "Slidebean",
      description: "A comprehensive guide to startup funding rounds, valuations, and investor expectations",
      image: "/placeholder.svg?height=200&width=300&text=Startup Funding",
      link: "https://www.youtube.com/watch?v=677ZtSMr4-4",
    },
  ]

  // Group links data
  const groupLinks = [
    {
      id: 1,
      title: "Ecommunity WhatsApp Group",
      description: "Join our entrepreneurial community on WhatsApp for discussions and updates",
      icon: <Users className="h-8 w-8 text-green-500" />,
      link: "https://chat.whatsapp.com/Hfvomxikdan89dAXKF6wXw",
    },
    {
      id: 2,
      title: "Startup India Hub",
      description: "Connect with the largest startup ecosystem in India",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      link: "https://www.startupindia.gov.in/",
    },
    {
      id: 3,
      title: "LinkedIn Entrepreneurship Group",
      description: "Network with entrepreneurs, investors, and mentors on LinkedIn",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      link: "https://www.linkedin.com/groups/",
    },
    {
      id: 4,
      title: "Y Combinator Startup School",
      description: "Free online program to help founders start and grow their companies",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      link: "https://www.startupschool.org/",
    },
  ]

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
            Entrepreneurship <span className="text-red-600">Resources</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Curated collection of books, blogs, courses, and communities to help you on your entrepreneurial journey.
          </p>
        </div>

        {/* Mobile-friendly tabs */}
        <div className="mb-8 grid w-full grid-cols-2 gap-2 sm:grid-cols-4 bg-gray-900 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("books")}
            className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium transition-colors ${
              activeTab === "books" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <Book className="mr-2 h-4 w-4" />
            <span>Books</span>
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium transition-colors ${
              activeTab === "blogs" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Blogs</span>
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium transition-colors ${
              activeTab === "courses" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <Video className="mr-2 h-4 w-4" />
            <span>Courses</span>
          </button>
          <button
            onClick={() => setActiveTab("groups")}
            className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium transition-colors ${
              activeTab === "groups" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <Users className="mr-2 h-4 w-4" />
            <span>Communities</span>
          </button>
        </div>

        {/* Books Tab */}
        {activeTab === "books" && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-bold group-hover:text-red-600">{book.title}</h3>
                  <p className="mb-2 text-sm text-gray-400">by {book.author}</p>
                  <p className="text-sm text-gray-300">{book.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === "blogs" && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold group-hover:text-red-600">{blog.title}</h3>
                  <p className="text-sm text-gray-300">{blog.description}</p>
                  <div className="mt-4 flex items-center text-sm text-red-600">
                    <span>Visit Blog</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Video Courses Tab */}
        {activeTab === "courses" && (
          <div className="grid gap-6 sm:grid-cols-2">
            {videoCourses.map((course) => (
              <a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Youtube className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-1 text-lg font-bold group-hover:text-red-600">{course.title}</h3>
                  <p className="mb-2 text-sm text-red-600">by {course.provider}</p>
                  <p className="mb-4 text-sm text-gray-300">{course.description}</p>
                  <div className="mt-auto flex items-center text-sm text-red-600">
                    <span>Watch Course</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Group Links Tab */}
        {activeTab === "groups" && (
          <div className="grid gap-6 sm:grid-cols-2">
            {groupLinks.map((group) => (
              <a
                key={group.id}
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-gray-900 p-6 transition-transform hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">{group.icon}</div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold group-hover:text-red-600">{group.title}</h3>
                  <p className="text-sm text-gray-300">{group.description}</p>
                  <div className="mt-2 flex items-center text-sm text-red-600">
                    <span>Join Now</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-lg bg-gray-900 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Suggest a Resource</h3>
          <p className="mb-6 mx-auto max-w-2xl text-gray-300">
            Know of a great book, blog, course, or community that should be on this list? Let us know and we'll add it
            to our resources.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/connect">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
