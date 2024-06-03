import { createBrowserRouter } from "react-router-dom";
import About from '../components/about/about';
import Body  from "../components/body/body";
import Layout from "./Layout";
import Support from "../components/support/Support";
const AppRouter = createBrowserRouter([

    {
       path: '/' , element: <Layout/>,
       children: [
          {
             path: '/', element: <Body/>
          },
          {
             path: '/about', element: <About/>
          },
          {
            path: '/support', element: <Support/>
         }
       ]
    },
    
 ]);
 export default AppRouter;