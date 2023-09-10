import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ComplexNavbar } from './components/Navbar';
import LandingPage from './pages/LandingPage';

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <ComplexNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
