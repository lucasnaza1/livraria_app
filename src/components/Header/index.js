import Logo from '../../components/Logo'
import OpcoesHeader from '../../components/Opcoes-header';
import OpcoesIcones from '../../components/Opcoes-icones';  
import './style.css'

function Header(){
return(
       <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>       
            <OpcoesIcones/>
      </header>
)
}

export default Header