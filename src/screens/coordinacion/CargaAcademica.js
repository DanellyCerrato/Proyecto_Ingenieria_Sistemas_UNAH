import React, { useEffect, useState } from 'react'
import { CardC } from '../../components/CardC'
import { NavLink } from 'react-router-dom'
import PaginacionC from '../../components/PaginacionC'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CargaAcademica = () => {

  const { handleSubmit, errors, touched, getFieldProps, initialStatus, resetForm } = useFormik({
    initialValues: {
      buscar: ''
    },
    onSubmit: (values) => {
      console.log(values);


    },
    validationSchema: Yup.object({
      buscar: Yup.string()
    })
  });


  const [data, setData] = useState([])

  const clases = [
    {
      codigo: 'IS920',
      clase: 'Programacion 2',
      seccion: '1400',
      docente: 'Erick Marin',
      estudiantes: 12,
      cupos: 15,
      Edificio: 'B2',
      aula: '2'
    }
  ]

  useEffect(() => {
    setData(clases)


  }, [])


  return (

    <div>
      <h3 className='font-bold mb-10' >LISTADO DE CLASES</h3>

      <form onSubmit={handleSubmit} >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            {...getFieldProps('buscar')}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar clase"
            required=""
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>
        </div>
        {touched.buscar && errors.buscar && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.buscar}</span>}
      </form>

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
                    Clase
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Seccion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Docente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estudiantes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cupos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edificio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aula
                  </th>
                </tr>
              </thead>
              <tbody>

                {
                  data.map((clase, key) => {
                    return (
                      <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4"> {clase.codigo}</td>
                        <td className="px-6 py-4"> {clase.clase}</td>
                        <td className="px-6 py-4"> {clase.seccion}</td>
                        <td className="px-6 py-4">{clase.docente}</td>
                        <td className="px-6 py-4">{clase.estudiantes}</td>
                        <td className="px-6 py-4">{clase.cupos}</td>
                        <td className="px-6 py-4">{clase.Edificio}</td>
                        <td className="px-6 py-4">{clase.aula}</td>
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

export default CargaAcademica