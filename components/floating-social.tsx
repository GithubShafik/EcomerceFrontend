"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter, Facebook, Linkedin, Instagram, Youtube, Plus, X } from "lucide-react"

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/971509947548",
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/Girishpant4/",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/girishpant_",
      color: "bg-sky-500 hover:bg-sky-600",
      textColor: "text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/girishpant/",
      color: "bg-blue-700 hover:bg-blue-800",
      textColor: "text-white",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/girishpant_/#",
      color: "bg-pink-500 hover:bg-pink-600",
      textColor: "text-white",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCI63sczS7DbAUPcQNtnuZgA",
      color: "bg-red-600 hover:bg-red-700",
      textColor: "text-white",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Social Media Buttons */}
        <div
          className={`flex flex-col space-y-3 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {socialLinks?.map((social) => {
            const IconComponent = social.icon
            return (
              <div key={social.name} className="group relative">
                <Button
                  asChild
                  size="sm"
                  className={`w-12 h-12 rounded-full shadow-lg transition-all duration-200 ${social.color} ${social.textColor} hover:scale-110`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                </Button>

                {/* Tooltip */}
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    {social.name}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-blue-600 hover:bg-blue-700 hover:scale-110"
          } text-white`}
          aria-label={isOpen ? "Close social menu" : "Open social menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </Button>
      </div>

      {/* WhatsApp Quick Action (Always Visible) */}
      <div className="absolute -top-20 right-0">
        <Button
          asChild
          size="sm"
          className="w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white hover:scale-110 transition-all duration-200 animate-pulse"
        >
          {/* <a
            href="https://wa.me/971509947548?text=Hello%20Girish%20Pant,%20I%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a> */}
        </Button>
      </div>
    </div>
  )
}
