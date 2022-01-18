import './App.css';
import React from 'react'; 
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'; 

function App() {
  return (
   <main>
     <Navigation/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
   </main>
  );
}

export default App;
