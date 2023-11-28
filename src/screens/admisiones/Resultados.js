import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import notificacion from '../../utils/notificacion';

const Resultados = () => {
  const [buscar, setBuscar] = useState(false)
  const [id, setId] = useState(false)

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: async (values) => {
      const response = await fetch('http://127.0.0.1:8000/api/admision/resultados/'+values.search);
      const data = await response.json();
      console.log(data)
      setBuscar(data);
      setId(values.search)
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .required('Requerido')
        .max(13, 'Formato de identidad no valido')
        .min(12, 'Formato de identidad no valido')
    })
  });


  return (
    <div>

      <h3 className='font-bold mb-8' >Busqueda de estdudiantes</h3>

      <form onSubmit={handleSubmit} className='mt-5 mb-15'>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            id="search"
            placeholder='0801199532455'
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...getFieldProps('search')}
          />

          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>

        </div>
        {touched.search && errors.search && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.search}</span>}
      </form>

      <div className='mt-10' >
        {

          (buscar && !errors.identidad) && (
            <>
              <h3 className='font-bold mb-10' >Resultados</h3>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        identidad
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Carrera
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Resultado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {id}
                      </th>
                      <td className="px-6 py-4">{buscar.carrera1}</td>
                      <td className="px-6 py-4">{buscar.nota1 == true ? 'Aprobado' : 'Reprobado'}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {id}
                      </th>
                      <td className="px-6 py-4">{buscar.carrera2}</td>
                      <td className="px-6 py-4">{buscar.nota2 == true ? 'Aprobado' : 'Reprobado'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Resultados
