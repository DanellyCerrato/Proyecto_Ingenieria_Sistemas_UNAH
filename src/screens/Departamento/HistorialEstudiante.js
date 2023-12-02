import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';


const HistorialEstudiante = () => {

  const dataEstudiante = [
    {
      identidad: '0801199645321',
      nombre: 'Juan Manuel',
      apellido: 'Rodriguez',
      carreraPrimaria: '	Infomatica adm.'
    },
    {
      identidad: '0801199645322',
      nombre: 'Pedro Miguel',
      apellido: 'Juarez',
      carreraPrimaria: 'ING. en sistemas'
    },
  ]


  const { handleSubmit, errors, touched, getFieldProps, initialStatus, resetForm } = useFormik({
    initialValues: {
      buscar: ''
    },
    onSubmit: (values) => {
      console.log(values);

      if (values.buscar == '' || values.buscar.length == 0) {
        setEstudiante(dataEstudiante)
        return
      }
      setEstudiante(dataEstudiante.filter(e => e.identidad == values.buscar))

    },
    validationSchema: Yup.object({
      buscar: Yup.string().matches('^\\d{13}$', 'Formato invalido'),
    })
  });

  const [estudiante, setEstudiante] = useState([])

  useEffect(() => {
    setEstudiante(dataEstudiante)
  }, [])

  const reset = () => {

    resetForm();
    setEstudiante(dataEstudiante)

  }


  return (
    <div>

      <h3 className='font-bold mb-10' >HISTORIAL DEL ESTUDIANTE</h3>

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
            placeholder="Buscar estudiante"
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

      <div className='mt-5' >
        {
          estudiante.length == 0 && <p>No se encontaron resultados</p>
        }
        {
          estudiante.length > 0 &&
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
                  <th scope="col" className="px-6 py-3">
                    Evaluaciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  estudiante.map((item, key) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.identidad}
                        </th>
                        <td className="px-6 py-4">{item.nombre}</td>
                        <td className="px-6 py-4">{item.apellido}</td>
                        <td className="px-6 py-4">{item.carreraPrimaria}</td>
                        <td className="px-6 py-4">
                          <NavLink to={'/departamento/historial-estudiantes/'+ item.identidad +'/clases'}>
                            <button
                              type="button"
                              className="rounded-md mt-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Historial
                            </button>
                          </NavLink>
                        </td>
                        <td className="px-6 py-4">
                          <NavLink to={'/departamento/historial-estudiantes/'+ item.identidad +'/clases'}>
                            <button
                              type="button"
                              className="rounded-md mt-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Evaluaciones
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
        }

        <button
          type="button"
          onClick={reset}
          className="rounded-md mt-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}

export default HistorialEstudiante