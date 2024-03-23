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
import Users from './components/Users/Users.jsx';
import UpdateUser from './components/updateUser/UpdateUser.jsx';

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
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  },
  {
    path:`/userupdate/:id`,
    element:<UpdateUser></UpdateUser>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
   ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
