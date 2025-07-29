import './App.css';
import Logo from './components/Logo'
import OpcoesHeader from './components/Opcoes-header';
import OpcoesIcones from './components/Opcoes-icones';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <OpcoesIcones></OpcoesIcones>
      </header>
    </div>
  );
}

export default App;
