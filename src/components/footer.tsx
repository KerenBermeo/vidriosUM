import { MapPin, Phone } from "lucide-react"


export default function Footer(){
    return (
        <footer className="bg-[#2e7d32] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Vidrios UM</h3>
                        <p className="text-green-100 mb-4">
                            Transformamos tus espacios con elegancia y calidad en vidrios. Más de 10 años de experiencia nos respaldan
                        </p>
                        <div className="flex space-x-4">
                            <a  href="https://www.facebook.com/VidriosdeseguridadUM/" target="_blank" rel="noopener noreferrer"className="text-white hover:text-green-200 transition-colors">
                                <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/vidrioseguridadum/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors">
                                <svg role="img" viewBox="0 0 24 24"className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://wa.me/573167120802?text=Hola"  target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors">
                                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                <span className="sr-only">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                            <a href="/" className="text-green-100 hover:text-white transition-colors">
                                Inicio
                            </a>
                            </li>
                            <li>
                            <a href="#servicios" className="text-green-100 hover:text-white transition-colors">
                                Servicios
                            </a>
                            </li>
                            <li>
                            <a href="#proyectos" className="text-green-100 hover:text-white transition-colors">
                                Proyectos
                            </a>
                            </li>
                            <li>
                            <a href="#testimonios" className="text-green-100 hover:text-white transition-colors">
                                Testimonios
                            </a>
                            </li>
                            <li>
                            <a href="#contacto" className="text-green-100 hover:text-white transition-colors">
                                Contacto
                            </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                    <h3 className="text-xl font-bold mb-4">Servicios</h3>
                    <ul className="space-y-2">
                        <li>
                        <a 
                            href="https://wa.me/573123456789?text=Hola%20Vidrios%20UM,%20estoy%20interesado%20en%20Divisiones%20de%20baño%20y%20oficina" 
                            className="text-green-100 hover:text-white transition-colors block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Divisiones de baño y oficina
                        </a>
                        </li>
                        <li>
                        <a 
                            href="https://wa.me/573123456789?text=Hola%20Vidrios%20UM,%20estoy%20interesado%20en%20Puertas,%20ventanas%20y%20fachadas" 
                            className="text-green-100 hover:text-white transition-colors block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Puertas, ventanas y fachadas
                        </a>
                        </li>
                        <li>
                        <a 
                            href="https://wa.me/573123456789?text=Hola%20Vidrios%20UM,%20estoy%20interesado%20en%20Balcones,%20barandas%20y%20pasamanos" 
                            className="text-green-100 hover:text-white transition-colors block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Balcones, barandas y pasamanos
                        </a>
                        </li>
                        <li>
                        <a 
                            href="https://wa.me/573123456789?text=Hola%20Vidrios%20UM,%20estoy%20interesado%20en%20Repisas,%20espejos%20y%20techos" 
                            className="text-green-100 hover:text-white transition-colors block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repisas, espejos y techos
                        </a>
                        </li>
                        <li>
                        <a 
                            href="https://wa.me/573123456789?text=Hola%20Vidrios%20UM,%20estoy%20interesado%20en%20servicios%20de%20Mantenimiento" 
                            className="text-green-100 hover:text-white transition-colors block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mantenimiento
                        </a>
                        </li>
                    </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 mt-1 text-green-300" />
                                <span className="text-green-100">Cra. 32 #35F bis-40</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-3 mt-1 text-green-300" />
                                <span className="text-green-100">3167120802</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200 text-sm">
                    <p>© {new Date().getFullYear()} VidriosUM. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}