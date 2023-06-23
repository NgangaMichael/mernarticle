import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Addblog from './components/Addblog'
import Details from './components/Details'
import Editblog from './components/Editblog'
import Notfound from './components/Notfound'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Blogs />} />
          <Route path='/addblog' element={<Addblog />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/editblog/:id' element={<Editblog />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  )
}