"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Database } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function WhatWeDoSection() {
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
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Transforming Industries with AI & ML</h2>
            <p className="text-muted-foreground text-lg">
             Artificial Intelligence (AI) is transforming industries across the globe in an unprecedented manner. To drive innovation and stay ahead of the curve, organizations must embrace it swiftly and strategically.
            </p>
            <p className="text-muted-foreground text-lg">
              Our team of experts helps you navigate the complex landscape of Data and AI, ensuring you implement solutions that deliver significant business value and drive growth.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-muted-foreground">
                Custom AI solutions that automate processes and enhance decision-making.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900 mb-4">
                <Cpu className="h-8 w-8 text-cyan-600 dark:text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">Predictive models that learn from your data to improve over time.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 mb-4">
                <Database className="h-8 w-8 text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-muted-foreground">
              Comprehensive Big Data Solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 mb-4">
                <Database className="h-8 w-8 text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground">
               Deriving actionable insights that drive business growth.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
