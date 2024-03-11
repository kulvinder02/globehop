
import './App.css';
import Adventure from './components/Adventure';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Frequently from './components/Frequently';
import { Hero } from './components/Hero';
import Travlers from './components/Travlers';
import WhyGlobehop from './components/WhyGlobehop';
import BacktoTop1 from './components/coman/BacktoTop1';
function App() {
  return (
    <div className="overflow-hidden">
    <Hero/>
    <Destination/>
    <WhyGlobehop/>
    <Adventure/>
    <Travlers/>
    <Frequently/>
     <Footer/>
     <BacktoTop1/>
    </div>
  );
}

export default App;
