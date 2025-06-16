import { Routes, Route } from "react-router-dom";
import Dashboard from "../../../Pages/admin/adminDashboard";

function AdminRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />

        </Routes>
    )
}

export default AdminRoutes
