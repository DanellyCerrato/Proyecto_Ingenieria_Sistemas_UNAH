import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CardC } from '../../components/CardC'
import PaginacionC from '../../components/PaginacionC'

const SolicitudesPendientes = () => {
    const [data, setData] = useState([])

    const solicitudesData = [
        {
            codigo: 'IS920',
            numeroCuenta: '873892483',
            descripcion: 'Cambio de domicilio',
            tipo: 'Cambio de centro',
            estado: 'Pendiente',
            dictamen: 'N/A',
        },
        {
            codigo: 'ES08',
            numeroCuenta: '873892483',
            descripcion: 'Cambio de sistemas a informatica',
            tipo: 'Cambio de carrera',
            estado: 'Finalizada',
            dictamen: 'Denegada',
        },
        {
            codigo: 'ES08',
            numeroCuenta: '873892483',
            descripcion: 'Español General',
            tipo: 'Cancelacion Exepcional',
            estado: 'Pendiente',
            dictamen: 'N/A',
        }
    
    ]

    useEffect(() => {
        setData(solicitudesData)


    }, [])

    const dictaminar = (codigo, opcion) => {

        console.log(codigo)

        if (opcion == 1) {
            success('La solicitud fue aprobada ')
            return;
        }
        success('La solicitud fue rechazada  ')
    }

    const success = (msg) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: msg,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (

        <div>
            <h3 className='font-bold mb-10' >LISTADO DE SOLICITUDES</h3>
            {
                data.length === 0 &&
                (
                    <div className='flex justify-center'  >
                        <CardC mensaje={'No tiene solicitudes pendientes'} />
                    </div>
                )
            }

            {
                data.length > 0 &&
                <>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Codigo
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Numero Cuenta
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tipo
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Descripcion
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Estado
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Dictamen
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Aprobar
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Denegar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((clase, key) => {
                                        return (
                                            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4"> {clase.codigo}</td>
                                                <td className="px-6 py-4"> {clase.numeroCuenta}</td>
                                                <td className="px-6 py-4"> {clase.tipo}</td>
                                                <td className="px-6 py-4">{clase.descripcion}</td>
                                                <td className="px-6 py-4">{clase.estado}</td>
                                                <td className="px-6 py-4">{clase.dictamen}</td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        disabled={clase.estado == 'Finalizada' ? true : false}
                                                        type="button"
                                                        onClick={() => dictaminar(clase.codigo, 1)}
                                                        className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    >
                                                        Aprobar
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        disabled={clase.estado == 'Finalizada' ? true : false}
                                                        type="button"
                                                        onClick={() => dictaminar(clase.codigo, 0)}
                                                        className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                                    >
                                                        Denegar
                                                    </button>
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

export default SolicitudesPendientes