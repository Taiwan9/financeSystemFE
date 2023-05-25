import React from "react";
import MainBtn from "../MainBtn/MainBtn";

// ICONS
import GoogleIcon from "../../../../public/assets/img/google-icon.svg";
import FacebookIcon from "../../../../public/assets/img/facebook-icon.svg";
import CloseIcon from "../../../../public/assets/img/close-i.svg";

const ModalLogin = ({ onClick }) => {
  return (
    <div className="account-modal">
      <div className="modal-container">
        {/* CLOSE ICON */}
        <img
          className="close-icon"
          src={CloseIcon}
          alt="Close Icon"
          onClick={onClick}
        />

        {/* FORM AREA */}
        <div className="form-container">
          <form className="form-area">
            <h4>Bem-vindo de Volta!</h4>
            <label htmlFor="name">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="meuemail@email.com"
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
            />
            <MainBtn text="Login" />
          </form>

          <span className="separator">ou</span>

          <div className="login-with">
            <a href="#" className="google">
              <img src={GoogleIcon} alt="Google Icon" />
              Google
            </a>

            <a href="#" className="facebook">
              <img src={FacebookIcon} alt="Facebook Icon" />
              Facebook
            </a>
          </div>

          <p className="no-account">
            Não tem uma conta?
            <a href="#">
              <strong> Inscreva-se</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
