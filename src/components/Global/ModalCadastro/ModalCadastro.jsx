import { useState } from "react";
import MainBtn from "../MainBtn/MainBtn";

//use context
import useAuth from "../../../hooks/useAuth"

// ICONS
import GoogleIcon from "/assets/img/google-icon.svg";
import FacebookIcon from "/assets/img/facebook-icon.svg";
import CloseIcon from "/assets/img/close-i.svg";

const ModalCadastro = ({ onClick }) => {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const {signUp} = useAuth()

  const submit = (e) => {
    e.preventDefault()
    signUp(nome, email, senha)
  }

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
          <form className="form-area" onSubmit={submit}>
            <h4>Bem-vindo de Volta!</h4>

            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="meu nome"
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="meuemail@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <MainBtn text="Cadastrar"/>
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

export default ModalCadastro;
