import React from "react";

//React-Router-Dom
import { BrowserRouter as Router, Routes as Rotas, Route } from "react-router-dom";

//layout
import Header from "./components/layout/Header/Header";
import Container from "./components/layout/Container/Container";
import Footer from "./components/layout/Footer/Footer";

//Pages
import Home from "./pages/Home";
import ModalLogin from "./components/Home/ModalLogin/ModalLogin";

function App() {
  const [openModal, setOpenModal] = React.useState(true);

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal ? <ModalLogin onClick={handleCloseModal} /> : null}
      <Router>
        <Header loginOnClick={handleCloseModal} />

        <Container>
          <Rotas>
            <Route path="/" element={<Home />}></Route>
          </Rotas>
        </Container>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
