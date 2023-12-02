import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PaginacionC from '../../components/PaginacionC'
import { NavLink } from 'react-router-dom'
import { CardC } from '../../components/CardC'
import Swal from 'sweetalert2'

const Edificios = () => {

  const [data, setData] = useState([])

  const edificios = [
    {
      codigo: 'IS920',
      nombre: 'J2',
      departamento: 'Ingenieria'
    },
    {
      codigo: 'ES08',
      nombre: 'D1',
      departamento: 'Letras'
    }
  ]

  useEffect(() => {
    setData(edificios)


  }, [])

  const success = (msg) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500
    });
  }

  const eliminar = (codigo) => {


    console.log(codigo)

    success('Edificio eliminado con exito')


  }


  return (

    <div>
      <h3 className='font-bold mb-10' >LISTADO DE EDIFICIOS</h3>
      <NavLink to={'/departamento/nuevo-edificio'}>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nuevo</button>
      </NavLink>

      {
        data.length === 0 &&
        (
          <div className='flex justify-center'  >
            <CardC mensaje={'No tiene edificios registrados'} />
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
                        <td className="px-6 py-4">
                          <button
                            onClick={() => eliminar(clase.codigo)}
                            type="button"
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            Eliminar
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

export default Edificios