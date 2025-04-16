import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="relative h-10 w-40">
            {/* Replace with your actual logo */}
            <div className="font-bold text-xl text-[#388e3c]">VidriosUM</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="#servicios"
            className={`font-medium hover:text-[#388e3c] transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Servicios
          </Link>
          <Link
            to="#mantenimiento"
            className={`font-medium hover:text-[#388e3c] transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Mantenimiento
          </Link>
          <Link
            to="#proyectos"
            className={`font-medium hover:text-[#388e3c] transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Proyectos
          </Link>
          <Link
            to="#testimonios"
            className={`font-medium hover:text-[#388e3c] transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Testimonios
          </Link>
          <Link
            to="#contacto"
            className={`font-medium hover:text-[#388e3c] transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="#servicios"
              className="font-medium text-gray-800 hover:text-[#388e3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="#mantenimiento"
              className="font-medium text-gray-800 hover:text-[#388e3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mantenimiento
            </Link>
            <Link
              to="#proyectos"
              className="font-medium text-gray-800 hover:text-[#388e3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              to="#testimonios"
              className="font-medium text-gray-800 hover:text-[#388e3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              to="#contacto"
              className="font-medium text-gray-800 hover:text-[#388e3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
