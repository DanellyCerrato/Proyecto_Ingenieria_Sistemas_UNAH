import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NavbarE from '../components/Estudiantes/Navbar'
import Matricula from '../screens/Estudiantes/Matricula'
import Solictudes from '../screens/Estudiantes/Solictudes'
import Perfil from '../screens/Estudiantes/Perfil'
import Archivos from '../screens/Estudiantes/Archivos'
import { Notas } from '../screens/Estudiantes/Notas'
import Restablecer from '../screens/Estudiantes/Restablecer'
import Cambio from '../screens/Estudiantes/CambiarC'
import LoginEstudiante from '../screens/Estudiantes/LoginEstudiante'


const EstudiantesRouter = ({isEstudianteAuthenticated, isNumeroCuenta}) => {

  console.log("Estudiante :" + isNumeroCuenta)
  return (
    <div>
      {isEstudianteAuthenticated ? (
        <>
        <NavbarE />

        <div className='container mx-auto mt-5'>
          <Routes>
            <Route path='/login' element={<LoginEstudiante/>} />
            <Route path='/matricula' element={<Matricula/>} />
            <Route path='/solicitudes' element={<Solictudes isNumeroCuenta={isNumeroCuenta}/>} />
            <Route path='/perfil' element={<Perfil isNumeroCuenta={isNumeroCuenta}/>} />
            <Route path='/archivos' element={<Archivos/>} />
            <Route path='/notas' element={<Notas/>} />
            <Route path='/restablecer' element={<Restablecer isNumeroCuenta={isNumeroCuenta}/>} />
            <Route path='/cambio' element={<Cambio isNumeroCuenta={isNumeroCuenta}/>} />
          </Routes>
        </div>
      </>
      ) : (
        <Navigate to='/estudiantes/login' replace />
      )}
    </div>
  )
}

export default EstudiantesRouter
