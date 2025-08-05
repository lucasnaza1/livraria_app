import Logo from '../../components/Logo'
import OpcoesHeader from '../../components/Opcoes-header';
import OpcoesIcones from '../../components/Opcoes-icones';  
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
}

`

function Header(){
return(
       <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>       
            <OpcoesIcones/>
      </HeaderContainer>
)
}

export default Header