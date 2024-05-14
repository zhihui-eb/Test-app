import Navbar from './components/Navbar';
import Header from './components/Header';
import DescSection from './components/DescSection'
import FeaturesSection from './components/FeaturesScection';
import ContactUs from './components/ContanctUs';
import ComWorkWith from './components/ComWorkWith';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='body-wrapper'>
      <Navbar />
      <Header />
      <DescSection />
      <FeaturesSection />
      <ContactUs />
      <ComWorkWith />
      <Footer />
    </div>
  );
}

export default App;
