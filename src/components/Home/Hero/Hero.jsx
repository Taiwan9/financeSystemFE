import React from "react";
import MainBtn from "../../Global/MainBtn/MainBtn";

function Hero() {
  return (
    <section className="s-hero">
      <div className="container">
        <img src="../../../public/assets/img/piggy.png" alt="piggy" />
        <div className="text">
          <h1>Gerencie suas finanças de uma forma fácil e ágil!</h1>
          <p>
            Quer assumir o controle de suas finanças e alcançar seus objetivos
            financeiros? Agora com o <strong>BudgetBuddy</strong> você consegue!
          </p>
          <MainBtn text="CADASTRE-SE" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
