import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Divisions from './components/Divisions';
import MobileApp from './components/MobileApp';
import Team from './components/Team';
import Cafe from './components/Cafe';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Divisions />
      <MobileApp />
      <Team />
      <Cafe />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
