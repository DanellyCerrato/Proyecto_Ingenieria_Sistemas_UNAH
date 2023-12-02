import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const RegistrarClase = () => {

  const { handleSubmit, errors, touched, getFieldProps, resetForm, initialValues } = useFormik({
    initialValues: {
      codigo: '',
      nombre: '',
      departamento: '',
      uv: '',
    },
    onSubmit: (values) => {
      console.log(values);

      success('Clase agregada con éxito');

      resetForm()
    },
    validationSchema: Yup.object({
      codigo: Yup.string()
        .required('Requerido'),
      nombre: Yup.string()
        .required('Requerido'),
      departamento: Yup.string()
        .required('Requerido'),
      uv: Yup.number()
        .required('Requerido')
        .max(5, 'El cupo maximo es de 5')
        .min(2, 'El cupo minimo es de 2')
    })
  });

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
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese un nombre"
            required=""
            {...getFieldProps('nombre')}

          />
          {touched.nombre && errors.nombre && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.nombre}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Codigo
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese el codigo"
            {...getFieldProps('codigo')}

          />
          {touched.codigo && errors.codigo && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.codigo}</span>}
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Unidades Valorativas
          </label>
          <input
            {...getFieldProps('uv')}
            type="number"
            placeholder='Ingrese las unidades valorativas'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {touched.uv && errors.uv && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.uv}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Departamento
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...getFieldProps('departamento')}
          >
            <option value="0" selected>Seleccioné un departamento</option>
            <option value="letras">Letras</option>
            <option value="ingenieria">Ingenieria</option>
          </select>
          {touched.departamento && errors.departamento && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.departamento}</span>}
        </div>

        <button
          type="submit"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar
        </button>
      </form>

    </div>
  )
}

export default RegistrarClase