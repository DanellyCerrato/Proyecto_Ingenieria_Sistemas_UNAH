import { useFormik } from 'formik'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const Planificacion = () => {
  const [buscar, setBuscar] = useState(false)
  const [setBuscarC] = useState(false)
  const [docentte, setDocentte] = useState("")

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (values) => {
      console.log(values);

      setBuscar(true);

      guardar()

    },
    validationSchema: Yup.object({
      search: Yup.string()
        .required('Codigo de empleado es obligatorio')
    })
  });

  const onCancel = () => {
    setBuscar(false);
    setDocentte("")
  }

  const guardar = () => {
    Swal.fire({
      title: '¿Quieres continuar?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Registro exitoso!', '', 'success')

        setBuscarC(false)
        setDocentte("")

      } else if (result.isDenied) {
        Swal.fire('Operacion cancelada', '', 'info')
      }
    })
  }

  return (

    <div>

      <h3 className='font-bold mb-8' >Busqueda del docente</h3>

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
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Numero de empleado"
            {...getFieldProps('search')}
          />
          <button
            placeholder='8736736'
            type="submit"
            
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar docente
          </button>
        </div>
        {touched.search && errors.search && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.search}</span>}
      </form>

      {
        docentte.length > 0 &&
        <div className='mt-10' >
          <h3 className='font-bold mb-10' >Docente seleccioado {docentte} </h3>

          <form className='mt-5 mb-15'>
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
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Codigo de clase"
                required=""
              />
              <button
                onClick={() => setBuscarC(true)}
                type="button"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buscar clase
              </button>
            </div>
          </form>
        </div>
      }

      <div className='mt-10' >
        {
          buscar && (
            <>
              <h3 className='font-bold mb-10' >Resultados</h3>

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
                        Actiones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Juan Sanabria
                      </th>
                      <td className="px-6 py-4">1545711</td>
                      <td className="px-6 py-4">UNAH</td>
                      <td className="px-6 py-4">
                        <NavLink to={'/docente/clases/' + 445741} >
                          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Seleccionar</button>

                        </NavLink>
                        <button onClick={onCancel} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                          Cancelar
                        </button>
                      </td>
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

export default Planificacion