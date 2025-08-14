import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Proveedores from './pages/Proveedores';
import LoginModal from './components/LoginModal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'   // <-- importante
      }}>
        <Header />
        <LoginModal open={!isAuthenticated} onLogin={() => setIsAuthenticated(true)} />
        
        <div style={{ flex: 1 }}>  {/* <-- esto empuja el footer abajo */}
          {isAuthenticated && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proveedores" element={<Proveedores />} />
            </Routes>
          )}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
