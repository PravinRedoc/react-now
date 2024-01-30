import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs"
import Error from "./components/Error"
import RestaurtantMenu from "./components/RestaurtantMenu"


/*
AppLayout
Header - logo,nav-items
Body - Search, restaurant-container,restaurant-card
Footer - copyright.links,address,contact

*/

//app layout
const AppLayout = () => {
    return <div className="app">
            <Header />
            <Outlet />
    </div>;
};

const appRouter  = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body /> 
            },
            {
                path: "/about",
                element: <AboutUs /> 
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurtantMenu />
            }
        ],
        errorElement:<Error />,
    },
    

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);