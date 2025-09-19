"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// import { Button } from "@/components/ui/button"

export default function HowWeHelpSection() {
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

  const steps = [
    {
      number: "01",
      title: "Start with Small Use Cases",
      description: "We help you identify high-impact, low-risk opportunities to implement AI in your business.",
    },
    {
      number: "03",
      title: "Invest in AI Talent",
      description:
        "Our team of experts works alongside your staff, transferring knowledge and building internal capabilities.",
    },
    {
      number: "02",
      title: "Leverage Cloud Services",
      description: "We utilize scalable cloud infrastructure to deploy AI solutions quickly and cost-effectively.",
    },
    {
      number: "04",
      title: "Monitor AI Performance",
      description:
        "We implement robust monitoring systems to ensure your AI solutions continue to deliver value over time.",
    },
  ]

  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Your AI Transformation Starts Here</h2>
            <p className="text-muted-foreground text-lg">
              We guide you through every step of your AI journey, from initial assessment to full-scale implementation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                  {step.number}
                </div>
                <div
                  className={
                    index < steps.length - 1
                      ? "absolute left-5 md:left-6 top-10 md:top-12 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"
                      : ""
                  }
                ></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Get a Custom AI Roadmap
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
