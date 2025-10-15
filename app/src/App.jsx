import React from 'react'
import Formpage from './pages/Formpage'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/sign' element={<Signup/>}></Route>
        <Route path='/form' element={<Formpage/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
