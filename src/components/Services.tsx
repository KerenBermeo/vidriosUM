import { useState } from "react"
import { motion } from "framer-motion"
import { ShowerHeadIcon as Shower, DoorOpenIcon as Door, LayoutGrid, Shield } from "lucide-react"

const services = [
  {
    icon: Shower,
    title: "Divisiones de baño y oficina",
    description: "Soluciones elegantes y funcionales para separar espacios con vidrio templado.",
  },
  {
    icon: Door,
    title: "Puertas, ventanas y fachadas",
    description: "Diseños modernos que combinan estética, seguridad y eficiencia energética.",
  },
  {
    icon: LayoutGrid,
    title: "Balcones, barandas y pasamanos",
    description: "Protección con estilo para escaleras, balcones y terrazas.",
  },
  {
    icon: Shield,
    title: "Repisas, espejos y techos",
    description: "Elementos decorativos y funcionales para complementar cualquier espacio.",
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas en vidrio para transformar cualquier espacio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-colors duration-300 ${
                  hoveredIndex === index ? "bg-[#388e3c] text-white" : "bg-green-100 text-[#388e3c]"
                }`}
              >
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

