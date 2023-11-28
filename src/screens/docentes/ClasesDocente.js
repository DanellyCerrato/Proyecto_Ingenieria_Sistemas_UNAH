import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const ClasesDocente = () => {
    const handleDownload = (clase) => {

        // REALIZAR LA PETICION AL SERVIDOR por la clase
        
        const data = [
            { NumeroCuenta: '201548781', Nombre: 'Juan', Apellido: 25, Edad: 25, Ciudad: 'Buenos Aires' },
            { NumeroCuenta: '201548782', Nombre: 'María', Apellido: 25, Edad: 30, Ciudad: 'Córdoba' },
        ];

       const fileName = 'listado'

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        FileSaver.saveAs(excelBlob, `${fileName}-${clase}.xlsx`);
    };

    return (
        <div className='p-5'>

            <h3 className='font-bold mb-10' >Clases matriculadas</h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Codigo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seccion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Incio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora Fin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                IS920
                            </th>
                            <td className="px-6 py-4">Sistemas expertos</td>
                            <td className="px-6 py-4">1701</td>
                            <td className="px-6 py-4">1700</td>
                            <td className="px-6 py-4">1800</td>
                            <td className="px-6 py-4">
                                <button
                                    className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                                    onClick={() => handleDownload('IS920')}>
                                    Listado
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClasesDocente
