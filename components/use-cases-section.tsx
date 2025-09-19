"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Factory, CreditCard, GraduationCap } from "lucide-react"

export default function UseCasesSection() {
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

  const useCases = [
    {
      icon: <Factory className="h-10 w-10 text-purple-500" />,
      title: "Predictive Maintenance",
      industry: "Manufacturing",
      description:
        "Our AI system analyzes equipment sensor data to predict failures before they occur, scheduling maintenance only when needed.",
      result: "Reduced downtime by 40%, saved $10M annually.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-cyan-500" />,
      title: "Fraud Detection",
      industry: "Banking",
      description:
        "Our machine learning models analyze transaction patterns in real-time to identify and prevent fraudulent activities.",
      result: "Reduced fraud by 60% using real-time analytics.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-pink-500" />,
      title: "Personalized Learning",
      industry: "EdTech",
      description:
        "Our adaptive learning platform uses AI to customize educational content based on each student's learning style and progress.",
      result: "Improved student performance by 30%.",
    },
  ]

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">AI in Action: Case Studies That Matter</h2>
            <p className="text-muted-foreground text-lg">
              See how our AI solutions have delivered measurable results across different industries.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">{useCase.icon}</div>
                    <div>
                      <CardTitle>{useCase.title}</CardTitle>
                      <CardDescription>{useCase.industry}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                      <span>Result:</span> {useCase.result}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 hover:bg-purple-50 dark:border-purple-700 dark:hover:bg-purple-950"
            >
              Request Case Study
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
