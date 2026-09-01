import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import { useState, useEffect } from 'react';

function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-[#0B6E7F] transition-all duration-75"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black" >
     <div className="relative h-16 w-16 flex items-center justify-center">
  <div
    className="absolute inset-0 animate-spin rounded-full"
    style={{
      background:
        "conic-gradient(#011C5F, #013597, #015CE1, #0198FB, #00DFFB, #011C5F)",
      padding: "4px",
    }}
  >
    <div className="h-full w-full rounded-full bg-white dark:bg-black" />
  </div>

  <img
    src="/logo-eddy.png"
    alt="Logo Eddy Nzingoula"
    className="relative z-10 h-10 w-10 object-contain"
  />
</div>
    </div>
  );
}


function App() {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden" >
        <ScrollProgressBar />
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className={`transition-opacity z-20 duration-1000 ease-in-out ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            
            <Routes>
              <Route path="/" element={<Accueil />} />
            </Routes>
          </div>
        )}
     
    
    </div>
  );
}

export default App;
