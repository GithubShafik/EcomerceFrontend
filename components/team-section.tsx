import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { StaticImageData } from "next/image"

import founderImg from "@/assets/img/founder.jpeg"
import cofounderImg from "@/assets/img/co-founder.jpeg"
import recruitmentImg from "@/assets/img/recruitment.jpg"
import consultantImg from "@/assets/img/consultant.jpeg"
import bdmImg from "@/assets/img/bdm.jpg"


interface TeamMember {
  name: string
  role: string
  bio: string
  image: string | StaticImageData
  videoUrl?: string
  isFounder?: boolean
}

interface TeamSectionProps {
  showAll?: boolean
}

export default function TeamSection({ showAll = false }: TeamSectionProps) {
  const teamMembers: TeamMember[] = [
    {
      name: "Sashank Shekhar",
      role: "Founder",
      bio: "Former Fortune 500 executive with 20+ years in talent acquisition and organizational development.",
      image: founderImg,
      // videoUrl: "/placeholder-video.mp4", // Add video for founder
      isFounder: true,
    },
    {
      name: "Kiran Prakash",
      role: "Co-Founder",
      bio: "Digital transformation expert specializing in technology leadership recruitment.",
      image: cofounderImg,
      // videoUrl: "/placeholder-video.mp4", // Add video for co-founder
      isFounder: true,
    },
    {
      name: "Divyendu Shekhar",
      role: "Recruitment Consultant",
      bio: "Board services specialist with expertise in governance and strategic leadership placement.",
      image: recruitmentImg,
    },
    {
      name: "Arbaz Shaikh",
      role: "Consultant",
      bio: "Banking and financial services recruitment expert with global network connections.",
      image: consultantImg,
    },
    {
      name: "Akshay Wagh",
      role: "B.D.M",
      bio: "Pharmaceutical and healthcare industry recruitment specialist with 15+ years experience.",
      image: bdmImg,
    },
  ]

  const displayMembers = showAll ? teamMembers : teamMembers.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{showAll ? "Our Team" : "Meet Our Leadership"}</h2>
          <p className="text-lg text-gray-600">
            {showAll ? "Experienced professionals dedicated to your success" : "Industry experts leading our mission"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/team">
                Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
