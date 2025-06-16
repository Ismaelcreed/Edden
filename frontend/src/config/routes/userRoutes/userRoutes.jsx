import { Routes, Route } from "react-router-dom";
import AvatarGenerator from "../../../Pages/AvatarGenerator/AvatarGenerator";
import Layout from "../../../Pages/user/Home/layout/userLayout";
import Live from "../../../Pages/user/Live/Live";
import Prediction from "../../../Pages/user/Prediction/Prediction";
import LandingPage from "../../../Pages/user/Home/LandingPage/LandingPage";

function UserRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="avatar" element={<AvatarGenerator />} />
                <Route path="live" element={<Live />} />
                <Route path="prediction" element={<Prediction />} />
            </Route>
        </Routes>
    );
}
export default UserRoutes;
