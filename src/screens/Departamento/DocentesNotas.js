import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CardC } from '../../components/CardC'
import PaginacionC from '../../components/PaginacionC'

const DocentesNotas = () => {


    const { docente } = useParams()

    const [data, setData] = useState([])

    const clases = [
        {
            codigo: 'IS920',
            nombre: 'Programacion 2',
            departamento: 'Ingenieria',
            nota: 88,
            observacion: 'APROBO',
            periodo : '1 PAC 2020'
        },
        {
            codigo: 'ES08',
            nombre: 'Español 2',
            departamento: 'Letras',
            nota: 66,
            observacion: 'APROBO',
            periodo : '2 PAC 2020'
        }
    ]

    useEffect(() => {
        setData(clases)


    }, [])


    return (

        <div>
            <h3 className='font-bold mb-10' >LISTADO DE CLASES CALIFICADAS POR EL DOCENTE</h3>
            {
                data.length === 0 &&
                (
                    <div className='flex justify-center'  >
                        <CardC mensaje={'No tiene clases registrados'} />
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
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Departamento
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nota
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Observacion
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Periodo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((clase, key) => {
                                        return (
                                            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4"> {clase.codigo}</td>
                                                <td className="px-6 py-4"> {clase.nombre}</td>
                                                <td className="px-6 py-4">{clase.departamento}</td>
                                                <td className="px-6 py-4">{clase.nota}</td>
                                                <td className="px-6 py-4">{clase.observacion}</td>
                                                <td className="px-6 py-4">{clase.periodo}</td>                                                
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

export default DocentesNotas