"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <div className="absolute inset-0 -m-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl rounded-3xl"></div>

          <motion.div variants={itemVariants} className="relative space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready to make smarter decisions with AI?
            </h2>
            <p className="text-slate-300 text-lg">
              Let&apos;s discuss how our AI solutions can transform your business and drive growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-black">
              <Calendar className="mr-2 h-4 w-4" />
              Talk to an Expert
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
