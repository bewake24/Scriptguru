import './App.css';
import Navbar from './components/Navbar/Navbar';
import NestedDropdown from './components/NestedDropdown/NestedDropdown';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <NestedDropdown />
        <Slider />
        <Footer />
    </div>
  );
}

export default App;
