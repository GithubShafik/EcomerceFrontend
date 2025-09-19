"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, BarChart3, Settings, Scale, Cpu } from "lucide-react"

export default function TrendsSection() {
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

  const trendItems = [
    {
      icon: <Brain className="h-8 w-8 text-pink-500" />,
      title: "Generative AI",
      description:
        "ChatGPT, DALL·E, and other generative models are revolutionizing content creation and problem-solving.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Explainable AI",
      description:
        "Transparent AI systems that can explain their decisions and build trust with users and stakeholders.",
    },
    {
      icon: <Settings className="h-8 w-8 text-cyan-500" />,
      title: "AutoML",
      description:
        "Automated machine learning tools that make AI accessible to non-technical users and speed up development.",
    },
    {
      icon: <Scale className="h-8 w-8 text-indigo-500" />,
      title: "AI Ethics",
      description:
        "Frameworks and practices to ensure AI systems are fair, unbiased, and respect privacy and human rights.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Edge AI",
      description:
        "AI processing on local devices rather than in the cloud, enabling faster responses and enhanced privacy.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Where AI is Going in 2025 and Beyond</h2>
            <p className="text-slate-300 text-lg">
              Stay ahead of the curve with these emerging trends that are shaping the future of AI and machine learning.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trendItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
