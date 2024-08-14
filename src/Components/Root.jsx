import React from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
export default function Root(){
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home></Home>}>
          
        </Route>
        <Route path='About/' element={<About></About>}>
          
        </Route>
        <Route path='Services/' element={<Services></Services>}>
          
        </Route>
        <Route path='Contact/' element={<Contact></Contact>}>
          
        </Route>
     </Routes>
     </BrowserRouter>

    </div>
  )
}

