import logo from '../../image/logo.svg';
import './style.css';
  
function Logo() {
  return (
    <div className="logo">
      <img 
       src={logo} 
       alt="logo" 
       className="logo-img">
       </img>
      <p>
        <strong>Bookary</strong>Store
      </p>
    </div>
  );
}

export default Logo;
