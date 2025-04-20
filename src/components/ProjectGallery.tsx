import { Button } from "./ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { Img } from 'react-image';


const projects = [
    {
      id: 1,
      title: "División de baño en vidrio templado",
      category: "divisiones",
      location: "Residencial Las Palmas",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Fachada de vidrio para oficina corporativa",
      category: "fachadas",
      location: "Torre Empresarial Centro",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Baranda de vidrio para balcón",
      category: "balcones",
      location: "Condominio Vista Mar",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Puerta de vidrio templado",
      category: "puertas",
      location: "Centro Comercial Plaza",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Divisiones para oficina",
      category: "divisiones",
      location: "Edificio Corporativo Norte",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Ventanas panorámicas",
      category: "ventanas",
      location: "Residencia Privada",
      image: "/placeholder.svg?height=600&width=800",
    },
]
  

const categories = [
    { id: "all", name: "Todos" },
    { id: "divisiones", name: "Divisiones" },
    { id: "fachadas", name: "Fachadas" },
    { id: "balcones", name: "Balcones" },
    { id: "puertas", name: "Puertas" },
    { id: "ventanas", name: "Ventanas" },
]

export default function ProjectGallery(){

    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

    return(
        <section id="proyectos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explora nuestra galería de trabajos realizados y descubre la calidad de nuestros servicios
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => (
                        <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"} 
                        className={selectedCategory === category.id ? "bg-[#388e3c] hover:bg-green-800" : ""}
                        onClick={() => setSelectedCategory(category.id)}
                        >
                        {category.name}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-64">
                            <Img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                                <p className="text-white/80 text-sm">{project.location}</p>
                            </div>
                        </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}