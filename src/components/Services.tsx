import { motion } from "framer-motion"
import { ShowerHeadIcon as Shower} from "lucide-react"

const services = [
  {
    icon: Shower,
    title: "Divisiones de baño y oficina",
    description: "Soluciones elegantes y funcionales para separar espacios con vidrio templado.",
  }
]

export default function ServicesSection() {
  return (
    <section id="servicios">
      <div>
        <div>
          <h2>Nuestros Servicios</h2>
          <p>
            Ofrecemos soluciones completas en vidrio para transformar cualquier espacio
          </p>
        </div>

        <div>
          {services.map((service, index) => (
            <motion.div
              key={index}
            >
              <div>
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
