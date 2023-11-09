import React, { useState } from 'react'
import OpcioneMenuAdm from '../data/OpcioneMenuAdm'
import { NavLink } from 'react-router-dom'

const Aside = () => {


    const [opciones] = useState(OpcioneMenuAdm)

    return (


        <aside
            id="cta-button-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-blue-800 dark:bg-gray-400">

                <NavLink to="/" className="flex items-center pl-2.5 mb-5">
                    <img src="https://www.unah.edu.hn/themes/portalunah/assets/images/logo-unah.png" className="h-6 mr-3 sm:h-7" alt="Unah Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">UNAH</span>
                </NavLink>

                <ul className="space-y-2 font-medium">

                    {
                        opciones.map((opcion) => {
                            return (
                                <li key={opcion.label} >
                                    <NavLink
                                        to={ opcion.path }
                                        className="flex items-center p-2 text-sky-50 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:group-hover:text-black hover:text-black"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-sky-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 18"
                                        >
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap hover:text-black">{ opcion.label } </span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }



                </ul>

            </div>
        </aside>
    )
}

export default Aside
