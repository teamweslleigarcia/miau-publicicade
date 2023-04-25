import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionServicos from './Components/SectionServicos';
import SectionDepoimentos from './Components/SectionDepoimentos';
import SectionClients from './Components/SectionClients';
import SectionContacts from './Components/SectionContacts';
import Footer from './Components/Footer';
import SectionPortifolio from './Components/SectionPortifolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionPortifolio />
      <SectionServicos />
      <SectionDepoimentos  />
      <SectionClients />
      <SectionContacts />
      <Footer />
      
    </div>
  );
}

export default App;
