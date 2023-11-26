import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./DashboardRoutes"
import AdmisionesRouter from "./AdmisionesRouter"
import EstudiantesRouter from "./EstudiantesRouter"
import DocenteRouter from "./DocenteRouter"
import LoginScreen from "../screens/LoginScreen"

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login/*" element={
                    <LoginScreen />
                } />

                <Route path="/admisiones/*" element={
                    <AdmisionesRouter />
                } />

                <Route path="/estudiantes/*" element={
                    <EstudiantesRouter />
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