import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AboutPage from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import AddUser from './components/AddUser/AddUser.jsx';

const router = createBrowserRouter([
  {
   path:"/",
   element:<Home></Home>,
   children:[
    {
      path:'/about',
      element:<AboutPage></AboutPage>
    },
    {
      path:'/contact',
    element:<ContactPage></ContactPage>
  },
    {
      path:'/adduser',
    element:<AddUser></AddUser>
  }
   ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
