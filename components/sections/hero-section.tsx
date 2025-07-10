"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

interface HeroSectionProps {
  isScrolled: boolean
}

export function HeroSection({ isScrolled }: HeroSectionProps) {
  return (
    <section className={`relative text-white py-32 overflow-hidden ${isScrolled ? "pt-44" : ""}`}>
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eyo-bg-Baj7i77MWFpcAh0aElJT2hP1pHhiI8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blue to Pink Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-purple-600/60 to-pink-500/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          >
            ECI@25: Bridging Generations, Building Communities!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-xl"
          >
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="h-6 w-6" />
              <span>Sept 18-21, 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-6 w-6" />
              <span>Newark, NJ</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg shadow-lg">
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg bg-white/10 backdrop-blur-sm shadow-lg"
            >
              Watch Livestream
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
