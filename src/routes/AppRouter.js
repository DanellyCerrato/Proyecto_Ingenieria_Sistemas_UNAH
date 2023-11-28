import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./DashboardRoutes"
import AdmisionesRouter from "./AdmisionesRouter"
import EstudiantesRouter from "./EstudiantesRouter"
import DocenteRouter from "./DocenteRouter"
import LoginEstudiante from "../screens/Estudiantes/LoginEstudiante"

export const AppRouter = () => {
    
    const [isEstudianteAuthenticated, setEstudianteAuthenticated] = useState(false);
    const [isNumeroCuenta, setNumeroCuenta] = useState('')

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/estudiantes/login" element={
                    <LoginEstudiante setEstudianteAuthenticated={setEstudianteAuthenticated} setNumeroCuenta={setNumeroCuenta}/>
                } />

                <Route path="/admisiones/*" element={
                    <AdmisionesRouter />
                } />

                <Route path="/estudiantes/*" element={
                    <EstudiantesRouter isEstudianteAuthenticated={isEstudianteAuthenticated} isNumeroCuenta={isNumeroCuenta}/>
                } />

                <Route path="/docentes/*" element={
                    <DocenteRouter />
                } />

                <Route path="/*" element={
                    <DashboardRoutes />
                } />

            </Routes>
        </BrowserRouter>
    )
}