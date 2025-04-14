import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer className="bg-green text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Vidrios UM</h3>
                        <p className="text-green-100 mb-4">
                            Transformamos tus espacios con elegancia y calidad en vidrios. Más de 10 años de experiencia nos respaldan
                        </p>
                        <div className="flex space-x-4">
                            <link rel="stylesheet" href="" /> 
                            <link rel="stylesheet" href="" />
                            <link rel="stylesheet" href="" />
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicios" className="text-green-100 hover:text-white transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to="#proyectos" className="text-green-100 hover:text-white transition-colors">
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link to="#testimonios" className="text-green-100 hover:text-white transition-colors">
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link to="#contacto" className="text-green-100 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Servicios</h3>
                        <ul className="space-y-2">
                            <li className="text-green-100">Divisiones de baño y oficina</li>
                            <li className="text-green-100">Puertas, ventanas y fachadas</li>
                            <li className="text-green-100">Balcones, barandas y pasamanos</li>
                            <li className="text-green-100">Repisas, espejos y techos</li>
                            <li className="text-green-100">Mantenimiento</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-green-100">Cra. 32 #35F bis-40</span>
                            </li>
                            <li className="flex items-start">
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