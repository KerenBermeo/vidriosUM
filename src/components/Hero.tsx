import bathroom from "./../assets/tempered_glass_bathroom_partitions.jpg"
import office from "./../assets/glass_office_facade.jpg"
import balcony from "./../assets/glass_balcony_railings.jpg"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Img } from 'react-image';

const carouselImages = [
    {
        src: bathroom,
        alt: "Divisiones de baño en vidrio templado",
        width: 1920,
        height: 1080
    },
    {
        src: office,
        alt: "Fachada de vidrio para oficina",
        width: 1920,
        height: 1080
    },
    {
        src: balcony,
        alt: "Barandas de vidrio para balcón",
        width: 1920,
        height: 1080
    },
]

export default function Hero(){
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="w-full h-full flex items-center justify-center">
            <Img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              style={{
                width: '1920px',
                height: '1080px',
                objectFit: 'cover',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformamos tus espacios con elegancia y calidad en vidrio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Soluciones personalizadas para hogares y negocios</p>
          <Button
            size="lg"
            className="bg-[#388e3c] hover:bg-green-800 text-white text-lg px-8 py-6"
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicita tu cotización
          </Button>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    )
}