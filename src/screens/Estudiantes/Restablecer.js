import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const Restablecer = ({isNumeroCuenta}) => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
        },
        onSubmit: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/estudiante/password/recuperar/'+isNumeroCuenta);
            if (response.status == 200){
                success()
            }
            else{
                alert('Error')
            }
        },
    });

    const success = () => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Contraseña enviada con exito",
          showConfirmButton: false,
          timer: 1500
        });
      }


    return (
        <div className='' >
            <h2>Presione en <b>Restablecer</b> para obtener su nueva contraseña en su correo eléctronico</h2>
            <form onSubmit={handleSubmit}>   
                <button
                    type="submit"
                    className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Restablecer
                </button>
            </form>

        </div>
    )
}

export default Restablecer
