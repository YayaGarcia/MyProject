import '../css/Header.css';

import menu1 from "../assets/icons/menu.svg"
import search from "../assets/icons/126474.svg";

function Header() {
  return (
    <div>
      <div id="menu">
        <img src={menu1} className="menu1" alt="" />
        <h3 className="chukwudi">Chukwudi</h3>
        <div className="prueba">
          <img src={search} className="search" alt="" />
          <input placeholder="Search" className="buscar-texto" />
        </div>
      </div>
    </div>
  );
}

export default Header;