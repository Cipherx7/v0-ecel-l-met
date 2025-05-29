import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SubmitIdeaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Submit Your <span className="text-red-600">Idea</span>
            </h1>
            <p className="text-gray-600">
              Share your innovative ideas with us and get feedback from our mentors and industry experts. The best ideas
              will get a chance to be incubated and receive funding support.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-black p-6 shadow-md">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ideaTitle">Idea Title</Label>
                <Input id="ideaTitle" placeholder="Give your idea a catchy title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="tech">Technology</option>
                  <option value="health">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="fintech">FinTech</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Idea Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your idea in detail. What problem does it solve? What is your solution? Who is your target audience?"
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessModel">Business Model</Label>
                <Textarea
                  id="businessModel"
                  placeholder="How do you plan to monetize your idea? What is your revenue model?"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamMembers">Team Members (if any)</Label>
                <Textarea id="teamMembers" placeholder="List your team members and their roles/expertise" rows={3} />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Idea
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-2 text-lg font-semibold">What happens next?</h3>
            <ol className="list-inside list-decimal space-y-2 text-gray-600">
              <li>Our team will review your idea within 7 working days</li>
              <li>You'll receive feedback and suggestions via email</li>
              <li>If selected, you'll be invited for a presentation</li>
              <li>Promising ideas will receive mentorship and incubation support</li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
