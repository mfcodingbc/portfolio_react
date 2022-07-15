import React from 'react';

// universal page components
import Footer from './components/Footer';
import Header from './components/Header';

// pages
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Portfoliopage from './pages/Portfoliopage';
import Resumepage from './pages/Resumepage';
import Aboutpage from './pages/Aboutpage';

// React Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path='/portfolio_react' element={<Homepage />} />
            <Route path='/portfolio_react/about' element={<Aboutpage />} />
            <Route path='/portfolio_react/portfolio' element={<Portfoliopage />} />
            <Route path='/portfolio_react/contact' element={<Contactpage />} />
            <Route path='/portfolio_react/resume' element={<Resumepage />} />
            <Route path='/*' element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
