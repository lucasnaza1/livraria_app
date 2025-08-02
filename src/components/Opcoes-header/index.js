import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA BIBLIOTECA']

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

function OpcoesHeader (){
 return(
      <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ))}
        </Opcoes>
 )       
}

export default OpcoesHeader;