import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarE from '../components/Estudiantes/Navbar'
import Matricula from '../screens/Estudiantes/Matricula'
import Solictudes from '../screens/Estudiantes/Solictudes'
import Perfil from '../screens/Estudiantes/Perfil'
import Archivos from '../screens/Estudiantes/Archivos'
import { Notas } from '../screens/Estudiantes/Notas'
import Restablecer from '../screens/Estudiantes/Restablecer'
import Cambio from '../screens/Estudiantes/CambarC'

const EstudiantesRouter = () => {
  return (
    <div>

      <NavbarE />

      <div className='container mx-auto mt-5'>
        <Routes>
          <Route path='/matricula' element={<Matricula/>} />
          <Route path='/solicitudes' element={<Solictudes/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/archivos' element={<Archivos/>} />
          <Route path='/notas' element={<Notas/>} />
          <Route path='/restablecer' element={<Restablecer/>} />
          <Route path='/cambio' element={<Cambio/>} />

        </Routes>
      </div>
    </div>
  )
}

export default EstudiantesRouter
