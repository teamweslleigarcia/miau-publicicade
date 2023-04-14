import './App.css';
import Section from './Components/Section';
import Navbar from './Components/Navbar';
import Construcao from './Pages/Construcao';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section title="Serviços" />
      <Section title="Depoimentos" />
      <Section title="Clientes" />
      <Section title="Equipe" />
      <Section title="Contato" />
    </div>
  );
}

export default App;
