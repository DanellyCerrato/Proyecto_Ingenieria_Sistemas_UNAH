import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Solictudes = ({isNumeroCuenta}) => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      opcion: '',
      descripcion: ''

    },
    onSubmit: (values) => {
      console.log(values);
      success()
    },
    validationSchema: Yup.object({
      opcion: Yup.string()
        .required('Tipo de solicitud es obligatoria '),
      descripcion: Yup.string()
        .required('La descripción es requerida'),
    })
  });

  const success = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Solicitud enviada con exito",
      showConfirmButton: false,
      timer: 1500
    });
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-4xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Seleccionar clase
            </label>
            <div className="mt-2.5">
              <select
                {...getFieldProps('opcion')}
                className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value={0} >Seleccione una opcion</option>
                <option value={1} >Cambio de carrera</option>
                <option value={2} >Cancelaciones excepcionales</option>
                <option value={3} >Cambio de centro</option>
                <option value={4} >Pago de reposición</option>
              </select>
            </div>
            {touched.opcion && errors.opcion && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.opcion}</span>}
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Descripcion
            </label>
            <div className="mt-2.5">
              <textarea
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...getFieldProps('descripcion')}

              />
            </div>
            {touched.descripcion && errors.descripcion && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.descripcion}</span>}
          </div>
        </div>
        <div className="mt-10">
          <button  type="submit" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
        </div>
      </form >

      <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
        <label
          htmlFor="clases"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Solicitudes anteriores
        </label>
        <div className="mt-8">

          <table className="w-full  text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Numero
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipo
                </th>
                <th scope="col" className="px-6 py-3">
                  Dictamen
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody className='text-center' >
              <tr>
                <td>SOL-00001</td>
                <td>Cambio de carrera</td>
                <td>
                  Favorable
                </td>
                <td>
                  20-11-2022
                </td>
              </tr>
              <tr>
                <td>SOL-00002</td>
                <td>Pago reposicion</td>
                <td>
                  Favorable
                </td>
                <td>
                  20-10-2022
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Solictudes
