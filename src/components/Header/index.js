import { Link } from 'react-router-dom';
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

function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <OpcoesHeader />
            <OpcoesIcones />
        </HeaderContainer>
    )
}

export default Header