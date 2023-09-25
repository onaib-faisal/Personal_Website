import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { DarkModeProvider } from './context/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <Homepage />
        {/* Other sections (AboutMe, Projects, etc.) will be added here later */}
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;