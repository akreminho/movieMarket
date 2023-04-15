import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Movielist from './Components/Movielist';
import moviesData from './Components/assets/data/Moviedata';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Movielist data={moviesData}/>
      <Footer/>
    </div>
  );
}

export default App;
