import logo from '../../img/logo.svg'
import './style.css'

function Logo(){
    return (
        <div className='logo'>
          <img src={logo} alt='Alura Books Logo'></img>
          <p><strong>Alura </strong>Books</p>
        </div>)
}

export default Logo 