import MainBtn from "../../Global/MainBtn/MainBtn";

function Dashboard(props) {
  return (
    <section className="s-dashboard">
      <div className="container">
        <div className="text">
          <h2>Com um dashboard fácil de usar!</h2>
          <p>
            Agora você pode visualizar todas as suas despesas e receitas em um
            só lugar. Tome decisões financeiras mais informadas e comece a
            alcançar suas metas hoje mesmo!
          </p>
          <MainBtn text="Cadastre-se" />
        </div>
        <img src="../../../public/assets/img/print-dashboard.jpg" alt="" />
      </div>
    </section>
  );
}

export default Dashboard;
