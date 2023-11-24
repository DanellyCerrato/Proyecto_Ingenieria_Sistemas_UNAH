
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import notificacion from '../../utils/notificacion';

const Registro = () => {

    const [carreras, setCarreras] = useState([]);
    const [centros, setCentros] = useState([]);
    const [submitting, setSubmitting] = useState(false)


    const fetchCarreras = async () => {
        try {
            const response = await fetch('https://unah-proyecto.onrender.com/api/carrera/listar');
            const data = await response.json();
            setCarreras(data);
        } catch (error) {
            console.error('Error al obtener datos de la API de carreras', error);
        }
    };
    const fetchCentros = async () => {
        try {
            const response = await fetch('https://unah-proyecto.onrender.com/api/centro/listar');
            const data = await response.json();
            setCentros(data);
        } catch (error) {
            console.error('Error al obtener datos de la otra API', error);
        }
    };

    useEffect(() => {
        fetchCarreras();
        fetchCentros();
    }, []);

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            carreraPrimaria: '',
            carreraSecundaria: '',
            identidad: '',
            telefono: '',
            correoPersonal: '',
            centro: '',
            foto: ''
        },
        onSubmit: async (values) => {
            try {

                const response = await axios.post('https://unah-proyecto.onrender.com/api/admision/crear', {
                    nombre: values.nombre,
                    apellidos: values.apellido,
                    identidad: values.identidad,
                    telefono: values.telefono,
                    correo_personal: values.correoPersonal,
                    cod_centro: values.correoRegional, // es el centro regional
                    cod_carrera1: values.carreraPrimaria,
                    cod_carrera2: values.carreraSecundaria,
                });
                console.log('Respuesta de la API:', response.data);
            } catch (error) {
                console.error('Error al enviar los datos a la API', error);
            }
            finally {
                setSubmitting(false); // Asegúrate de desactivar el estado de "submitting"
            }
            
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
            centro: Yup.string()// ES el centro regional
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
                                {carreras.map(carrera => (
                                    <option key={carrera.cod_carrera} value={carrera.cod_carrera}>
                                        {carrera.nombre_carrera}
                                    </option>
                                ))}
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
                                {carreras.map(carrera => (
                                    <option key={carrera.cod_carrera} value={carrera.cod_carrera}>
                                        {carrera.nombre_carrera}
                                    </option>
                                ))}
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
                            <select
                                defaultValue={"0"}
                                {...getFieldProps('centro')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                {centros.map(centro => (
                                    <option key={centro.cod_centro} value={centro.cod_centro}>
                                        {centro.nombre_centro}
                                    </option>
                                ))}
                            </select>
                            {touched.centro && errors.centro && <span className='mb-4 mt-6 text-sm text-red-500 font-semibold' >{errors.centro}</span>}
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
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
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
