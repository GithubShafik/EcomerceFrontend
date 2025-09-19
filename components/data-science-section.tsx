"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Zap } from "lucide-react"

export default function DataScienceSection() {
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Data: Your Business&apos;s Greatest Asset
            </h2>
            <p className="text-muted-foreground text-lg">
              Unlock the full potential of your data with our comprehensive data science solutions. From collection to
              analysis to actionable insights, we help you leverage data for competitive advantage.
            </p>
          </motion.div>

          <Tabs defaultValue="key-areas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="key-areas">Data Solution</TabsTrigger>
              <TabsTrigger value="monetization">Ai Solution</TabsTrigger>
            </TabsList>

            <TabsContent value="key-areas" className="mt-0">
              <div className="grid gap-6 md:grid-cols-3">
                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                        <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <CardTitle>Predictive Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Forecast future trends and behaviors with advanced statistical algorithms and machine learning
                        techniques.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900">
                        <LineChart className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                      </div>
                      <CardTitle>Real-Time Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Process and analyze data as it&apos;s generated, enabling immediate decision-making and rapid
                        response to changing conditions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900">
                        <Users className="h-6 w-6 text-pink-600 dark:text-pink-300" />
                      </div>
                      <CardTitle>Customer Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Understand customer behavior, preferences, and needs through advanced segmentation and pattern
                        recognition.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="monetization" className="mt-0">
              <div className="grid gap-6 md:grid-cols-3">
                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                        <Zap className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <CardTitle>Operational Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Optimize processes, reduce costs, and eliminate bottlenecks through data-driven insights and
                        automation.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900">
                        <PieChart className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                      </div>
                      <CardTitle>Personalized Marketing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Deliver targeted campaigns and personalized experiences that increase conversion rates and
                        customer loyalty.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-700 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900">
                        <BarChart3 className="h-6 w-6 text-pink-600 dark:text-pink-300" />
                      </div>
                      <CardTitle>Risk Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Identify, assess, and mitigate risks through predictive modeling and scenario analysis.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
{/* 
          <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              See How It Works
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
