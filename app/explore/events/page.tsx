import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EventsPage() {
  // Sample past events for timeline with more random events
  const pastEvents = [
    {
      id: 1,
      title: "Annual E-Summit 2023",
      date: "February 18-19, 2023",
      description: "A two-day flagship event featuring keynote speakers, panel discussions, and startup showcases.",
      image: "past-event-1",
      reportLink: "/events/e-summit-2023",
    },
    {
      id: 2,
      title: "Ideathon 2023",
      date: "March 25, 2023",
      description:
        "A 24-hour idea generation marathon where participants developed innovative solutions to real-world problems.",
      image: "past-event-2",
      reportLink: "/events/ideathon-2023",
    },
    {
      id: 3,
      title: "Investor Connect",
      date: "April 10, 2023",
      description: "An exclusive event connecting promising startups with potential investors and venture capitalists.",
      image: "past-event-3",
      reportLink: "/events/investor-connect-2023",
    },
    {
      id: 4,
      title: "Business Model Canvas Workshop",
      date: "May 5, 2023",
      description:
        "A hands-on workshop teaching participants how to create effective business model canvases for their ventures.",
      image: "past-event-4",
      reportLink: "/events/bmc-workshop-2023",
    },
    {
      id: 5,
      title: "Marketing Masterclass",
      date: "May 20, 2023",
      description: "An intensive session on digital marketing strategies for startups and small businesses.",
      image: "past-event-5",
      reportLink: "/events/marketing-masterclass-2023",
    },
    {
      id: 6,
      title: "Startup Weekend",
      date: "January 14-16, 2023",
      description: "A 54-hour weekend event where participants worked on turning ideas into startups.",
      image: "past-event-6",
      reportLink: "/events/startup-weekend-2023",
    },
    {
      id: 7,
      title: "Tech Innovation Showcase",
      date: "November 12, 2022",
      description: "An exhibition of innovative tech solutions developed by student entrepreneurs.",
      image: "past-event-7",
      reportLink: "/events/tech-showcase-2022",
    },
    {
      id: 8,
      title: "Entrepreneurship Bootcamp",
      date: "October 5-7, 2022",
      description: "An intensive three-day bootcamp covering all aspects of starting and scaling a business.",
      image: "past-event-8",
      reportLink: "/events/entrepreneurship-bootcamp-2022",
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
            <span className="text-red-600">Eventpreneurship</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Discover the exciting events organized by Ecell MET to foster entrepreneurship, innovation, and networking
            opportunities.
          </p>
        </div>

        {/* Events Timeline Section */}
        <section>
          <h2 className="mb-8 text-2xl font-bold">
            Events <span className="text-red-600">Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 ml-6 h-full w-1 bg-red-600 md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline events */}
            <div className="space-y-16">
              {pastEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-5 h-4 w-4 rounded-full bg-red-600 md:left-1/2 md:-ml-2"></div>

                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Empty space for alignment */}
                    <div className="md:w-1/2"></div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                      <Link href={event.reportLink} className="block">
                        <div className="overflow-hidden rounded-lg bg-gray-900 shadow-md transition-all hover:shadow-xl hover:scale-105">
                          <div className="relative h-48">
                            <Image
                              src={`/placeholder.svg?height=300&width=500&text=${event.title}`}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                            <div className="mb-3 flex items-center text-red-600">
                              <Calendar className="mr-2 h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <p className="text-gray-300">{event.description}</p>
                            <Button className="mt-4 bg-red-600 hover:bg-red-700">View Report</Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Link href="/explore/gallery">View Event Gallery</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
