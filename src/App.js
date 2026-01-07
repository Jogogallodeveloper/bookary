import Logo from './components/logo/index.js';
import './App.css';
import perfil from './image/perfil.svg';
import cart from './image/sacola.svg';

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY WISH LIST']
const icons = [perfil, cart];

function App() {
  return (
    <div className="App">
      <header className = 'App-header'>
      <Logo></Logo>
      <ul className='options'>
        { textOptions.map( (text) => (
          <li className='option'><p>{text}</p></li>
        ) ) }
      </ul>
      <ul className='icons'>
        { icons.map( (icon) => (
          <li className='icon'><img src={icon}></img></li>
        ) ) }
      </ul>
      </header>
    </div>
  );
}

export default App;
