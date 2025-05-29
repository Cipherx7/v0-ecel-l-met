import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Award, Calendar, Lightbulb, Target, Rocket } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
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
            About <span className="text-red-600">Ecell MET</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Learn more about the Entrepreneurship Cell at MET Institute of Technology, Nashik.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-8 overflow-hidden rounded-xl">
              <Image
                src="https://img.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg"
                alt="Ecell MET Team"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-gray-900 p-6">
                <h3 className="mb-4 flex items-center text-xl font-bold">
                  <Users className="mr-2 h-5 w-5 text-red-600" />
                  Who We Are
                </h3>
                <p className="text-gray-300">
                  The Entrepreneurship Cell at MET Institute of Technology, Nashik is a student-run organization
                  dedicated to fostering the entrepreneurial spirit among students. We provide a platform for budding
                  entrepreneurs to learn, ideate, and transform their innovative ideas into successful ventures.
                </p>
              </div>

              <div className="rounded-lg bg-gray-900 p-6">
                <h3 className="mb-4 flex items-center text-xl font-bold">
                  <Award className="mr-2 h-5 w-5 text-red-600" />
                  Our Achievements
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span>First position in NEC 24 Advanced Track by Ecell IIT Bombay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span>First runner-up in World Entrepreneurship Challenge (WEC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span>5th position in NEC 23 Basic Track</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span>Incubated over 150 startup ideas from students</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-900 p-6">
                <h3 className="mb-4 flex items-center text-xl font-bold">
                  <Calendar className="mr-2 h-5 w-5 text-red-600" />
                  Our History
                </h3>
                <p className="text-gray-300">
                  Established in 2015, Ecell MET has grown from a small group of enthusiastic students to a vibrant
                  community of entrepreneurs, mentors, and industry experts. Over the years, we have organized numerous
                  events, workshops, and competitions to promote entrepreneurship and innovation on campus.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <Lightbulb className="mr-2 h-5 w-5 text-red-600" />
                What We Do
              </h3>
              <p className="mb-4 text-gray-300">
                At Ecell MET, we focus on creating an ecosystem that nurtures entrepreneurial talent and drives
                innovation. Our activities include:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span>Organizing workshops, seminars, and guest lectures by successful entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span>Conducting business plan competitions and hackathons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span>Providing mentorship and guidance to student entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span>Facilitating networking opportunities with industry experts and investors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span>Supporting student startups through incubation and funding assistance</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <Target className="mr-2 h-5 w-5 text-red-600" />
                Our Vision
              </h3>
              <p className="text-gray-300">
                To create a thriving entrepreneurial ecosystem that empowers students to innovate, ideate, and implement
                their ideas, fostering a culture of entrepreneurship and self-reliance. We envision MET IOT as a hub for
                startups and innovation in the region.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <Rocket className="mr-2 h-5 w-5 text-red-600" />
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide resources, mentorship, and opportunities that enable students to develop entrepreneurial
                skills and mindset. We aim to bridge the gap between ideas and execution through workshops,
                competitions, networking events, and incubation support for promising ventures.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <Users className="mr-2 h-5 w-5 text-red-600" />
                Our Team
              </h3>
              <p className="mb-4 text-gray-300">
                Ecell MET is run by a dedicated team of student volunteers who are passionate about entrepreneurship and
                innovation. Our team consists of students from various departments and years, bringing diverse
                perspectives and skills to the table.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/explore/team"
                  className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold">
            What People <span className="text-red-600">Say About Us</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-6">
              <p className="mb-4 italic text-gray-300">
                "Ecell MET provided me with the platform and resources to transform my idea into a successful startup.
                The mentorship and networking opportunities were invaluable."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=A"
                    alt="Alumni"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Aditya Sharma</h4>
                  <p className="text-sm text-gray-400">Founder, TechSolutions</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <p className="mb-4 italic text-gray-300">
                "The events and workshops organized by Ecell MET are top-notch. They bring in industry experts and
                successful entrepreneurs who provide valuable insights and guidance."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=P"
                    alt="Student"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Priya Patel</h4>
                  <p className="text-sm text-gray-400">Current Student</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <p className="mb-4 italic text-gray-300">
                "As a mentor for Ecell MET, I've been impressed by the dedication and innovative thinking of the
                students. The cell is doing an excellent job of fostering entrepreneurship."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=R"
                    alt="Mentor"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Rajesh Mehta</h4>
                  <p className="text-sm text-gray-400">Industry Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
