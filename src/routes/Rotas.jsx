//React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//pages
import Home from "../pages/Home";
import pessoaFisica from "../pages/pessoaFisica";

//use context
import useAuth from "../hooks/useAuth";

function Private({ Item }) {
  const { logado } = useAuth();

  return logado > 0 ? <Item /> : <Home />;
}

function Rotas() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Private Item={pessoaFisica} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default Rotas;
