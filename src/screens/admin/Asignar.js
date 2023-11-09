import React from 'react'
import Swal from 'sweetalert2'

export const Asignar = () => {


    const agregar = () => {


        Swal.fire({
            title: '¿Quieres adicionar la clase?',
            showDenyButton: true,
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Clase agregada con exito!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Operacion cancelada', '', 'info')
            }
        })

    }

    return (
        <div className='p-5'>

            <h3 className='font-bold mb-10' >Seleccionar Clase</h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seccion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Incio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Fin
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
                                Electronica
                            </th>
                            <td className="px-6 py-4">1701</td>
                            <td className="px-6 py-4">1700</td>
                            <td className="px-6 py-4">1800</td>
                            <td className="px-6 py-4">
                                <button onClick={agregar} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
