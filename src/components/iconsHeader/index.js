import cart from '../../image/sacola.svg';
import perfil from '../../image/perfil.svg';
import './style.css'

const icons = [perfil, cart];

function IconsHeader () {
    return(
        <ul className='icons'>
        { icons.map( (icon) => (
          <li className='icon'><img src={icon}></img></li>
        ) ) }
      </ul>
    )
};

export default IconsHeader;