import React, { useEffect, useState } from 'react'
import Empleados from '../../data/Empleados';
import { CardC } from '../../components/CardC';
import { NavLink } from 'react-router-dom';
import PaginacionC from '../../components/PaginacionC';

const Usuarios = () => {


    const [empleados, setEmpleados] = useState([]);


    useEffect(() => {
        getEmpleados()
    }, [])

    const getEmpleados = () => {
        setEmpleados(Empleados)
    }

    return (
        <div>

            <h3 className='font-bold mb-3' >Listado de usuarios</h3>
            <NavLink to={'/crear-usuario'}>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Nuevo</button>
            </NavLink>

            {
                empleados.length === 0 &&
                (
                    <div className='flex justify-center'  >
                        <CardC mensaje={'No tiene usuarios registrados'} />
                    </div>
                )
            }

            {
                empleados.length > 0 &&
                <>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Numero de empleado
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Centro
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Centro
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Accion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    empleados.map((empleado) => {
                                        return (
                                            <tr key={empleado.numero} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">

                                                    <img className="rounded-full w-10 h-10" src={empleado.foto} alt="image description" />

                                                </td>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {empleado.nombre}
                                                </th>
                                                <td className="px-6 py-4"> {empleado.numero}</td>
                                                <td className="px-6 py-4">{empleado.centro}</td>
                                                <td className="px-6 py-4">
                                                    <NavLink to={'/docente/clases-matriculadas/' + 15412} >
                                                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Detalle</button>
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-2 flex justify-center' >
                        <PaginacionC />
                    </div>

                </>
            }



        </div>
    )
}

export default Usuarios
