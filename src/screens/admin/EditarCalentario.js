import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const EditarCalentario = () => {

    const { dia } = useParams();

    console.log(dia)

    const [diaSeleccionado, setdiaSeleccionado] = useState(0)

    useEffect(() => {
        setdiaSeleccionado(dia);
    }, [])

    const success = (msg) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: msg,
            showConfirmButton: false,
            timer: 1500
        });
    }

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            fecha: '',
            hora: '',
            descripcion: '',
            id: dia
        },
        onSubmit: (values) => {
            console.log(values);
            success('Horario modificado con éxito')
        },
        validationSchema: Yup.object({
            fecha: Yup.string()
                .required('Requerido'),
            hora: Yup.string()
                .required('Requerido'),
            descripcion: Yup.string()
                .required('Requerido')
        })
    });


    return (
        <div className='mt-10'>
            <>
                <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white text-center mb-5 mt-5"
                >
                    Modificar fecha
                </label>

                {/* Hello world */}
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Fecha
                        </label>
                        <input
                            type="date"
                            {...getFieldProps('fecha')}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        />
                        {touched.fecha && errors.fecha && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.fecha}</span>}
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Hora
                        </label>
                        <input
                            type="time"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...getFieldProps('hora')}
                        />
                        {touched.hora && errors.hora && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.hora}</span>}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="repeat-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Descripcion
                        </label>
                        <textarea
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            rows='4'
                            {...getFieldProps('descripcion')}
                        />
                        {touched.descripcion && errors.descripcion && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.descripcion}</span>}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Guardar
                    </button>
                    <NavLink to={'/matricula'}>
                        <button type="button" class="ml-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Cancelar
                        </button>
                    </NavLink>
                </form>
            </>



        </div>
    )
}

export default EditarCalentario