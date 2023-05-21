import React from "react";
import Dashboard from "../../components/Home/Dashboard/Dashboard";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import ModalLogin from "../../components/Home/ModalLogin/ModalLogin";
import Partners from "../../components/Home/Partners/Partners";

function Home() {
  const [openModal, setOpenModal] = React.useState(true);

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal ? <ModalLogin onClick={handleCloseModal} /> : null}
      <Header loginOnClick={handleCloseModal} />
      <Hero />
      <Partners />
      <Dashboard />
      <Footer />
      <ModalLogin />
    </>
  );
}

export default Home;
