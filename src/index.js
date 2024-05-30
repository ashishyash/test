import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './style.scss';

import AppRouter  from "./common/Router";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>)