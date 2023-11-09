import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registro = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            carreraPrimaria: '0',
            carreraSecundaria: '0',
            identidad: '',
            telefono: '',
            correoPersonal: '',
            correoRegional: '',
            foto: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('Requerido'),
            apellido: Yup.string()
                .required('Requerido'),
            carreraPrimaria: Yup.string()
                .required('Requerido'),
            carreraSecundaria: Yup.string()
                .required('Requerido'),
            identidad: Yup.string()
                .required('Requerido'),
            telefono: Yup.string()
                .required('Requerido'),
            correoPersonal: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
            correoRegional: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
            foto: Yup.mixed().required('La foto es requerida')
        })
    });

    return (

        <section className="bg-white dark:bg-gray-900" >
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Agregar nuevo estudiante
                </h2>
                <form onSubmit={handleSubmit} >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nombre
                            </label>
                            <input
                                {...getFieldProps('nombre')}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ingrese el nombre"
                            />
                            {touched.nombre && errors.nombre && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.nombre}</span>}
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Apellidos
                            </label>
                            <input
                                type="text"
                                {...getFieldProps('apellido')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ingrese el apellido"
                            />
                            {touched.apellido && errors.apellido && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.apellido}</span>}

                        </div>
                        <div>
                            <label
                                htmlFor="carrera1"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Carrera primaria
                            </label>
                            <select
                                defaultValue={"0"}
                                {...getFieldProps('carreraPrimaria')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value="0">Seleccione una carrera</option>
                                <option value="1">Carrerra 1</option>
                                <option value="2">Carrerra 2</option>
                                <option value="3">Carrerra 3</option>
                                <option value="4">Carrerra 4</option>
                            </select>
                            {touched.carreraPrimaria && errors.carreraPrimaria && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.carreraPrimaria}</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="carrera2"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Carrera secundaria
                            </label>
                            <select
                                defaultValue={"0"}
                                {...getFieldProps('carreraSecundaria')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value="0">Seleccione una carrera</option>
                                <option value="1">Carrerra 1</option>
                                <option value="2">Carrerra 2</option>
                                <option value="3">Carrerra 3</option>
                                <option value="4">Carrerra 4</option>
                            </select>
                            {touched.carreraSecundaria && errors.carreraSecundaria && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold' >{errors.carreraSecundaria}</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="identidad"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Numero de identidad
                            </label>
                            <input
                                type="number"
                                name="item-weight"
                                {...getFieldProps('identidad')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="08011574859"
                                required=""
                            />
                            {touched.identidad && errors.identidad && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold' >{errors.identidad}</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="telefono"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Telefono
                            </label>
                            <input
                                type="number"
                                {...getFieldProps('telefono')}
                                id="item-weight"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder={245784745}
                                required=""
                            />
                            {touched.telefono && errors.telefono && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.telefono}</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="correoPersonal"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Correo personal
                            </label>
                            <input
                                type="email"
                                {...getFieldProps('correoPersonal')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder={'correo@correo.com'}
                            />
                            {touched.correoPersonal && errors.correoPersonal && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.correoPersonal}</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="correo2"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Centro regional
                            </label>
                            <input
                                type="email"
                                {...getFieldProps('correoRegional')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder={'correo@correo.com'}
                            />
                            {touched.correoRegional && errors.correoRegional && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold'>{errors.correoRegional}</span>}
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Foto</label>
                            <input {...getFieldProps('foto')}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file" />
                            {touched.foto && errors.foto && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold0'>{errors.foto}</span>}
                        </div>

                    </div>
                    <div className="mt-8 flex items-center gap-x-6">
                        <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Guardar
                        </button>
                        <NavLink to={'/admisiones'} >
                            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Cancelar
                            </button>
                        </NavLink>

                    </div>
                </form>
            </div >
        </section >

    )
}

export default Registro
