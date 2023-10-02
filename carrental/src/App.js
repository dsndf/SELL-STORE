import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js/Home';
import Page from './Components/Page/Page';

const App = () => { 

  return ( 
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
     <Route path='/page/:pageNo' element={<Page/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
