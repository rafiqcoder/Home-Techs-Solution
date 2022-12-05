import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import AddProducts from "../Pages/Dashboard/DashProducts/AddProducts";
import AllProducts from "../Pages/Dashboard/DashProducts/AllProducts";
import AddServices from "../Pages/Dashboard/DashServices/AddServices";
import AllServices from "../Pages/Dashboard/DashServices/AllServices";
import UpdateService from "../Pages/Dashboard/DashServices/UpdateService";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";



const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',element: <Main></Main>,
            children: [
                {
                    path: '/',element: <Home></Home>
                },

                {
                    path: '/blog',element: <Blog></Blog>
                },
                {
                    path: '/products',element: <Products></Products>
                },
                {
                    path: '/services',element: <Services></Services>
                },
                {
                    path: '/login',element: <Login />
                },

                {
                    path: '/register',element: <Register></Register>
                },

                {
                    path: '/contact',element: <Contact />
                },

            ]
        },
        {
            path: '/',element: <Dashboard />,
            children: [
                {
                    path: '/dashboard',element: <DashHome />
                },
                {
                    path: '/dashboard/allproducts',element: <AllProducts />
                },
                {
                    path: '/dashboard/add-products',element: <AddProducts />
                },
                {
                    path: '/dashboard/allservices',element: <AllServices />
                },

                {
                    path: '/dashboard/add-service',element: <AddServices />
                },
                {
                    path: '/dashboard/services/:id',
                    loader: ({ params }) => {
                        return fetch(`http://localhost:5000/service/${params.id}`)
                    },
                element: <UpdateService />
                },


            ]
        },
    ])

    return (
        router
    );
};

export default Route;