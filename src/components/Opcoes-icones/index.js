import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import './style.css'

const icones = [perfil ,sacola]

function OpcoesIcones(){
    return(
                  <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone} alt='icons'></img></li>
            ))}
        </ul>
    )
}

export default OpcoesIcones;