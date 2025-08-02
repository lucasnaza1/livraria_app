import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 2.5rem;
    width: 1.5rem;
    list-style: none;

`
const Icones = styled.ul`
   display: flex;
   align-items: center;
`
const icones = [perfil ,sacola]

function OpcoesIcones(){
    return(
       <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone} alt='icons'></img></Icone>
            ))}
       </Icones>
    )
}

export default OpcoesIcones;