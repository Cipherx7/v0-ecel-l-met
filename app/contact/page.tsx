import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              Have questions about Ecell MET or our initiatives? Want to collaborate or sponsor our events? We'd love to
              hear from you!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Write your message here..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        Ecell MET, MET Institute of Technology,
                        <br />
                        Bhujbal Knowledge City,
                        <br />
                        Adgaon, Nashik - 422003,
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        met.iot.ecell@gmail.com
                        <br />
                        
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">
                        +91 98225 44582
                        <br />
                        +91 83800 66588
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <h2 className="mb-6 text-2xl font-bold">Hours</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">All Days</span>
                    <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-gray-600"></span>
                  </div>
                </div>

                <div className="mt-6 rounded-md bg-gray-50 p-4 text-sm">
                  <p className="font-medium">Note:</p>
                  <p className="text-gray-600">
                    events and workshops,social media channels for
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-center text-2xl font-bold">Find Us</h2>
            <div className="h-96 w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.244036571747!2d73.84736247468882!3d20.040218520997104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc1e4b1a51223%3A0xb91d564da433983a!2sMET%27%20Institute%20of%20Technology%2CPolytechnic%20Nashik!5e0!3m2!1sen!2sin!4v1700299336350!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
