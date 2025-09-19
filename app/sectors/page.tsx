import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/contact-section"
import pharmaImg from "@/assets/img/pharma.jpg"
import itImg from "@/assets/img/it.jpg"
import bankingImg from "@/assets/img/banking.jpg"
import logisticsImg from "@/assets/img/logistics.jpg"
import telecomImg from "@/assets/img/telecom.jpg"
import customerImg from "@/assets/img/customer.jpg"
import retailImg from "@/assets/img/retail.jpg"
import Image from "next/image"


export default function SectorsPage() {
  const sectors = [
    {
      name: "Pharmaceutical",
      description:
        "Placement and Beyond is founded on a culture that is passionate about transforming the way the world acquires talent by delivering client-focused solutions that make a difference for businesses worldwide. From refining how you manage your contingent workforce to strengthening your employer brand to recruit top talent, our integrated talent solutions drive the business results you need. We are committed to providing a highly qualified pharmacy technicians to all the clients who use our services.Through our work we help to promote professionalism, support replacement and assure our clients get the best.",
      image: pharmaImg,
        roles: [
        "Chief Medical Officer",
        "VP of Clinical Development",
        "Head of Regulatory Affairs",
        "Chief Scientific Officer",
        "VP of Market Access",
      ],
    },
    {
      name: "Information Technology",
      description:
        "Rapid technological advances in digitisation and data and analytics are transforming the business landscape; supercharging performance, enabling business innovations and creating new forms of competition.As technology continues to evolve, organisations want to best IT professionals to integrate new digital capabilities into operations and strategies in order to succeed in a data- driven world.A digital talent strategy is essential to ensure business transformation, support corporate goals, build innovative business models and activate new revenue sources.We help our clients source best IT professionals in India.",
      image: itImg,
        roles: [
        "Chief Technology Officer",
        "VP of Engineering",
        "Chief Data Officer",
        "Head of Product",
        "Chief Information Security Officer",
      ],
    },
    {
      name: "Banking & Financial Services",
      description:
        "Whether you are looking for a permanent or contract employee in the banking, financial services and insurance services sector, the Placement and Beyond recruitment team can help you find your perfect candidate. We recruit for a variety of BFSI organisations to achieve substantial, positive, and sustainable impact in their performance. Placement and Beyond has helped thousands of finance and risk cooperates advance their goals. Our reputation as a market leader and our long standing connections within the banking and financial services sector set us apart from other recruiters and make us the authority on the market. The practice serves a broad spectrum of clients in traditional and non- traditional financial industries, including : Retail Banking, Wealth Management, Corporate Banking, Securities, Broking, Asset Management Companies, Investment Banking, General Insurance, Life Insurance, Leasing & Equipment Finance Commodities and Forex Trading.",
      image: bankingImg,
        roles: [
        "Chief Risk Officer",
        "Head of Digital Banking",
        "Chief Compliance Officer",
        "VP of Investment Management",
        "Head of Wealth Management",
      ],
    },
    {
      name: "Logistics & Supply Chain",
      description:
        "The logistics industry is ever evolving as new regulations, technology, and customer expectations develop and become the new market norm. Successful logistics recruiting requires a deep understanding of that evolution plus the ability to identify candidates that can succeed in that changing environment. Placement and Beyond recruiting understands the nature of the business, and the impact a well running logistics team is to an organization’s bottom line and customer satisfaction. We specializes in a variety of industries from supply chain management, logistics, transportation, freight forwarding, manufacturing, distribution, Transportation Manager, Distribution Manager, Inventory Manager, Director of Fulfillment, Warehouse Manager, General Manager, Inventory Analyst, Fleet Operations Manager, Logistics Manager / Director, Logistics Analyst and Director of Operations.and much more.",
      image: logisticsImg,
        roles: [
        "Chief Supply Chain Officer",
        "VP of Logistics",
        "Head of Procurement",
        "Director of Operations",
        "VP of Distribution",
      ],
    },
    {
      name: "Telecommunications",
      description:
        "To meet the ever growing expectations of this telecom recruitment segment, Placement and Beyond has made a foray in this sector. Our talented pool of telecom recruitment consultants understands the pulse of the market and knows how to tap the best resources to fit the demands that make up the market. We have candidates with more than 15 years proven working experience in a Senior Technical Telecommunication position and Masters/ Post Graduate studies in Telecommunication Engineering in together with excellent knowledge of the latest industry’s trends and techniques.",
      image: telecomImg,
        roles: [
        "Chief Network Officer",
        "VP of Customer Experience",
        "Head of Digital Services",
        "Chief Technology Officer",
        "VP of Network Operations",
      ],
    },
    {
      name: "Customer Service",
      description:
        "Placement and Beyond’s Customer service staffing roots run deep. Hiring for customer service is no simple task, since these employees are often the primary point of contact between you and your customers. It’s imperative that your call center employees possess the skills and personality traits to always leave the best impression with every interaction. Our recruiters are trained experts in sourcing and screening talent who will represent your organization and brand with the enthusiasm you want, and the professionalism you need.",
      image: customerImg,
        roles: [
        "Chief Customer Officer",
        "VP of Customer Success",
        "Head of Customer Experience",
        "Director of Customer Operations",
        "VP of Customer Support",
      ],
    },
    {
      name: "Retail",
      description:
        "There are 4.9 million Retail establishments in the India supporting over 54 million jobs. The Retail industry is re-inventing itself and growing! Retail supports 1 in 5 jobs in the India alone. At Placement and Beyond, we understand what it takes to find the best talent.Whether you are a small business owner or a nationwide chain, you need the best talent to make your organization grow.We use traditional methods of finding people on your own no longer produce the desired results. We work to fill a variety of retail jobs, including: Cashier, Order Filler, Retail Service Associate, Retail Sales Consultant, Display Assistant, Team Leader, Floor Manager, Department Manager, Stock Clerk, Retail Security Officer, Supervisor, Retail Marketing Specialist, Area Manager, Retail Sales Associate, Product Specialist, Store Manager, Regional Manager, Warehouse Manager, Global Logistics Supervisor and Retail Sales Manager.",
      image: retailImg,
        roles: [
        "Chief Merchandising Officer",
        "VP of E-commerce",
        "Head of Digital Marketing",
        "Chief Customer Officer",
        "VP of Store Operations",
      ],
    },
  ]

  const sectorSpecialists = [
    {
      name: "David Thompson",
      role: "Partner - Financial Services",
      expertise: "Banking & Financial Services",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lisa Park",
      role: "Partner - Technology",
      expertise: "Information Technology",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "James Wilson",
      role: "Senior Consultant - Healthcare",
      expertise: "Pharmaceutical",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Maria Garcia",
      role: "Principal - Retail & Consumer",
      expertise: "Retail",
      image: "/placeholder.svg?height=200&width=200",
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
         Sectors
        </video>

        {/* Overlay to darken the video if needed */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sectors
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading executive search firm specializing in digital leadership and inclusive hiring
            </p>
            */}
          </div>
        </div>
      </section>


      {/* Sectors Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-lg text-gray-600">
                Our deep industry knowledge and extensive networks enable us to identify and place exceptional leaders
                across diverse sectors. We understand the unique challenges, opportunities, and leadership requirements of
                each industry.
              </p>
            </div>
          </div>
        </section>

      {/* Detailed Sectors */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{sector.name}</CardTitle>
                  <p className="text-gray-600">{sector.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Sample Executive Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.roles.map((role, roleIndex) => (
                      <Badge key={roleIndex} variant="secondary" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Detailed Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Text Content */}
              <div className="lg:w-1/2 w-full p-6">
                <h2 className="text-2xl font-bold mb-4">{sector.name}</h2>
                <p className="text-gray-700 mb-4">{sector.description}</p>
                {sector.roles && (
                  <>
                    <h4 className="font-semibold mb-2">Sample Executive Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.roles.map((role, roleIndex) => (
                        <Badge
                          key={roleIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Image */}
              <div className="lg:w-1/2 w-full h-64 lg:h-auto">
                <Image
                  src={sector.image?.src || "/fallback.jpg"}
                  alt={sector.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Sector Specialists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sector Specialists</h2>
            <p className="text-lg text-gray-600">Industry experts with deep knowledge and extensive networks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectorSpecialists.map((specialist, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* <img
                    src={specialist.image || "/placeholder.svg"}
                    alt={specialist.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  /> */}
                  <h3 className="text-lg font-semibold mb-2">{specialist.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{specialist.role}</p>
                  <Badge variant="outline" className="text-xs">
                    {specialist.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sector-Specific Hiring Needs?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with our industry specialists to discuss your unique requirements and learn how we can help you
              find the right leadership talent.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
