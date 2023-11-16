import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const Cambio = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            contrasena: '',
            contrasenaNueva: ''
        },
        onSubmit: (values) => {
            console.log(values);

            success()
        },
        validationSchema: Yup.object({
            contrasena: Yup.string()
                .required('Requerido'),
            contrasenaNueva: Yup.string()
                .required('Requerido'),
        }),


    });

    const success = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Contraseña cambiada con éxito",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className='max-w-md' >
            <label
                htmlFor="first-name"
                className="block text-lg font-semibold leading-6 text-gray-900 p-5">Restablecer contraseña
            </label>

            <form onSubmit={handleSubmit} >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Contraseña anterior
                    </label>
                    <input
                        {...getFieldProps('correo')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type='password'
                    />
                    {touched.contrasena && errors.contrasena && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.contrasena}</span>}

                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Contraseña nueva
                    </label>
                    <input
                        {...getFieldProps('contrasenaNueva')}
                        type='password'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {touched.contrasenaNueva && errors.contrasenaNueva && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.contrasenaNueva}</span>}

                </div>
                <button
                    type="submit"
                    className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Guardar

                </button>
            </form>

        </div>
    )
}

export default Cambio
