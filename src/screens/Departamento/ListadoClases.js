import React, { useEffect, useState } from 'react'
import { CardC } from '../../components/CardC'
import { NavLink } from 'react-router-dom'
import PaginacionC from '../../components/PaginacionC'

const ListadoClases = () => {

  const [data, setData] = useState([])

  const clases = [
    {
      codigo: 'IS920',
      nombre: 'Programacion 2',
      departamento: 'Ingenieria',
      Unidades: 5,
      Secciones: 2,
    },
    {
      codigo: 'ES08',
      nombre: 'Español 2',
      departamento: 'Letras',
      Unidades: 3,
      Secciones: 5,
    }
  ]

  useEffect(() => {
    setData(clases)


  }, [])


  return (

    <div>
      <h3 className='font-bold mb-10' >LISTADO DE CLASES</h3>
      <NavLink to={'/departamento/nueva-clase'}>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nuevo</button>
      </NavLink>

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
                    Secciones
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unidades V.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
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
                        <td className="px-6 py-4">{clase.Secciones}</td>
                        <td className="px-6 py-4">{clase.Unidades}</td>
                        <td className="px-6 py-4">
                          <NavLink to={'/departamento/secciones/'+ clase.codigo} >
                            <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-gren-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                              Detalle
                            </button>
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

export default ListadoClases