import logo from '../../image/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer className="logo">
      <LogoImg src={logo} alt="logo" className="logo-img" />
      <p>
        <strong>Bookary</strong>Store
      </p>
    </LogoContainer>
  );
}

export default Logo;
