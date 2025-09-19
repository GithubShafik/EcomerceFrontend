import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Award } from "lucide-react"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-First Approach",
      description: "We prioritize understanding our clients' unique needs and delivering tailored solutions.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and AI to enhance our recruitment processes.",
    },
    {
      icon: Heart,
      title: "Diversity & Inclusion",
      description: "Committed to building diverse teams that reflect the communities we serve.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our professional relationships.",
    },
  ]

  const milestones = [
    { year: "2015", achievement: "Founded with a vision to transform executive search" },
    { year: "2018", achievement: "Expanded to serve Fortune 500 companies" },
    { year: "2020", achievement: "Launched AI-powered candidate assessment platform" },
    { year: "2022", achievement: "Achieved 95% client satisfaction rate" },
    { year: "2024", achievement: "Placed 500+ executives across global markets" },
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
          About Us
        </video>

        {/* Overlay to darken the video if needed */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading executive search firm specializing in digital leadership and inclusive hiring
            </p>
            */}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2015, Placement & Beyond emerged from a simple yet powerful vision: to revolutionize the
                executive search industry by combining deep human insight with cutting-edge technology. Our founders,
                Sarah Johnson and Michael Chen, recognized that traditional recruitment methods were failing to meet the
                evolving needs of modern organizations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a boutique firm serving local businesses has grown into a globally recognized executive
                search partner, working with Fortune 500 companies and innovative startups alike. Our growth has been
                driven by our unwavering commitment to excellence and our ability to adapt to the changing landscape of
                talent acquisition.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to push boundaries, leveraging AI-powered assessment tools and data-driven insights
                to ensure the perfect match between exceptional talent and transformative opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To connect exceptional talent with transformative opportunities, enabling organizations to achieve their
                strategic goals while empowering individuals to reach their full potential. We are committed to
                fostering diversity, driving innovation, and building lasting partnerships that create value for all
                stakeholders.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world&apos;s most trusted executive search partner, recognized for our ability to identify and
                place leaders who drive positive change. We envision a future where every organization has access to the
                diverse talent needed to thrive in an increasingly complex global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values & Approach</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & Achievements</h2>
              <p className="text-lg text-gray-600">Key moments in our journey of growth and success</p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-700">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection showAll={true} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
