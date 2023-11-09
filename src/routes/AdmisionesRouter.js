import React from 'react'
import Navbar from '../components/admisiones/Navbar'
import Registro from '../screens/admisiones/Registro'
import { Route, Routes } from 'react-router-dom'
import Calificaciones from '../screens/admisiones/Calificaciones'
import Resultados from '../screens/admisiones/Resultados'

const Admisiones = () => {
  return (
    <div>

      <Navbar />

      <div className='container mx-auto mt-5'>
        <Routes>
          <Route path="/calificaciones/" element={<Calificaciones />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/*" element={<Registro />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admisiones
