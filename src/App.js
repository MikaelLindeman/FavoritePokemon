import CrudPoke from './components/CrudPoke';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
          <div className="App">
            <CrudPoke />
          </div>
      <Footer /> 
    
    </>
  );
}

export default App;
