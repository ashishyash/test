import { createBrowserRouter } from "react-router-dom";
import About from '../components/about/about';
import Body  from "../components/body/body";
import Layout from "./Layout";
const AppRouter = createBrowserRouter([

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
    
 ]);
 export default AppRouter;