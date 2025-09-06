import styled from 'styled-components'
import { Link } from 'react-router-dom'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS']

const Opcoes = styled.ul`
    display: flex;
 `

const Opcao = styled.li`
      min-width: 8rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
      padding: 0 0.5rem;
      cursor: pointer;
      list-style: none;
 `

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader;