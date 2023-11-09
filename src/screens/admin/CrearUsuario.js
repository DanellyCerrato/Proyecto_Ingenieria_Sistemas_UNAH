import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom'


const CrearUsuario = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      centro: '',
      codigo: '',
      foto: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Requerido'),
      apellido: Yup.string()
        .required('Requerido'),
      centro: Yup.string()
        .required('Requerido').min(2, 'Requerido'),
      codigo: Yup.string()
        .required('Requerido'),
      foto: Yup.mixed().required('La foto es requerida')
    })
  });


  return (
    <form onSubmit={handleSubmit} >
      <div className="space-y-16">
        <div className="border-b border-gray-900/10 pb-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Usuario Nuevo</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Ingresar la informacion correspodiente para registrar un nuevo docente</p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...getFieldProps('nombre')}
                />
                {touched.nombre && errors.nombre && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.nombre}</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...getFieldProps('apellido')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {touched.apellido && errors.apellido && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.apellido}</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Centro que pertenece
              </label>
              <div className="mt-2">
                <select
                  defaultValue={"0"}
                  {...getFieldProps('centro')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="0">Seleccione un centro</option>
                  <option value="Unah" >Unah</option>
                  <option value="Canada" >Canada</option>
                  <option value="Mexico" >Mexico</option>
                </select>
              </div>
              {touched.centro && errors.centro && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.centro}</span>}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Codigo de empleado
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...getFieldProps('codigo')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {touched.codigo && errors.codigo && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.codigo}</span>}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-3">

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Foto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="foto"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input {...getFieldProps('foto')} id="foto" name="foto" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {touched.foto && errors.foto && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.foto}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <NavLink to={'/usuarios'} >
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
        </NavLink>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Guardar
        </button>
      </div>
    </form>

  )
}

export default CrearUsuario
