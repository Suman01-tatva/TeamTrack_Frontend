import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import ProtectedRoute from './ProtectedRoute'
// import Dashboard from '../features/auth/pages/Dashboard'
import Home from '../features/home/Home'
import PageNotFound from '../features/home/PageNotFound'
import RegisterOrganization from '../features/auth/pages/RegisterOrganization'
import { UserRegisterForm } from '../features/auth/components/UserRegisterForm'
import Dashboard from '../features/home/Dashboard'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/org-register" element={<RegisterOrganization />} />
                <Route path="/user-register" element={<UserRegisterForm />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;