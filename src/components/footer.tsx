import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer>
            <div>
                <div>
                    <div>
                        <h3>Vidrios UM</h3>
                        <p>
                            Transformamos tus espacios con elegancia y calidad en vidrios. Más de 10 años de experiencia nos respaldan
                        </p>
                        <div>
                            <link rel="stylesheet" href="" /> 
                            <link rel="stylesheet" href="" />
                            <link rel="stylesheet" href="" />
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3>Enlaces rápidos</h3>
                        <ul>
                            <li>
                                <Link to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicios">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to="#proyectos">
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link to="#testimonios">
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link to="#contacto">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3>Servicios</h3>
                        <ul>
                            <li>Divisiones de baño y oficina</li>
                            <li>Puertas, ventanas y fachadas</li>
                            <li>Balcones, barandas y pasamanos</li>
                            <li>Repisas, espejos y techos</li>
                            <li>Mantenimiento</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3>Contacto</h3>
                        <ul>
                            <li>
                                <span>Cra. 32 #35F bis-40</span>
                            </li>
                            <li>
                                <span>3167120802</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p>© {new Date().getFullYear()} VidriosUM. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}