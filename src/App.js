import './App.css';
import React from 'react'; 
import Nav from './components/Nav';
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects'; 
import Contact from './components/Contact';  


function App() {
  return (
   <main>
     <Nav/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
   </main>
  );
}

export default App;
