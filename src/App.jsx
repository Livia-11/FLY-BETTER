import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Services from './pages/Services/Services'
import Headqts from './pages/Headqts/Headqts'
import About from './pages/About/About'
import Reviews from './pages/Reviews/Reviews'
import CTA from './pages/CTA/CTA'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import Layout from './Components/Layout/Layout'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes  >
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          <Route >
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


