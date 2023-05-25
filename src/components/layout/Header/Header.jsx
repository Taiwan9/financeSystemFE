import { Link } from "react-router-dom";

import MainBtn from "../../Global/MainBtn/MainBtn";
import MenuMobile from "../../../../public/assets/img/menu-mobile.svg";

function Header({ loginOnClick }) {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="../../../public/assets/img/BudgetBuddy.svg" alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#">Sou Pessoa Fisíca</a>
            </li>
            <li>
              <a href="#">Sou Pessoa Jurídica</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <div className="accountBtns">
            <a href="#" className="loginBtn" onClick={loginOnClick}>
              Login
            </a>
            <MainBtn text="Cadastre-se" />
          </div>
        </nav>
        <img className="menu-mobile" src={MenuMobile} alt="Menu Mobile" />
      </div>
    </header>
  );
}

export default Header;
