import { useState, useEffect, useRef } from "react"
import { Img } from 'react-image';
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Propietario de Apartamento",
    content:
      "Excelente trabajo en las divisiones de baño. El acabado es impecable y la instalación fue rápida y profesional. Totalmente recomendados.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "María González",
    role: "Gerente de Oficina",
    content:
      "Contratamos a VidriosUM para las divisiones de nuestra oficina y quedamos muy satisfechos. El espacio se ve moderno y elegante, justo lo que buscábamos.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Juan Pérez",
    role: "Arquitecto",
    content:
      "He trabajado con VidriosUM en varios proyectos y siempre entregan un trabajo de calidad. Su atención al detalle y profesionalismo los distingue.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Diseñadora de Interiores",
    content:
      "La calidad de los materiales y la precisión en la instalación son excepcionales. Mis clientes siempre quedan encantados con los trabajos de VidriosUM.",
    image: "/placeholder.svg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef(0)

  useEffect(() => {
    if (carouselRef.current) {
      widthRef.current = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-md" onClick={prevTestimonial}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
          </div>

          <div className="overflow-hidden px-4" ref={carouselRef}>
            <motion.div
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="flex"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                    <Quote className="h-10 w-10 text-green-200 mb-4" />
                    <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-md" onClick={nextTestimonial}>
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-[#388e3c] scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}