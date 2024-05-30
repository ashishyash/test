import React from "react";
import ReactDOM from "react-dom/client";
import './style.scss';
import Body from "./components/body/body";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./components/about/about";
import Layout from "./common/Layout";
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([

   {
      path: '/' , element: <Layout/>,
      children: [
         {
            path: '/', element: <Body/>
         },
         {
            path: '/about', element: <About/>
         }
      ]
   },
   
])
root.render(<RouterProvider router={appRouter}/>)