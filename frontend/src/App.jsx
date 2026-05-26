import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {

  return <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/about' element={<About msg="ok good"/>}></Route>
      </Routes>


    </BrowserRouter>


  </>
}

export default App