"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Shield, Zap, BarChart3 } from "lucide-react"

export default function WhyChooseUsSection() {
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

  const features = [
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Expert AI/ML Team",
      description:
        "Our team includes PhDs, data scientists, and engineers with decades of combined experience in AI and ML.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-cyan-500" />,
      title: "Industry-Specific Solutions",
      description: "We tailor our AI solutions to the unique challenges and opportunities in your industry.",
    },
    {
      icon: <Shield className="h-10 w-10 text-pink-500" />,
      title: "Transparent & Ethical AI",
      description: "We build AI systems that are explainable, fair, and respect privacy and human rights.",
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-500" />,
      title: "Fast Deployment",
      description:
        "Our scalable infrastructure and proven methodologies enable rapid implementation and time-to-value.",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg">
              We combine deep technical expertise with business acumen to deliver AI solutions that create real value.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
