import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarCoordinacion from '../screens/coordinacion/NavbarCoordinacion'
import SolicitudesPendientes from '../screens/coordinacion/SolicitudesPendientes'
import HistorialEstudiante from '../screens/coordinacion/HistorialEstudiante'
import CancelacionesCoordinacion from '../screens/coordinacion/Cancelaciones'
import { ClasesEstudiantes } from '../screens/coordinacion/ClasesEstudiantes'
import CargaAcademica from '../screens/coordinacion/CargaAcademica'

const CoordinacionRouter = () => {
  return (
    <div>
      <NavbarCoordinacion />

      <div className='container mx-auto mt-5'>
        <Routes>
          <Route path="/solicitudes" element={<SolicitudesPendientes />} />
          <Route path="/historial-estudiantes" element={<HistorialEstudiante />} />
          <Route path="/carga-academica" element={<CargaAcademica />} />
          <Route path="/cancelaciones-exepcionales" element={<CancelacionesCoordinacion />} />
          <Route path="/estudiantes/:estudiante/clases" element={<ClasesEstudiantes />} />

          <Route path="/*" element={<SolicitudesPendientes />} />
        </Routes>
      </div>
    </div>
  )
}

export default CoordinacionRouter
