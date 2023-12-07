import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Matricula = () => {

  const [matricula, setMatricula] = useState(false);
  const [evaluaciones, setEvaluaciones] = useState(false);
  const [calendario, setCalendario] = useState([]);


  const calendarioData = [
    {
      id: 1,
      fecha: '17 Enero',
      horario: '09:00',
      descripcion: 'Excelencia academica'
    }
  ]

  useEffect(() => {
    setCalendario(calendarioData)
  }, [])

  const eliminar = (id) => {
    console.log(id)
  }

  return (
    <div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white border border-gray-200 md:grid-cols-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Proceso de matricula
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Mediante este módulo podrá activar y desactivar el proceso de matrícula de los estudiantes
          </p>
          <button
            type='button'
            onClick={() => setMatricula(!matricula)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {matricula ? 'Inabilitar' : 'Habilitar'}
          </button>
        </div>

        <div className="p-6 bg-white border border-gray-200 md:grid-cols-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ingreso de notas
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Mediante este módulo podrá activar y desactivar el proceso de ingreso de notas
          </p>
          <button
            onClick={() => setEvaluaciones(!evaluaciones)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {evaluaciones ? 'Inabilitar' : 'Habilitar'}
          </button>
        </div>
      </div>

      <div>
        <h5 className="mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Calendario
        </h5>

        <NavLink to={'/nuevo-calendario/'} >
          <button type="button"
            className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Nuevo
          </button>
        </NavLink>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  Estudiantes
                </th>
                <th scope="col" className="px-6 py-3">
                  Modificar
                </th>
                <th scope="col" className="px-6 py-3">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {
                calendario.map((item) => {
                  return (
                    <tr key={item.fecha} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4"> {item.fecha}</td>
                      <td className="px-6 py-4">{item.horario}</td>
                      <td className="px-6 py-4">{item.descripcion}</td>
                      <td className="px-6 py-4">
                        <NavLink to={'/modificar-calendario/' + item.id} >
                          <button
                            disabled={matricula}
                            type="button"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Editar
                          </button>
                        </NavLink>
                      </td>
                      <td className="px-6 py-4">
                        <button disabled={matricula}
                          type="button"
                          onClick={() => eliminar(item.id)}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                          Elminar
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>








    </div>
  )
}

export default Matricula