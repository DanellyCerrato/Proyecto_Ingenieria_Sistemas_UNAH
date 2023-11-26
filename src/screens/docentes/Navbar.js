import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarD = () => {
    return (
        <div>
            <nav
                className="mx-auto flex max-w-7lg items-center justify-between bg-blue-800 p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <p className="-m-1.5 p-1.5 text-lg font-semibold leading-6 text-sky-50">
                        Docentes
                    </p>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/docentes/clases-docente" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"} >
                        Clases
                    </NavLink>
                    <NavLink to="/docentes/presentacion-docente" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Presentacion
                    </NavLink>
                    <NavLink to="/docentes/perfil-docente" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Perfil
                    </NavLink>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <NavLink to="/login?tipo=docentes" className="text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950">
                        Cerrar Sesion <span aria-hidden="true">→</span>
                    </NavLink>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-0 z-10" />
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavLink to="/docentes/clases-docente" className={({ isActive }) =>
                                    isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"} >
                                    Clases
                                </NavLink>
                                <NavLink to="/docentes/presentacion-docente" className={({ isActive }) =>
                                    isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                                    Presentacion
                                </NavLink>
                                <NavLink to="/docentes/perfil-docente" className={({ isActive }) =>
                                    isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                                    Perfil
                                </NavLink>
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to="/login?tipo=docente"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Cerrar Sesion
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarD
