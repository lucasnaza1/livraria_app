import Header from './components/Header'
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #5e0095 30%, #712b99 100%);

  li{
    list-style: none;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
