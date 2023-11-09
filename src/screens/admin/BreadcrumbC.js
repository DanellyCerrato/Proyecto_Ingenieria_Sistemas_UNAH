import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi';
import React from 'react'
import { useLocation } from 'react-router-dom';

const BreadcrumbC = () => {

    const location = useLocation();

    const getPath = (path) => {
        if (path === "/panificacion-academica") {
            return "Panificacion academica"
        }
        if (path === "/") {
            return "Inicio"
        }
        if (path === "/matricula") {
            return "Matricula"
        }
        if (path === "/cancelaciones-exepcionales") {
            return "Cancelaciones"
        }
        if (path === "/usuarios") {
            return "Usuarios"
        }
        if (path.includes("/clases-matriculadas")) {
            return "Clases matriculadas Docente"
        }
        if (path.includes("/docente/clases")) {
            return "Selecciona Clase"
        }
        if (path.includes("/usuario/clases")) {
            return "Clases matriculadas Estudiante"
        }

    }
 
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#" icon={HiHome}>
                Dasboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>{getPath(location.pathname)}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbC