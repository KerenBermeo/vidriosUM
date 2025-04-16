import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
            <div>
                <Link to="/">
                    <div>Vidrios UM</div>
                </Link>
            </div>
            {/* Desktop Menu */}
            <div>
                <Link to="#servicios">
                    Servicios
                </Link>
                <Link to="#mantenimiento">
                    Mantenimiento
                </Link>
                <Link to="#proyectos">
                    Proyectos
                </Link>
                <Link to="#testimonios">
                    Testimonios
                </Link>
                <Link to="#contacto">
                    Contacto
                </Link>
            </div>
        </nav>
    );
}