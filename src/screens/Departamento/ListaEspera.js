import React from 'react'
import { useParams } from 'react-router-dom'

const ListaEspera = () => {

    const { clase } = useParams()

    return (
        <div>

            <h3 className='font-bold mb-8' >Listado de estdudiantes en espera de la clas { clase }</h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                identidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apellido
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Carrera primaria
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                0801199645321
                            </th>
                            <td className="px-6 py-4">Juan Manuel</td>
                            <td className="px-6 py-4">Rodriguez</td>
                            <td className="px-6 py-4">Infomatica adm.</td>
                            <td className="px-6 py-4"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaEspera