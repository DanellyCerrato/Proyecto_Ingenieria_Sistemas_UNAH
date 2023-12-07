import { Route, Routes } from "react-router-dom"
import Main from "../screens/admin/Main"
import Cancelaciones from "../screens/admin/Cancelaciones"
import Planificacion from "../screens/admin/Planificacion"
import BreadcrumbC from "../screens/admin/BreadcrumbC"
import Usuarios from "../screens/admin/Usuarios"
import CrearUsuario from "../screens/admin/CrearUsuario"
import { Clases } from "../screens/admin/Clases"
import Aside from "../components/Aside"
import { Asignar } from "../screens/admin/Asignar"
import { Detalle } from "../screens/admin/Detalle"
import Matricula from "../screens/admin/Matricula"
import EditarCalentario from "../screens/admin/NuevoCalentario"
import NuevoCalentario from "../screens/admin/NuevoCalentario"

export const DashboardRoutes = () => {

    return (

        <>
            <button
                data-drawer-target="cta-button-sidebar"
                data-drawer-toggle="cta-button-sidebar"
                aria-controls="cta-button-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            <Aside />

            <div className="p-4 sm:ml-64">
                <div className="container mt-2 p-5">
                    <BreadcrumbC />

                    <div className="container mt-2 p-5" >
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/panificacion-academica" element={<Planificacion />} />
                            <Route path="/cancelaciones-exepcionales" element={<Cancelaciones />} />
                            <Route path="/usuarios" element={<Usuarios />} />
                            <Route path="/matricula" element={<Matricula />} />
                            <Route path="/modificar-calendario/:dia" element={<EditarCalentario/>} />
                            <Route path="/nuevo-calendario/" element={<NuevoCalentario/>} />
                            <Route path="/crear-usuario" element={<CrearUsuario />} />
                            <Route path="/usuario/clases/:id" element={<Clases />} />
                            <Route path="/docente/clases/:id" element={<Asignar />} />
                            <Route path="/docente/clases-matriculadas/:id" element={<Detalle />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </>

    )
}