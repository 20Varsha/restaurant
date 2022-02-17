
import React from 'react'
// import './index.js' 
import Header from './components/Header'

import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { Container } from 'react-bootstrap' ;

// import Restaurants from './components/Restaurants';


function App() {

  return (

    <Router>
<Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/restaurants/:id' element={<RestaurantDetails/>} />
          </Routes>
        </Container>
      </main>

    </Router>

  );
}

export default App;





