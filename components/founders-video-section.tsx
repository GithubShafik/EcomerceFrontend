"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export default function FoundersVideoSection() {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({})
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const founders = [
    {
      id: "sarah",
      name: "Sashank Shekhar",
      role: "Founder",
      videoUrl: "/placeholder-video.mp4",
      thumbnail: "/placeholder.svg?height=400&width=600",
      quote: "Our mission is to transform how organizations find and develop exceptional leaders.",
    },
    {
      id: "michael",
      name: "Kiran Prakash",
      role: "Co-Founder",
      videoUrl: "/placeholder-video.mp4",
      thumbnail: "/placeholder.svg?height=400&width=600",
      quote: "Technology and human insight combined create the perfect recruitment solution.",
    },
  ]

  const toggleVideo = (founderId: string) => {
    const video = videoRefs.current[founderId]
    if (video) {
      if (isPlaying[founderId]) {
        video.pause()
        setIsPlaying((prev) => ({ ...prev, [founderId]: false }))
      } else {
        video.play()
        setIsPlaying((prev) => ({ ...prev, [founderId]: true }))
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-lg text-gray-600">Hear directly from the visionaries behind Placement & Beyond</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                {/* <video
                  ref={(el) => (videoRefs.current[founder.id] = el)}
                  className="w-full h-64 object-cover"
                  poster={founder.thumbnail}
                  preload="metadata"
                  onPlay={() => setIsPlaying((prev) => ({ ...prev, [founder.id]: true }))}
                  onPause={() => setIsPlaying((prev) => ({ ...prev, [founder.id]: false }))}
                  onEnded={() => setIsPlaying((prev) => ({ ...prev, [founder.id]: false }))}
                >
                  <source src={founder.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}

                {/* Custom Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-16 h-16"
                    onClick={() => toggleVideo(founder.id)}
                  >
                    {isPlaying[founder.id] ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                  </Button>
                </div>

                {/* Founder Badge */}
                <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Founder
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{founder.role}</p>
                <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                  &quot;{founder.quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Founder Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            With over 40 years of combined experience in executive search and talent acquisition, our founders bring
            unparalleled expertise to every client engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Executive Placements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
