import React from 'react'

export const Notas = () => {
    return (
        <div>
            <div>
                <label
                    htmlFor="first-name"
                    className="block text-lg font-semibold leading-6 text-gray-900 p-5">Revision de notas
                </label>
            </div>

            <div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg">
                                    Docente
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Asignatura
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Secccion
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Centro
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-e-lg">
                                    APR/REP
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-e-lg">
                                    Evaluar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Aura Juarez
                                </th>
                                <td className="px-6 py-4">Matematica 1</td>
                                <td className="px-6 py-4">1600</td>

                                <td className="px-6 py-4">UNAH</td>
                                <td className="px-6 py-4">ND</td>
                                <td className="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Evaluar</button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
