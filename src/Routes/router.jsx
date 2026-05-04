import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MianLayout from "../layout/MianLayout";


const mainRoutes =[
    {path: "/", element: <Home/>},

]

const router = createBrowserRouter([
    {
        path: "/",
        element: <MianLayout/>,
        children: mainRoutes
    },
]);

export default router;