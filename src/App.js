import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Today' element={<Today />} />
                <Route path='/Youtuber' element={<Youtuber />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App