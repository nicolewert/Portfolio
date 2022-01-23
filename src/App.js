import './App.css';
import React from 'react'; 
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Projects from './components/Projects/Projects'; 
import Contact from './components/Contact/Contact'; 

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
