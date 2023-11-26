import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Presentacion = () => {

  const [path, setPath] = useState("https://www.youtube.com/embed/08WtLzBwZSQ?si=QAgQvy4xKwdmiQHi");
  const [descripcion, setDescripcion] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.");

  const success = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Video actualizado con éxito",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues: {
      path: '',
      descripcion: ''
    },
    onSubmit: (values) => {
      console.log(values);

      setPath(values.path)
      setDescripcion(values.descripcion)

      success()

      //limpar el formulario
      resetForm()

    },
    validationSchema: Yup.object({
      path: Yup.string()
        .required('Requerido'),
      descripcion: Yup.string()
        .required('Requerido')
    })
  });



  return (
    <div className='mt-10 container-sm'>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div className='flex justify-center'>
              <iframe width="560" height="315" src={path} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <br></br>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Descripción
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {descripcion}
            </p>

          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Modificar Video
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Direccion de video
                </label>
                <input
                  type="text"
                  placeholder='Ingrese una url valida'
                  {...getFieldProps('path')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                {touched.path && errors.path && <span className='mb-4 text-sm text-red-900'>{errors.path}</span>}
              </div>
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                <textarea
                  {...getFieldProps('descripcion')}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese una descripcion del video"
                />
                {touched.descripcion && errors.descripcion && <span className='mb-4 text-sm text-red-900'>{errors.descripcion}</span>}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Actualizar
              </button>
            </form>
          </div>

        </Grid>
      </Grid>

    </div>
  )
}

export default Presentacion
