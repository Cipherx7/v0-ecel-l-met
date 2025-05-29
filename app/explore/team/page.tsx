"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Linkedin, Flame } from "lucide-react"
import { useState } from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const [showPreviousTeam, setShowPreviousTeam] = useState(false)

  // Team members data with the provided details
  const currentTeamMembers = [
    {
      id: 1,
      name: "Abhishek Pawar",
      position: "President",
      image: "https://ecellmet.tech/assets/img/Profile/abhishek1.png",
      linkedin: "https://www.linkedin.com/in/pawar-abhishek17/",
    },
    {
      id: 2,
      name: "Tanmay Hirodkar",
      position: "Vice President",
      image: "https://ecellmet.tech/assets/img/Profile/tanmay.jpg",
      linkedin: "https://www.linkedin.com/in/hirodkar/",
    },
    {
      id: 3,
      name: "Aditya Sonje",
      position: "General Secretory",
      image: "https://ecellmet.tech/assets/img/Profile/sonje.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-sonje/",
    },
    {
      id: 4,
      name: "Darshan Mali",
      position: "Treasurer",
      image: "https://ecellmet.tech/assets/img/Profile/darshan.jpg",
      linkedin: "https://www.linkedin.com/in/darshan-mali-6a740728b/",
    },
    {
      id: 5,
      name: "Samarth Kuwar",
      position: "Operation Head",
      image: "https://ecellmet.tech/assets/img/Profile/samarth.jpeg",
      linkedin: "https://www.linkedin.com/in/samarth-kuwar-96993422b/",
    },
    {
      id: 6,
      name: "Siddharth Perkar",
      position: "Marketing Head",
      image: "https://ecellmet.tech/assets/img/Profile/siddharth.png",
      linkedin: "https://www.linkedin.com/in/siddharth-perkar-15a4a8244/",
    },
    {
      id: 7,
      name: "Ashwin Shinde",
      position: "Design Head",
      image: "https://ecellmet.tech/assets/img/Profile/ashwin.jpg",
      linkedin: "https://www.linkedin.com/in/member-profile/",
    },
    {
      id: 8,
      name: "Vidhi Belani",
      position: "Events & PR Head",
      image: "https://ecellmet.tech/assets/img/Profile/vidhi.png",
      linkedin: "https://www.linkedin.com/in/vidhi-belani-b89a85323",
    },
  ]

  // Previous team members (sample data)
  const previousTeamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "President (2022-23)",
      image: "prev-team-1",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Vice President (2022-23)",
      image: "prev-team-2",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Secretary (2022-23)",
      image: "prev-team-3",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      id: 4,
      name: "Neha Singh",
      position: "Treasurer (2022-23)",
      image: "prev-team-4",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      id: 5,
      name: "Vikram Desai",
      position: "Technical Head (2022-23)",
      image: "prev-team-5",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      id: 6,
      name: "Ananya Gupta",
      position: "Marketing Head (2022-23)",
      image: "prev-team-6",
      linkedin: "https://linkedin.com/in/example",
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
            Our <span className="text-red-600">Team</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Meet the dedicated individuals who work tirelessly to foster entrepreneurship and innovation at MET
            Institute of Technology.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              onClick={() => setShowPreviousTeam(false)}
              className={`${!showPreviousTeam ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"}`}
            >
              Current Team
            </Button>
            <Button
              onClick={() => setShowPreviousTeam(true)}
              className={`${showPreviousTeam ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"}`}
            >
              Previous Team
            </Button>
          </div>
        </div>

        {showPreviousTeam ? (
          <>
            {/* Previous Team Members */}
            <div>
              <h2 className="mb-8 text-center text-2xl font-bold">
                Previous <span className="text-red-600">Team (2022-23)</span>
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {previousTeamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all hover:shadow-lg"
                  >
                    <div className="aspect-square">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${member.name.charAt(0)}`}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-base font-bold">{member.name}</h3>
                      <p className="text-xs text-red-600">{member.position}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-red-600 p-2 text-white transition-transform hover:scale-110"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    {/* Fire effect */}
                    <div className="absolute -bottom-2 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex">
                        <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
                        <Flame className="h-5 w-5 text-red-500 animate-pulse" />
                        <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentTeamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all hover:shadow-lg"
              >
                <div className="aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold">{member.name}</h3>
                  <p className="text-xs text-red-600">{member.position}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-600 p-2 text-white transition-transform hover:scale-110"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                {/* Fire effect */}
                <div className="absolute -bottom-2 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex">
                    <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
                    <Flame className="h-5 w-5 text-red-500 animate-pulse" />
                    <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-lg bg-gray-900 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Join Our Team</h3>
          <p className="mb-6 mx-auto max-w-2xl text-gray-300">
            Are you passionate about entrepreneurship and innovation? We're always looking for enthusiastic individuals
            to join our team. Apply now to be a part of Ecell MET!
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
