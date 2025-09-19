"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
  gradient: string
}

export default function PageHeader({ title, description, gradient }: PageHeaderProps) {
  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1
              className={`text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
            >
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
