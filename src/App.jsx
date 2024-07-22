import { useState } from 'react'
import Home from './componantd/Home'
import About from './componantd/About'
import Contact from './componantd/Contact'
import Navbar from './componantd/Navbar'
import Login from './componantd/Login'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import videoCall from './componantd/videoCall'
// import University from './componantd/University'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/></>
    },

    // {
    //   path:'/University',
    //   element: <><University/> <About/></>
    // },

    {
      path:'/about',
      element: <><Navbar/> <About/></>
    },

    {
     path:'/contact',
     element: <><Navbar/> <Contact/></>
    },
       
     {
    path:'/login',
    element: <><Navbar/> <Login/></>
   }
    
        ])

  return (
    <>


    
      <videoCall/>

   
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
