"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function StartupsPage() {
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [yearFilter, setYearFilter] = useState("All")
  const [stageFilter, setStageFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(true)

  // Sample startup data
  const startups = [
    {
      id: 1,
      name: "TechNova",
      description: "AI-powered solutions for healthcare diagnostics",
      category: "HealthTech",
      founder: "Rahul Sharma",
      year: 2022,
      stage: "Seed",
      logo: "startup-1",
      website: "https://technova.example.com",
    },
    {
      id: 2,
      name: "EcoSmart",
      description: "Sustainable packaging solutions for e-commerce",
      category: "CleanTech",
      founder: "Priya Patel",
      year: 2021,
      stage: "Pre-Seed",
      logo: "startup-2",
      website: "https://ecosmart.example.com",
    },
    {
      id: 3,
      name: "FinEdge",
      description: "Blockchain-based financial services for rural areas",
      category: "FinTech",
      founder: "Amit Kumar",
      year: 2023,
      stage: "Idea",
      logo: "startup-3",
      website: "https://finedge.example.com",
    },
    {
      id: 4,
      name: "LearnLoop",
      description: "Personalized learning platform for K-12 students",
      category: "EdTech",
      founder: "Neha Singh",
      year: 2022,
      stage: "Seed",
      logo: "startup-4",
      website: "https://learnloop.example.com",
    },
    {
      id: 5,
      name: "FarmFresh",
      description: "Direct farm-to-consumer marketplace for organic produce",
      category: "AgriTech",
      founder: "Vikram Desai",
      year: 2021,
      stage: "Series A",
      logo: "startup-5",
      website: "https://farmfresh.example.com",
    },
    {
      id: 6,
      name: "TravelBuddy",
      description: "AI travel assistant for personalized trip planning",
      category: "TravelTech",
      founder: "Ananya Gupta",
      year: 2023,
      stage: "Pre-Seed",
      logo: "startup-6",
      website: "https://travelbuddy.example.com",
    },
    {
      id: 7,
      name: "FitPulse",
      description: "Wearable fitness tracker with mental health monitoring",
      category: "HealthTech",
      founder: "Rohan Joshi",
      year: 2022,
      stage: "Seed",
      logo: "startup-7",
      website: "https://fitpulse.example.com",
    },
    {
      id: 8,
      name: "GreenEnergy",
      description: "Renewable energy solutions for residential buildings",
      category: "CleanTech",
      founder: "Sneha Verma",
      year: 2021,
      stage: "Series A",
      logo: "startup-8",
      website: "https://greenenergy.example.com",
    },
  ]

  // Categories for filtering
  const categories = ["All", "HealthTech", "CleanTech", "FinTech", "EdTech", "AgriTech", "TravelTech"]
  const years = ["All", "2023", "2022", "2021", "2020"]
  const stages = ["All", "Idea", "Pre-Seed", "Seed", "Series A", "Series B+"]

  // Filter startups based on selected filters
  const filteredStartups = startups.filter(
    (startup) =>
      (categoryFilter === "All" || startup.category === categoryFilter) &&
      (yearFilter === "All" || startup.year.toString() === yearFilter) &&
      (stageFilter === "All" || startup.stage === stageFilter),
  )

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div></div>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/submit-idea">Submit Your Idea</Link>
          </Button>
        </div>
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 hover:text-red-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Startups under <span className="text-red-600">Ecell MET</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Discover innovative startups founded by students and alumni of MET Institute of Technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Section - Left Side */}
          <div className="md:w-1/4">
            <div className="sticky top-24 rounded-lg bg-gray-900 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Filters</h3>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  {showFilters ? "Hide" : "Show"}
                </Button>
              </div>

              {showFilters && (
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="mb-3 font-medium border-b border-gray-800 pb-2">By Field</h4>
                    <div className="flex flex-col gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setCategoryFilter(category)}
                          className={`text-left px-3 py-1.5 text-sm font-medium rounded-md ${
                            categoryFilter === category
                              ? "bg-red-600 text-white"
                              : "bg-gray-800 text-white hover:bg-gray-700"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Year Filter */}
                  <div>
                    <h4 className="mb-3 font-medium border-b border-gray-800 pb-2">By Year</h4>
                    <div className="flex flex-col gap-2">
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setYearFilter(year)}
                          className={`text-left px-3 py-1.5 text-sm font-medium rounded-md ${
                            yearFilter === year ? "bg-red-600 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stage Filter */}
                  <div>
                    <h4 className="mb-3 font-medium border-b border-gray-800 pb-2">By Stage</h4>
                    <div className="flex flex-col gap-2">
                      {stages.map((stage) => (
                        <button
                          key={stage}
                          onClick={() => setStageFilter(stage)}
                          className={`text-left px-3 py-1.5 text-sm font-medium rounded-md ${
                            stageFilter === stage ? "bg-red-600 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setCategoryFilter("All")
                      setYearFilter("All")
                      setStageFilter("All")
                    }}
                    variant="outline"
                    className="w-full mt-4 border-red-600 text-white hover:bg-red-600/20"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Startups Grid - Right Side */}
          <div className="md:w-3/4">
            {filteredStartups.length === 0 ? (
              <div className="text-center py-12 bg-gray-900 rounded-lg">
                <p className="text-lg text-gray-400">No startups match your filter criteria.</p>
                <Button
                  onClick={() => {
                    setCategoryFilter("All")
                    setYearFilter("All")
                    setStageFilter("All")
                  }}
                  className="mt-4 bg-red-600 hover:bg-red-700"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredStartups.map((startup) => (
                  <div
                    key={startup.id}
                    className="group overflow-hidden rounded-lg bg-gray-900 transition-all hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-red-600 flex-shrink-0">
                          <Image
                            src={`/placeholder.svg?height=100&width=100&text=${startup.name.charAt(0)}`}
                            alt={startup.name}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{startup.name}</h3>
                          <Badge className="bg-red-600 hover:bg-red-700">{startup.category}</Badge>
                        </div>
                      </div>
                      <p className="mb-4 text-sm text-gray-300">{startup.description}</p>
                      <div className="flex justify-between text-xs text-gray-400 mb-4">
                        <span>Founded: {startup.year}</span>
                        <span>Stage: {startup.stage}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">By: {startup.founder}</span>
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-transparent border border-red-600 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-600 hover:text-white"
                        >
                          Visit
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
