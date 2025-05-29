import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ConnectPage() {
  // Team contact data
  const contacts = [
    {
      name: "Abhishek Pawar",
      position: "President",
      phone: "+91 98765 43210",
      image: "abhishek",
    },
    {
      name: "Tanmay Hirodkar",
      position: "Vice President",
      phone: "+91 87654 32109",
      image: "tanmay",
    },
    {
      name: "Aditya Sonje",
      position: "General Secretary",
      phone: "+91 76543 21098",
      image: "sonje",
    },
    {
      name: "Vidhi Belani",
      position: "Events & PR Head",
      phone: "+91 65432 10987",
      image: "vidhi",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="mx-auto max-w-2xl text-gray-400">
              Have questions about Ecell MET or our initiatives? Want to collaborate or sponsor our events? We'd love to
              hear from you!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-md backdrop-blur-sm backdrop-filter">
              <h2 className="mb-6 text-2xl font-bold text-white">Contact Team Members</h2>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=${contact.image.charAt(0)}`}
                        alt={contact.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{contact.name}</h3>
                      <p className="text-sm text-red-600">{contact.position}</p>
                      <p className="text-sm text-gray-400">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-md backdrop-blur-sm backdrop-filter">
                <h2 className="mb-6 text-2xl font-bold text-white">Connect With Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-gray-400">
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
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-400">met.iot.ecell@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-400">
                        +91 98225 44582
                        <br />
                        +91 83800 66588
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-md backdrop-blur-sm backdrop-filter">
                <h2 className="mb-6 text-2xl font-bold text-white">Follow Us</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/ecell_met/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 p-3 text-white transition-transform hover:scale-105"
                  >
                    <Instagram className="h-6 w-6" />
                    <div>
                      <span className="font-medium">Follow us on Instagram</span>
                      <p className="text-sm">@ecell_met</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ecellmet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg bg-blue-600 p-3 text-white transition-transform hover:scale-105"
                  >
                    <Linkedin className="h-6 w-6" />
                    <div>
                      <span className="font-medium">Connect on LinkedIn</span>
                      <p className="text-sm">Ecell MET</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">Find Us</h2>
            <div className="h-96 w-full overflow-hidden rounded-xl border border-gray-800 shadow-md">
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
