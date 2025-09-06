import logo from '../../img/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const LogoImage = styled.img`
  margin-right: 0.5rem;
  width: 3.5rem;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage
        src={logo}
        alt='Logo'
      />
      <p><strong>Livraria </strong>APP</p>
    </LogoContainer>)
}

export default Logo 