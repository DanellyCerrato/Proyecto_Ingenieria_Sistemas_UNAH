import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Perfil = () => {
  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={6} md={6} lg={6}>
          <div className="flex justify-center px-4 pt-4">
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Carrera
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              895
            </span>
            <div className="flex mt-4 md:mt-6">
              <NavLink
                to={'/estudiantes/restablecer'}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Restablecer contraseña
              </NavLink>
            </div>
            <div className="flex mt-4 md:mt-6">
              <NavLink to={'/estudiantes/cambio'} >
                <button
                  
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Cambiar contraseña
                </button>
              </NavLink>

            </div>
          </div>
        </Grid>


        <Grid item xs={6} md={6} lg={6}>
          <label
            htmlFor="first-name"
            className="block text-lg font-semibold leading-6 text-gray-900 p-5"
          >
            Informacion personal
          </label>

          <div className="relative overflow-x-auto p-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Nombre
                  </th>
                  <td className="px-6 py-4">Juan Miguel</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Identidad
                  </th>
                  <td className="px-6 py-4">0801118895478</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Carrera
                  </th>
                  <td className="px-6 py-4">Psicologia</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Centro
                  </th>
                  <td className="px-6 py-4">UNAH</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Direccion
                  </th>
                  <td className="px-6 py-4">Colonia las colinas</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Correo
                  </th>
                  <td className="px-6 py-4">correo@correo.com</td>

                </tr>

              </tbody>

            </table>
          </div>

        </Grid>

      </Grid>
    </div >
  )
}

export default Perfil
