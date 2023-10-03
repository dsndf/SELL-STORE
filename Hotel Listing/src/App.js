import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Properties from './Components/Properties/Properties'
import Property from './Components/Property/Property'

const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element= {<Properties/>}></Route>
<Route path='/property/:id' element= {<Property/>}></Route>
</Routes>
</BrowserRouter>

    )
}

export default App
