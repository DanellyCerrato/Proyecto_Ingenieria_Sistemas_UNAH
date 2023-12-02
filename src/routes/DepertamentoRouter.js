import React from 'react'
import NavbarDepartamento from '../screens/Departamento/NavbarDepartamento'
import DetalleDocente from '../screens/Departamento/DetalleDocente'
import ListadoClases from '../screens/Departamento/ListadoClases'
import Secciones from '../screens/Departamento/Secciones'
import RegistrarClase from '../screens/Departamento/RegistrarClase'
import HistorialEstudiante from '../screens/Departamento/HistorialEstudiante'
import { Route, Routes } from 'react-router-dom'
import Edificios from '../screens/Departamento/Edificios'
import RegistrarEdificio from '../screens/Departamento/RegistrarEdificio'
import ListaEspera from '../screens/Departamento/ListaEspera'
import PeriodoAcademico from '../screens/Departamento/PeriodoAcademico'
import ClasesHistorial from '../screens/Departamento/ClasesHistorial'
import DocentesNotas from '../screens/Departamento/DocentesNotas'

const DepertamentoRouter = () => {
    return (
        <div className=''>
            <NavbarDepartamento />

            <div className='container mx-auto mt-5'>
                <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <Routes>
                        <Route path="/listado-clases" element={<ListadoClases />} />
                        <Route path="/detalle-docente" element={<DetalleDocente />} />
                        <Route path="/detalle-docente/:docente/notas" element={<DocentesNotas />} />
                        <Route path="/secciones/:clase" element={<Secciones />} />
                        <Route path="/secciones/:clase/lista-espera" element={<ListaEspera />} />
                        <Route path="/nueva-clase" element={<RegistrarClase />} />
                        <Route path="/historial-estudiantes" element={<HistorialEstudiante />} />
                        <Route path="/historial-estudiantes/:estudiante/clases" element={<ClasesHistorial />} />
                        <Route path="/edificios" element={<Edificios />} />
                        <Route path="/nuevo-edificio" element={<RegistrarEdificio />} />
                        <Route path="/periodo-academico" element={<PeriodoAcademico />} />
                        <Route path="/*" element={<ListadoClases />} />
                    </Routes>
                </div>
            </div>


        </div>


    )
}

export default DepertamentoRouter