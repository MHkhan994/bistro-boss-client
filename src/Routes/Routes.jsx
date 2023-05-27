import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Manu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";

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
            }
        ]
    },
]);

export default router