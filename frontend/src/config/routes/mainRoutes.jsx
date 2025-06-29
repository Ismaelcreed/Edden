import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./userRoutes/userRoutes";
import ErrorPage from "../../Pages/errorPage/errorPage";
import AuthForm from "../../Pages/auth/authForm";
import AdminRoutes from "./adminRoutes/adminRoutes";

function RoutesApplication () {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/edden-app" />} />
            <Route path="/edden-app/*" element={<UserRoutes/>}/>
            <Route path="/edden-app/admin/*" element={<AdminRoutes/>}/>
             <Route path="/edden-app/auth" element={<AuthForm/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
}
export default RoutesApplication;