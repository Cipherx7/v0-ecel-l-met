"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, FileText, Target, Lightbulb, Rocket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  // For 3D carousel
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Sponsor logos data
  const sponsorLogos = [
    {
      id: 1,
      name: "Diginotice",
      url: "https://diginotice.in",
      image:
        "https://cdn-jahhp.nitrocdn.com/eyUnlCtmccdDgOgzcAyDPkfcHyEYWkMu/assets/images/optimized/rev-1279416/diginotice.in/wp-content/uploads/2023/02/Diginotice-New-Logo-2023.png",
    },
    {
      id: 2,
      name: "TechSavvy",
      url: "https://example.com/techsavvy",
      image: "/placeholder.svg?height=60&width=120&text=TechSavvy",
    },
    {
      id: 3,
      name: "InnovateX",
      url: "https://example.com/innovatex",
      image: "/placeholder.svg?height=60&width=120&text=InnovateX",
    },
    {
      id: 4,
      name: "FutureMinds",
      url: "https://example.com/futureminds",
      image: "/placeholder.svg?height=60&width=120&text=FutureMinds",
    },
    {
      id: 5,
      name: "CreativeHub",
      url: "https://example.com/creativehub",
      image: "/placeholder.svg?height=60&width=120&text=CreativeHub",
    },
    {
      id: 6,
      name: "NextGen",
      url: "https://example.com/nextgen",
      image: "/placeholder.svg?height=60&width=120&text=NextGen",
    },
  ]

  const speakItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600&text=Workshop",
      title: "Entrepreneurship Workshop",
      description: "Interactive session on business model canvas",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600&text=Hackathon",
      title: "Annual Hackathon",
      description: "48-hour coding marathon for innovative solutions",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600&text=Pitch Day",
      title: "Startup Pitch Day",
      description: "Students presenting their business ideas to investors",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600&text=Conference",
      title: "E-Summit 2023",
      description: "Annual entrepreneurship summit with industry leaders",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=600&text=Networking",
      title: "Networking Mixer",
      description: "Connecting students with entrepreneurs and mentors",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % speakItems.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + speakItems.length) % speakItems.length)
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Calculate positions for 3D effect
  const getCarouselItemStyle = (index) => {
    const diff = (index - activeIndex + speakItems.length) % speakItems.length

    if (diff === 0) {
      // Active slide (center)
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 30,
        opacity: 1,
      }
    } else if (diff === 1 || diff === speakItems.length - 1) {
      // Adjacent slides
      const direction = diff === 1 ? 1 : -1
      return {
        transform: `translateX(${direction * 75}%) scale(0.8)`,
        zIndex: 20,
        opacity: 0.7,
      }
    } else {
      // Other slides
      const direction = diff <= speakItems.length / 2 ? 1 : -1
      return {
        transform: `translateX(${direction * 120}%) scale(0.6)`,
        zIndex: 10,
        opacity: 0.4,
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black py-20 text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://ecellmet.tech/assets/img/hero-bg.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-24">
          <div className="text-left md:text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-red-600">E</span>cell MET
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Fostering innovation and entrepreneurship at MET Institute of Technology, Nashik
            </p>
            <div className="flex flex-col items-start md:items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 w-auto">
                <Link href="/explore/team">Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-600 text-white hover:bg-red-600/20 w-auto bg-transparent"
              >
                <Link href="/submit-idea">Submit Your Idea</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Slider Section - Fixed for mobile */}
      <section className="bg-black py-8 text-white">
        <div className="container mx-auto px-4">
          <h3 className="mb-6 text-center text-xl font-semibold">
            Our <span className="text-red-600">Sponsors</span>
          </h3>
          <div
            className="sponsor-slider overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex items-center space-x-8 md:space-x-12 overflow-hidden whitespace-nowrap ${
                !isPaused ? "animate-scroll" : ""
              }`}
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              {/* First set of logos */}
              {sponsorLogos.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-16 w-32 flex-shrink-0 items-center justify-center p-2 transition-transform hover:scale-110"
                >
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </a>
              ))}
              {/* Duplicate logos for seamless looping */}
              {sponsorLogos.map((sponsor) => (
                <a
                  key={`duplicate-${sponsor.id}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-16 w-32 flex-shrink-0 items-center justify-center p-2 transition-transform hover:scale-110"
                >
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Moved under sponsors */}
      <section className="bg-black py-12 text-white md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="https://img.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg"
                alt="Ecell MET Team"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                About <span className="text-red-600">Ecell MET</span>
              </h2>
              <p className="mb-4 text-gray-300">
                The Entrepreneurship Cell at MET Institute of Technology, Nashik is a student-run organization dedicated
                to fostering the entrepreneurial spirit among students. We provide a platform for budding entrepreneurs
                to learn, ideate, and transform their innovative ideas into successful ventures.
              </p>
              <p className="mb-6 text-gray-300">
                Through workshops, mentorship programs, competitions, and networking events, we aim to create a vibrant
                ecosystem that nurtures entrepreneurial talent and drives innovation.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Vision and Mission Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our <span className="text-red-600">Vision & Mission</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm backdrop-filter transition-transform hover:scale-105">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10"></div>
              <div className="absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-red-600/5"></div>

              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20">
                <Target className="h-8 w-8 text-red-600" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="text-gray-300">
                To create a thriving entrepreneurial ecosystem that empowers students to innovate, ideate, and implement
                their ideas, fostering a culture of entrepreneurship and self-reliance. We envision MET IOT as a hub for
                startups and innovation in the region.
              </p>

              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400"></div>
            </div>

            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm backdrop-filter transition-transform hover:scale-105">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10"></div>
              <div className="absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-red-600/5"></div>

              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20">
                <Rocket className="h-8 w-8 text-red-600" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-300">
                To provide resources, mentorship, and opportunities that enable students to develop entrepreneurial
                skills and mindset. We aim to bridge the gap between ideas and execution through workshops,
                competitions, networking events, and incubation support for promising ventures.
              </p>

              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400"></div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900/50 p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                <Lightbulb className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Innovation</h4>
              <p className="text-sm text-gray-400">
                Encouraging creative thinking and novel solutions to real-world problems
              </p>
            </div>

            <div className="rounded-lg bg-gray-900/50 p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Collaboration</h4>
              <p className="text-sm text-gray-400">Building a community of like-minded individuals working together</p>
            </div>

            <div className="rounded-lg bg-gray-900/50 p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                <Rocket className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Excellence</h4>
              <p className="text-sm text-gray-400">Striving for the highest standards in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Our <span className="text-red-600">Achievements</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/achievements/nec-adv-air" className="block">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://i.ibb.co/ksbVTLHQ/Whats-App-Image-2025-02-14-at-10-41-09-b5af0410.jpg"
                    alt="NEC Award"
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:text-2xl">NEC 24 Winner (Advanced Track)</h3>
                <p className="text-center text-sm text-gray-300 md:text-base">
                  Secured the first position in the National Entrepreneurship Challenge 24 Advanced track by Ecell IIT
                  Bombay, demonstrating excellence in innovation and entrepreneurial skills.
                </p>
              </div>
            </Link>

            <Link href="/achievements/wec-runner-up" className="block">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://i.ibb.co/W4CWsz0D/ALDL2314.jpg"
                    alt="WEC"
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:text-2xl">WEC 1 Runner-up</h3>
                <p className="text-center text-sm text-gray-300 md:text-base">
                  Achieved the first runner-up position in the Western Entrepreneurship Challenge, showcasing our global
                  competitiveness and innovative solutions.
                </p>
              </div>
            </Link>

            <Link href="/achievements/nec-basic-track" className="block">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=NEC 23 Award"
                    alt="NEC 23 Award"
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:text-2xl">NEC 23 Basic Track 5th Rank</h3>
                <p className="text-center text-sm text-gray-300 md:text-base">
                  Secured 5th position in the National Entrepreneurship Challenge 2023 Basic Track, showcasing our
                  consistent performance and dedication to entrepreneurship.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Speaks Section - 3D Carousel */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Our <span className="text-red-600">Speaks</span>
          </h2>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            {/* Carousel Controls */}
            <div className="absolute inset-y-0 left-0 z-40 flex items-center">
              <button
                onClick={prevSlide}
                className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 z-40 flex items-center">
              <button
                onClick={nextSlide}
                className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Carousel Items */}
            <div ref={carouselRef} className="relative h-full perspective-1000">
              {speakItems.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute left-0 right-0 top-0 mx-auto h-[250px] md:h-[300px] w-[90%] md:w-[80%] max-w-3xl transform-gpu transition-all duration-500 ease-in-out"
                  style={getCarouselItemStyle(index)}
                >
                  <div className="h-full overflow-hidden rounded-xl bg-gray-900 shadow-xl">
                    <div className="relative h-[70%]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {speakItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === activeIndex ? "bg-red-600" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Annual <span className="text-red-600">Reports</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group rounded-lg bg-black p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="relative h-40 w-32 overflow-hidden rounded-md border border-gray-700">
                  <Image
                    src="/placeholder.svg?height=300&width=200&text=Annual Report 2023-24"
                    alt="Annual Report 2023-24"
                    width={200}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold">Annual Report 2023-24</h3>
              <p className="mb-4 text-center text-gray-400">
                Comprehensive overview of our activities, achievements, and financial performance for the academic year
                2023-24.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a
                    href="/Annual Report 2024-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="group rounded-lg bg-black p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="relative h-40 w-32 overflow-hidden rounded-md border border-gray-700">
                  <Image
                    src="/placeholder.svg?height=300&width=200&text=Annual Report 2022-23"
                    alt="Annual Report 2022-23"
                    width={200}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold">Annual Report 2022-23</h3>
              <p className="mb-4 text-center text-gray-400">
                Review of our initiatives, events, and impact during the academic year 2022-23.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
