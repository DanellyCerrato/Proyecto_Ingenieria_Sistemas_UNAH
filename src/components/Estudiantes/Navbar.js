import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarE = () => {
    return (
        <div>
            <nav
                className="mx-auto flex max-w-7lg items-center justify-between bg-blue-800 p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <p className="-m-1.5 p-1.5 text-lg font-semibold leading-6 text-sky-50">
                        Estudiantes
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
                    <NavLink to="/estudiantes/matricula" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"} >
                        Matricula
                    </NavLink>
                    <NavLink to="/estudiantes/solicitudes" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Solicitudes
                    </NavLink>
                    <NavLink to="/estudiantes/archivos" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Archivos
                    </NavLink>
                    <NavLink to="/estudiantes/perfil" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Perfil
                    </NavLink>
                    <NavLink to="/estudiantes/notas" className={({ isActive }) =>
                        isActive ? "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950" : "text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950"}>
                        Notas
                    </NavLink>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <a href="#" className="text-lg font-semibold leading-6 text-sky-50 hover:text-sky-950">
                        Log in <span aria-hidden="true">→</span>
                    </a>
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
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Matricucla
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Solicitudes
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Perfil
                                </a>
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarE
