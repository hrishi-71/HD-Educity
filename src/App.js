import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import About from './components/About';
import Campus from './components/Campus';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Videoplayer from './components/Videoplayer';
import { useState } from 'react';

function App() {
  const [play, setPlay] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <div className="container">

      <Hero/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Campus/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer ply={play} setPlay={setPlay}/>
    </div>
  );
}

export default App;
