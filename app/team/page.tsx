import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"

export default function TeamPage() {
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
              Team
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading executive search firm specializing in digital leadership and inclusive hiring
            </p>
            */}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture & Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Placement & Beyond, we believe that exceptional results come from exceptional people. Our team combines
              deep industry expertise with a collaborative approach, ensuring that every client receives personalized
              attention and strategic guidance. We foster a culture of continuous learning, innovation, and mutual
              respect, which enables us to attract and retain the best talent in the executive search industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">95%</span>
                </div>
                <h3 className="font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-gray-600 text-sm">Consistently exceeding client expectations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">500+</span>
                </div>
                <h3 className="font-semibold mb-2">Successful Placements</h3>
                <p className="text-gray-600 text-sm">Executive positions filled globally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">25+</span>
                </div>
                <h3 className="font-semibold mb-2">Years Combined Experience</h3>
                <p className="text-gray-600 text-sm">Deep industry knowledge and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Section */}
      <TeamSection showAll={true} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
