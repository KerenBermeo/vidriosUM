import { Button } from "./ui/button"
import { Wrench } from "lucide-react"
import { Img } from 'react-image';

export default function MaintenanceSection() {
  return (
    <section id="mantenimiento" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-[#388e3c] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Servicio de Mantenimiento</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                También realizamos mantenimiento de divisiones, ventanas y puertas para prolongar su vida útil.
              </p>
              <p className="text-gray-600 mb-8">
                Nuestro equipo de técnicos especializados se encarga de revisar, ajustar y reparar sus instalaciones de
                vidrio, garantizando su funcionamiento óptimo y prolongando su durabilidad.
              </p>
              <Button
                size="lg"
                className="bg-[#388e3c] hover:bg-green-800 text-white"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar mantenimiento
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Img
                src="/placeholder.svg?height=800&width=600"
                alt="Técnico realizando mantenimiento de vidrios"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
