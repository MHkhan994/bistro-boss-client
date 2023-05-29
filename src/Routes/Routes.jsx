import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Manu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layouts/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: `/shop/:paramCategory`,
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);

export default router