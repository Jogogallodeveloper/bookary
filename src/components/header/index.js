import './style.css';
import Logo from '../logo/index.js';
import OptionsHeader from '../optionsHeader/index.js';
import IconsHeader from '../iconsHeader/index.js';

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  );
}

export default Header;
