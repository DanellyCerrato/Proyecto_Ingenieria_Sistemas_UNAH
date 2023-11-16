import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


const Matricula = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      clase: '',
      seccion: ''
    },
    onSubmit: (values) => {
      console.log(values);

      success()
    },
    validationSchema: Yup.object({
      clase: Yup.string()
        .required('La clase es obligatoria'),
      seccion: Yup.string()
        .required('La seccion es requerida'),
    })
  });

  const success = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }


  const cancelar = () => {

    Swal.fire({
        title: '¿uieres eliminar la clase?',
        showDenyButton: true,
        showCancelButton: true,
        icon: 'warning',
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Clase cancelada con exito!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Operacion cancelada', '', 'info')
        }
    })

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
            <div>
              <select
                {...getFieldProps('clase')}
                className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option  >Seleccione una clase</option>
                <option value={'Matematica 1'} >Matematica 1</option>
                <option value={'Prgramacion 1'} >Prgramacion</option>
                <option value={'Español'} >Español</option>
              </select>
            </div>
            {touched.clase && errors.clase && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.clase}</span>}

          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Sellecionar seccion
            </label>
            <div>
              <select
                {...getFieldProps('seccion')}
                className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option >Seleccione una seccion</option>
                <option value={1700} >1700</option>
                <option value={1600} >1600</option>
                <option value={1800} >1800</option>
              </select>
            </div>
            {touched.seccion && errors.seccion && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.seccion}</span>}
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Matricular
          </button>
        </div>
      </form>

      <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
        <label
          htmlFor="clases"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Clases Matriculadas
        </label>
        <div className="mt-2.5">

          <table className="w-full  text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Clase
                </th>
                <th scope="col" className="px-6 py-3">
                  Seccion
                </th>
                <th scope="col" className="px-6 py-3">
                  Cancelar
                </th>
              </tr>
            </thead>
            <tbody className='text-center' >
              <tr>
                <td>Matematica 1</td>
                <td>1600</td>
                <td>
                  <button  onClick={cancelar} type="submit" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancelar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>


  )
}

export default Matricula
