import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h1>
            <p className="text-gray-600">Find answers to common questions about Ecell MET and our initiatives</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Ecell MET?</AccordionTrigger>
              <AccordionContent>
                Ecell MET is the Entrepreneurship Cell of MET Institute of Technology, Nashik. We are a student-run
                organization dedicated to fostering the entrepreneurial spirit among students and providing a platform
                for budding entrepreneurs to learn, ideate, and transform their innovative ideas into successful
                ventures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How can I join Ecell MET?</AccordionTrigger>
              <AccordionContent>
                You can join Ecell MET by filling out the membership form available on our website or by contacting us
                directly. We welcome students from all departments who are passionate about entrepreneurship and
                innovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What events does Ecell MET organize?</AccordionTrigger>
              <AccordionContent>
                Ecell MET organizes a variety of events throughout the year, including workshops, seminars, hackathons,
                business plan competitions, startup expos, and networking sessions with successful entrepreneurs and
                industry experts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What is Ecommunity?</AccordionTrigger>
              <AccordionContent>
                Ecommunity is our initiative to build a community of entrepreneurs, mentors, investors, and industry
                experts who collaborate to foster innovation and growth. It provides a platform for networking,
                knowledge sharing, and collaboration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I submit my business idea?</AccordionTrigger>
              <AccordionContent>
                You can submit your business idea through our 'Submit Idea' page on the website. Fill out the form with
                details about your idea, and our team will review it and provide feedback. Selected ideas may receive
                mentorship and incubation support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What support does Ecell MET provide to startups?</AccordionTrigger>
              <AccordionContent>
                Ecell MET provides various forms of support to startups, including mentorship from industry experts,
                networking opportunities with potential investors, access to resources and infrastructure, workshops on
                essential business skills, and guidance on legal and financial aspects of starting a business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What are NEC and WEC?</AccordionTrigger>
              <AccordionContent>
                NEC (National Entrepreneurship Challenge) and WEC (World Entrepreneurship Challenge) are prestigious
                entrepreneurship competitions. Ecell MET has achieved significant success in these competitions,
                securing the first position in NEC Adv Air and the first runner-up position in WEC.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How can I collaborate with Ecell MET?</AccordionTrigger>
              <AccordionContent>
                If you're an organization, industry expert, investor, or mentor interested in collaborating with Ecell
                MET, you can reach out to us through our contact page. We're always open to partnerships that can
                benefit our entrepreneurial ecosystem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Are there any membership fees to join Ecell MET?</AccordionTrigger>
              <AccordionContent>
                There is a nominal membership fee to join Ecell MET. The fee helps us organize events and provide
                resources to our members. However, many of our events and workshops are open to all students, regardless
                of membership status.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>How can I stay updated about Ecell MET's activities?</AccordionTrigger>
              <AccordionContent>
                You can stay updated about our activities by following us on social media platforms, subscribing to our
                newsletter, or regularly checking our website's events section. We also send email notifications to our
                members about upcoming events and opportunities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
            <h3 className="mb-4 text-xl font-semibold">Still have questions?</h3>
            <p className="mb-6 text-gray-600">
              If you couldn't find the answer to your question, feel free to contact us directly.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
