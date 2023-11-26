import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClasesDocente from '../screens/docentes/ClasesDocente'
import Presentacion from '../screens/docentes/Presentacion'
import NavbarD from '../screens/docentes/Navbar'
import PerfilD from '../screens/docentes/Perfil'

const DocenteRouter = () => {
  return (
    <div>

      <NavbarD />

      <div className='container mx-auto mt-5'>
        <Routes>
          <Route path="/perfil-docente" element={<PerfilD />} />
          <Route path="/presentacion-docente" element={<Presentacion />} />
          <Route path="/*" element={<ClasesDocente />} />
        </Routes>
      </div>
    </div>
  )
}

export default DocenteRouter