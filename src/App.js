import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';

const App = () => {
  return (
    <>
      <div className='container mt-3 mb-3'>
        <div className='row'>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/users/:id' element={<Details/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App;