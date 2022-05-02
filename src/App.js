import './App.css';
import PrimeiraSection from './Components/PrimeiraSection';
import Header from './Components/Header';
import AbaCinza from './Components/AbaCinza';
import Footer from './Components/Footer';
import SegundaSection from './Components/Segunda';
import Comentarios from './Components/Comentarios';
import LinhaAzul from './Components/LinhaAzul';

function App() {
  return (

    <div className="App">
      <Header/>
      <PrimeiraSection/>
      <AbaCinza/>
      <SegundaSection/>
      <Comentarios/>
      <LinhaAzul/>
      <Footer/>
    </div>
  );
}

export default App;
