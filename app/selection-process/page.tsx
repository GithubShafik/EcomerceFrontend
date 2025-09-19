import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Search, FileText, Handshake, HeadphonesIcon } from "lucide-react"
import ContactSection from "@/components/contact-section"
import Image from "next/image"

export default function SelectionProcessPage() {
  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Understanding Your Needs",
      description:
        "We begin with a comprehensive consultation to understand your organizational culture, strategic objectives, and specific leadership requirements.",
      details: [
        "In-depth stakeholder interviews",
        "Organizational culture assessment",
        "Role specification development",
        "Success criteria definition",
      ],
    },
    {
      step: 2,
      icon: Users,
      title: "Talent Search & Screening",
      description:
        "Leveraging our global network and advanced search methodologies to identify and attract top-tier candidates.",
      details: [
        "Global executive network activation",
        "Direct approach and sourcing",
        "Initial candidate screening",
        "Preliminary competency assessment",
      ],
    },
    {
      step: 3,
      icon: FileText,
      title: "Interview & Assessment",
      description:
        "Comprehensive evaluation process including behavioral interviews, competency assessments, and our proprietary AI analytics.",
      details: [
        "Structured behavioral interviews",
        "Leadership competency evaluation",
        "TeamScope AI personality assessment",
        "Reference and background verification",
      ],
    },
    {
      step: 4,
      icon: Handshake,
      title: "Placement & Integration",
      description: "Facilitating the final selection process and ensuring smooth integration into your organization.",
      details: [
        "Client presentation and interviews",
        "Offer negotiation support",
        "Onboarding consultation",
        "Integration planning",
      ],
    },
    {
      step: 5,
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Continued partnership with follow-up support and our comprehensive replacement guarantee.",
      details: [
        "90-day integration check-ins",
        "Performance feedback sessions",
        "12-month placement guarantee",
        "Ongoing advisory support",
      ],
    },
  ]

  const teamMembers = [
    { name: "Sarah Johnson", role: "Lead Search Consultant", expertise: "Executive Assessment" },
    { name: "Michael Chen", role: "Senior Partner", expertise: "Digital Leadership" },
    { name: "Emily Rodriguez", role: "Assessment Specialist", expertise: "Behavioral Analysis" },
    { name: "David Thompson", role: "Client Relations Manager", expertise: "Integration Support" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Selection Process</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              A proven methodology that ensures the perfect match between talent and opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-gray-600">
              Our systematic approach combines human expertise with cutting-edge technology to deliver exceptional
              results. Each step is designed to ensure we find leaders who not only have the right skills but also fit
              your organizational culture.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">{step.step}</span>
                          </div>
                          <step.icon className="h-8 w-8 mr-3 text-gray-700" />
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold mb-4">Step {step.step}</h3>
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                        <step.icon className="h-16 w-16 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhanced by AI Technology</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our proprietary TeamScope AI analytics platform provides deep insights into candidate personality,
              leadership style, and cultural fit, ensuring more accurate placements and long-term success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">AI</span>
                </div>
                <h3 className="font-semibold mb-2">Personality Analysis</h3>
                <p className="text-gray-600 text-sm">Advanced behavioral assessment and personality profiling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">ML</span>
                </div>
                <h3 className="font-semibold mb-2">Cultural Fit Prediction</h3>
                <p className="text-gray-600 text-sm">Machine learning algorithms predict organizational alignment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">DA</span>
                </div>
                <h3 className="font-semibold mb-2">Data Analytics</h3>
                <p className="text-gray-600 text-sm">Comprehensive data analysis for informed decision-making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Involved */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Involved in Selection</h2>
            <p className="text-lg text-gray-600">Meet the specialists who guide you through our selection process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Process?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a consultation to learn how our proven selection process can help you find the perfect leadership
              talent for your organization.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}
