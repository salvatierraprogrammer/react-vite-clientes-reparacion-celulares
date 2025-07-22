import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Header />
      <LoginModal open={!isAuthenticated} onLogin={() => setIsAuthenticated(true)} />
      {isAuthenticated && <Home />}
      <Footer />
    </>
  );
}

export default App;
