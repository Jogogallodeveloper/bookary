import cart from '../../image/sacola.svg';
import perfil from '../../image/perfil.svg';
import './style.css';

const icons = [perfil, cart];

function IconsHeader() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon" key={icon}>
          <img src={icon} alt="ícone" />
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
