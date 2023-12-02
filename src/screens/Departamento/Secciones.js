import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2';

const Secciones = () => {

  const { clase } = useParams()
  const [secciones, setSecciones] = useState([])
  const [seccion, setSeccion] = useState(null)
  const [editar, setEditar] = useState(false)
  const [cancelar, setCancelar] = useState(false)

  const seccionesData = [
    {
      codigo: 1,
      clase: 'ES08',
      docente: 'Juan Perez',
      horaInicio: '1100',
      horaFin: '1200',
      edificio: 'F1',
      aula: '300',
      cupos: 25
    },
    {
      codigo: 2,
      clase: 'IS920',
      docente: 'Erick Marin',
      horaInicio: '1700',
      horaFin: '1800',
      edificio: 'B2',
      aula: '201',
      cupos: 25
    },
    {
      codigo: 3,
      clase: 'IS920',
      docente: 'Erick Marin',
      horaInicio: '1300',
      horaFin: '1400',
      edificio: 'B2',
      aula: '202',
      cupos: 15
    }
  ]

  const { handleSubmit, errors, touched, getFieldProps, resetForm, initialValues } = useFormik({
    initialValues: {
      clase: clase,
      horaInicio: '',
      horaFin: '',
      docente: '',
      edificio: '',
      aula: '',
      cupos: '',
      justificacion: '',
    },
    onSubmit: (values) => {
      console.log(values);

      if (editar) {
        // realizar peticion
        success('Seccion actualizada con exito')
        setEditar(false)
        return;
      }

      // Guardar
      success('Seccion guardada con exito')


      resetForm()
    },
    validationSchema: Yup.object({
      clase: Yup.string()
        .required('Requerido'),
      horaInicio: Yup.number()
        .required('Requerido'),
      horaFin: Yup.number()
        .required('Requerido'),
      docente: Yup.string()
        .required('Requerido'),
      edificio: Yup.string()
        .required('Requerido'),
      aula: Yup.number()
        .required('Requerido'),
      cupos: Yup.number()
        .required('Requerido')
        .max(30, 'El cupo maximo es de 30')
        .min(10, 'El cupo minimo es de 10'),
      justificacion: Yup.string()
        .optional()
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

  const acciones = (codigo) => {
    setEditar(true)

    initialValues.horaFin = secciones.filter(c => c.codigo == codigo)[0].horaFin;
    initialValues.horaInicio = secciones.filter(c => c.codigo == codigo)[0].horaInicio;
    initialValues.edificio = secciones.filter(c => c.codigo == codigo)[0].edificio;
    initialValues.cupos = secciones.filter(c => c.codigo == codigo)[0].cupos;
    initialValues.docente = secciones.filter(c => c.codigo == codigo)[0].docente;
    initialValues.aula = secciones.filter(c => c.codigo == codigo)[0].aula;

    setSeccion(secciones.filter(c => c.codigo == codigo)[0].codigo)
  }

  useEffect(() => {
    setSecciones(seccionesData.filter(c => c.clase == clase));
  }, [])


  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={8}>

          {
            secciones.length == 0 &&
            <div className='text-center' >
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No tienes secciones agregadas
              </label>
            </div>
          }

          {
            secciones.length > 0 &&
            <>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Codigo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Docente
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Hora Inicio
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Hora Fin
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Edificio
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Aula
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cupos
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Acciones
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Lista en espera
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      secciones.map((item, key) => {
                        return (
                          <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"> {item.clase}</td>
                            <td className="px-6 py-4">{item.docente}</td>
                            <td className="px-6 py-4"> {item.horaInicio}</td>
                            <td className="px-6 py-4">{item.horaFin}</td>
                            <td className="px-6 py-4">{item.edificio}</td>
                            <td className="px-6 py-4">{item.aula}</td>
                            <td className="px-6 py-4">{item.cupos}</td>
                            <td className="px-6 py-4">
                              <button type="button"
                                className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-gren-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                onClick={() => acciones(item.codigo)}
                              >
                                Detalle
                              </button>
                            </td>
                            <td className="px-6 py-4">
                              <NavLink to={'/departamento/secciones/' + item.clase + '/lista-espera'}>
                                <button type="button"
                                  className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-gren-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Lista
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
            </>
          }
        </Grid>
        <Grid item xs={4}>
          <>
            {/* Hello world */}
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hora Inicio
                </label>
                <input
                  {...getFieldProps('horaInicio')}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1600"
                />
                {touched.horaInicio && errors.horaInicio && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.horaInicio}</span>}
              </div>

              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hora Fin
                </label>
                <input
                  {...getFieldProps('horaFin')}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1600"
                />
                {touched.horaFin && errors.horaFin && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.horaFin}</span>}
              </div>

              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Docente
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...getFieldProps('docente')}
                >
                  <option value="0" selected>Seleccioné un docente</option>
                  <option value="Erick Marin">Erick Marin</option>
                  <option value="Juan Perez">Juan Perez</option>
                </select>
                {touched.docente && errors.docente && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.docente}</span>}

              </div>

              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Edificio
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...getFieldProps('edificio')}
                >
                  <option value="0" selected>Seleccioné un edificio</option>
                  <option value="B2">B2</option>
                  <option value="F1">F1</option>
                  <option value="J1">J1</option>
                  <option value="B2">B2</option>
                </select>
                {touched.edificio && errors.edificio && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.edificio}</span>}

              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Aula
                </label>
                <input
                  {...getFieldProps('aula')}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="201"
                />
                {touched.aula && errors.aula && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.aula}</span>}

              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cupos
                </label>
                <input
                  {...getFieldProps('cupos')}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="15"
                />
                {touched.cupos && errors.cupos && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.cupos}</span>}

              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Justificacion
                </label>
                <input
                  {...getFieldProps('justificacion')}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese una Justificacion"
                />
                {touched.justificacion && errors.justificacion && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.justificacion}</span>}

              </div>
              {
                !editar ? (
                  <button
                    type="submit"
                    className="px-3 mr-5 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Guardar
                  </button>
                ) : (
                  <div className='mt-5'>
                    <button
                      type="submit"
                      className="px-3 py-2 mr-5 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                    >
                      Modificar
                    </button>
                    <button
                      type='submit'
                      className="px-3 py-2 mr-5 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      Cancelar
                    </button>
                  </div>
                )

              }

            </form>
          </>

        </Grid>
      </Grid>
    </div>
  )


}

export default Secciones