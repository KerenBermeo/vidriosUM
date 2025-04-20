import { Button } from "./ui/button"
import { useState } from "react"

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

            </div>
        </section>
    )
}