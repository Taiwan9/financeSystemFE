import useAuth from "../hooks/useAuth";
import Logo from "../../public/assets/img/BudgetBuddy.svg";
import ProfileImage from "../../public/assets/img/users/user-image.jpg";
import DashboardIcon from "../../public/assets/img/icons/dashboard-i.svg";
import ActivitiesIcon from "../../public/assets/img/icons/activities-i.svg";
import ScheduleIcon from "../../public/assets/img/icons/schedule-i.svg";
import SettingsIcon from "../../public/assets/img/icons/settings-i.svg";
import LogoutIcon from "../../public/assets/img/icons/log-out-i.svg";
import SearchIcon from "../../public/assets/img/icons/search-i.svg";
import NotificationIcon from "../../public/assets/img/icons/notification-i.svg";
import MiniBanner from "../../public/assets/img/banners/mini-banner.png";

function pessoaFisica() {
  const { logOut, user } = useAuth();

  return (
    <section className="s-dash">
      {/* <h1>teste</h1>
      <p>{user.nome}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
      <button onClick={logOut}>Sair</button> */}

      <div className="side-menu">
        <img src={Logo} alt="Budget Buddy Logo" />
        <div className="user-info">
          {/* USER IMAGE */}
          <div className="user-image-container">
            <img src={ProfileImage} alt="User Image" />
          </div>

          {/* USER NAME */}
          <h3>{user.nome}</h3>

          {/* EDIT BUTTON */}
          <button>Edit</button>
        </div>

        {/* NAVBAR */}
        <nav>
          <ul>
            <li>
              <img src={DashboardIcon} alt="Dashboard Icon" />
              Dashboard
            </li>
            <li>
              <img src={ActivitiesIcon} alt="Activities Icon" />
              Activities
            </li>
            <li>
              <img src={ScheduleIcon} alt="Schedule Icon" />
              Schedule
            </li>
            <li>
              <img src={SettingsIcon} alt="Settings Icon" />
              Settings
            </li>
          </ul>
        </nav>

        <img
          className="logout-button"
          src={LogoutIcon}
          onClick={logOut}
          alt="Log-out"
        />
      </div>

      <div className="main">
        <div className="header-bar">
          <h2>
            {" "}
            Welcome back, <span>{user.nome}</span> !
          </h2>
          <div className="icons">
            <div className="search icon-box">
              <img src={SearchIcon} alt="Search Icon" />
            </div>
            <div className="notification icon-box">
              {/* NOTIFICATIONS QUANTITY */}
              <div className="notification-quantity">10</div>
              <img src={NotificationIcon} alt="Notification Icon" />
            </div>
          </div>
        </div>

        <div className="expences">
          <h2>Expenses</h2>
          <ul>
            <li>
              <h4>Salário</h4>
              <del>R$ 2.000,00</del>
            </li>
            <li>
              <h4>Cartão</h4>
              <del>R$ 2.000,00</del>
            </li>
            <li>
              <h4>Outros gastos</h4>
              <del>R$ 2.000,00</del>
            </li>
          </ul>
          <div className="banner">
            <p>
              Recomend <b>Budget Buddy</b> and get<br></br> bonuses
            </p>
            <img src={MiniBanner} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default pessoaFisica;
