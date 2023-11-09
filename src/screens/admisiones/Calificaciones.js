import React, { useState } from 'react';
import Papa from 'papaparse';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


const Calificaciones = () => {


    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

    };

    const agregarNotas = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Notas Guardadas con exito",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleFileSelected = () => {
        if (file) {
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (result) {
                    setData(result.data)
                },
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Archivo",
                text: "Debe de selccionar un archivo primero!"
            });
        }
    };

    return (
        <>
            <div>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Cargar notas
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Archivo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-300"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">
                                            CSV
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">

                                <div className="mt-4 flex items-center gap-x-6">
                                    <button type="button" onClick={handleFileSelected} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        Cargar notas
                                    </button>
                                    <NavLink to={'/admisiones'} >
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            Cancelar
                                        </button>
                                    </NavLink>

                                </div>

                                <div className="items-center w-full">

                                    {
                                        data.length > 0 &&
                                        <>
                                            <label
                                                htmlFor="photo"
                                                className="block text-sm font-medium leading-6 text-gray-900 mt-5 mb-5"
                                            >
                                                Resultados
                                            </label>

                                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3">
                                                                Identidad
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                tipo de examen
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                nota
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Descripcion
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            data.map((calificacion, index) => {
                                                                return (
                                                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                        <th
                                                                            scope="row"
                                                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                        >
                                                                            {calificacion.identidad}
                                                                        </th>
                                                                        <td className="px-6 py-4"> {calificacion.tipo}</td>
                                                                        <td className="px-6 py-4">{calificacion.nota}</td>
                                                                        <td className="px-6 py-4">
                                                                            {(calificacion.nota > 70) ? 'Aprobado' : 'Reprobado'}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="mt-4 flex items-center justify-end gap-x-6">

                                                <NavLink to={'/admisiones'} >
                                                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                        Cancelar
                                                    </button>
                                                </NavLink>
                                                <button onClick={agregarNotas} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                    Agregar
                                                </button>
                                            </div>
                                        </>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calificaciones
