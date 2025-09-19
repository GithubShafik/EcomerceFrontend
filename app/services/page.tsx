import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, Target, Award, CheckCircle } from "lucide-react"
import ContactSection from "@/components/contact-section"
import Image from "next/image"
import executive from "../../assets/img/executive.jpg"
import digital from "../../assets/img/digital.jpg"
import board from "../../assets/img/board.jpg"
import inclusion from "../../assets/img/inclusion.jpg"


export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Comprehensive executive search services for C-suite and senior leadership positions.",
      benefits: [
        "Extensive global network of top-tier executives",
        "Rigorous assessment and evaluation process",
        "Cultural fit analysis and integration support",
        "90-day placement guarantee",
      ],
      process: "We consult with corporate, Private Equity and Venture Capital-backed businesses around the world to source transformational leaders and Executives. Since our inception we have redefined the executive search model with our one P& L company structure that encourages a truly collaborative approach across the world, which grants us access to a broad global candidate network in best interest of our clients.As a global boutique, we operate at the optimum size to maintain a personal approach and ensure that we allocate the best suitable partner for each project irrelevant of location.Our access to the top talent, focus on long - term client relationships and excellence in delivery ensures we achieve outstanding results.",
      image:executive
    },
    {
      icon: Users,
      title: "Board Services",
      description: "Strategic board composition and governance expertise for effective leadership.",
      benefits: [
        "Independent director identification",
        "Board diversity and skills assessment",
        "Governance best practices consultation",
        "Succession planning support",
      ],
      process:
        "Board members face increasing scrutiny from stakeholders; from fast-changing corporate governance regulations, increasing diversity requirements, digitalisation, and pressure to provide transparent and directional leadership.Yet the talent pool for highly-experienced Board directors with a premium skillset and the experience to deliver deep insight, guidance and counsel is limited, and potential candidates are highly sought-after. Whether you are a multinational organisation seeking transformational digital leadership or a start-up looking to bring rigour and experience to scale your business, our single global network and joined-up approach gives us access to exceptional candidates.",
        image:board
    },
    {
      icon: Target,
      title: "Digital Leadership",
      description: "Specialized recruitment for digital transformation and technology leadership roles.",
      benefits: [
        "Deep understanding of digital transformation",
        "Network of proven digital leaders",
        "Technology skills assessment",
        "Change management expertise evaluation",
      ],
      process: "Digital is in our DNA – for over a decade we’ve been working with clients on digital leadership and have a deep understanding of the strategic and operational skills required today.The exponential rise of digital has disrupted traditional business models beyond recognition and redefined success to beyond analogue. Leaders now have to possess digital and technological skills in order to drive transformation and change.We understand the power of digital disruption, and identify and engage with digital talent across the globe to meet the challenges of the new economy, driving transformation and change.",
      image:digital
    },
    {
      icon: Award,
      title: "Inclusion & Diversity",
      description: "Strategic hiring initiatives to build diverse and inclusive leadership teams.",
      benefits: [
        "Diverse candidate pipeline development",
        "Unconscious bias mitigation strategies",
        "Inclusive hiring process design",
        "D&I metrics and reporting",
      ],
      process:
        "At Placement and Beyond, we don’t just search for the obvious candidates, we approach things differently and are not afraid to innovate with clients on their approach to diversity and inclusion. We assemble diverse search teams from a variety of global locations for every assignment to foster creativity and offer clients a different perspective.From local start-ups to global corporations, businesses are waking up to the benefits of a diverse workforce. But corporate structures necessary to harness this talent pool are missing, leaving businesses unable to truly harness the multitude of economic and social benefits diversity brings.",
        image:inclusion
    },
  ]

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
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken the video if needed */}
        <div className="absolute inset-0 "></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Comprehensive recruitment solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <Image src={service.image} alt="img" className="mb-5" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <service.icon className="h-12 w-12 mr-4 text-gray-700" />
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">{service.process}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Specialists</h2>
            <p className="text-lg text-gray-600">Meet the experts behind our specialized services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Johnson", role: "Executive Search Lead", service: "Executive Search" },
              { name: "Emily Rodriguez", role: "Board Services Partner", service: "Board Services" },
              { name: "Michael Chen", role: "Digital Leadership Expert", service: "Digital Leadership" },
              { name: "Lisa Park", role: "D&I Strategy Consultant", service: "Inclusion & Diversity" },
            ].map((specialist, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  {/* <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt={specialist.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  /> */}
                  <h3 className="font-semibold mb-1">{specialist.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{specialist.role}</p>
                  <p className="text-gray-500 text-xs">{specialist.service}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss how our services can help you achieve your talent acquisition goals.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Request a Consultation</a>
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