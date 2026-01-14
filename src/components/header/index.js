import Logo from '../logo/index.js';
import OptionsHeader from '../optionsHeader/index.js';
import IconsHeader from '../iconsHeader/index.js';
import styled from 'styled-components';

const AppHeader = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <AppHeader>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </AppHeader>
  );
}

export default Header;
