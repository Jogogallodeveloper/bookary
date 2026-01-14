import cart from '../../image/sacola.svg';
import perfil from '../../image/perfil.svg';
import styled from 'styled-components';

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icons = [perfil, cart];

function IconsHeader() {
  return (
    <IconsContainer>
      {icons.map((icon) => (
        <IconContainer className="icon" key={icon}>
          <img src={icon} alt="ícone" />
        </IconContainer>
      ))}
    </IconsContainer>
  );
}

export default IconsHeader;
