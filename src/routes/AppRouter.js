import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./DashboardRoutes"
import AdmisionesRouter from "./AdmisionesRouter"

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/admisiones/*" element={
                    <AdmisionesRouter />
                } />

                <Route path="/*" element={
                    <DashboardRoutes />
                } />


            </Routes>
        </BrowserRouter>
    )
}