import React from 'react'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const DetalleDocente = () => {

  const reinicia = (codigo) => {

    success('Clave reiniciada con exito')
  }

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

      <h3 className='font-bold mb-8' >LISTADO DE DOCENTES</h3>

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
                Centro
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
              <th scope="col" className="px-6 py-3">
                Detalle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                0801199645321
              </th>
              <td className="px-6 py-4">Juan Manuel</td>
              <td className="px-6 py-4">Rodriguez</td>
              <td className="px-6 py-4">UNAH</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => reinicia(1)}
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reiniciar Clave
                </button>
              </td>
              <td className="px-6 py-4">
                <NavLink to={'/departamento/detalle-docente/'+ 1 +'/notas'} >
                  <button
                    type="button"
                    className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Detalle
                  </button>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
  )
}
 
export default DetalleDocente