import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  // const keyContacts = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Founder & CEO",
  //     email: "sarah.johnson@placementbeyond.com",
  //     phone: "+971 527774397",
  //     image: "/placeholder.svg?height=150&width=150",
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Co-Founder & COO",
  //     email: "michael.chen@placementbeyond.com",
  //     phone: "+1 (555) 123-4568",
  //     image: "/placeholder.svg?height=150&width=150",
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Senior Partner",
  //     email: "emily.rodriguez@placementbeyond.com",
  //     phone: "+1 (555) 123-4569",
  //     image: "/placeholder.svg?height=150&width=150",
  //   },
  // ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/services.mp4" type="video/mp4" />
          Sectors
        </video>

        {/* Overlay to darken the video if needed */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading executive search firm specializing in digital leadership and inclusive hiring
            </p>
            */}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Enter your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executive-search">Executive Search</SelectItem>
                        <SelectItem value="board-services">Board Services</SelectItem>
                        <SelectItem value="digital-leadership">Digital Leadership</SelectItem>
                        <SelectItem value="diversity-inclusion">Diversity & Inclusion</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea placeholder="Tell us about your needs or how we can help you..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Office Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-3 text-gray-600" />
                      <div>
                        <p className="font-medium">Main Office</p>
                        <p className="text-gray-600">+971 527774397</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-3 text-gray-600" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-gray-600">placementandbeyond@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-gray-600 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          123 Business District
                          <br />
                          Suite 456
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 mr-3 text-gray-600" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">
                          Mon-Fri: 9:00 AM - 6:00 PM
                          <br />
                          Sat: 10:00 AM - 2:00 PM
                          <br />
                          Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              {/* <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                      <Linkedin className="h-6 w-6 mr-2 text-gray-700" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                      <Twitter className="h-6 w-6 mr-2 text-gray-700" />
                      <span className="text-sm font-medium">Twitter</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Contacts</h2>
            <p className="text-lg text-gray-600">Connect directly with our leadership team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {keyContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={contact.image || "/placeholder.svg"}
                    alt={contact.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contact.role}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-gray-600">{contact.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for industry insights and company updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
