import React from "react";
import ReactDOM from "react-dom/client";
import dosa from "./images/Home-page/body/dosa.jpg";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/Contact.js"
import Error from "./components/Error.js";
import Cart from "./components/cart.js";
import RestaurentMenu from "./components/RestaurentMenu.js"

const AppLayout = () =>{

   
    return (

        <div  className="app"> 
            <Header/>
           <Outlet/>

            {/**if path =/ */}
            {/* <Body/> */}

             
            {/**if path =/about */}
            {/* <About/> */}

            {/**if path =/contact */}
            {/* <ContactUs/> */}
            
        </div>

    );

}

const appRouter = createBrowserRouter([

    {
        path : "/",
        element : <AppLayout />,
        children :[

            {
                    path:"/",
                    element :<Body/>

            },

            {
                path :'/about',
                element : <About/>
            },
            {
                path:'/contact',
                element :<ContactUs/>
            },
            {
                path:"/cart",
                element :<Cart/>
            },
            {
               path:"/restaurents/:resId",
               element:<RestaurentMenu/>
            }
            

        ],
        errorElement: <Error />
    }

    
]

    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />)

root.render(<RouterProvider router={appRouter}/>)
