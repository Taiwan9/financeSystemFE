//react
import { useState } from "react"

//layout
import Header from "../components/layout/Header/Header"
import Container from "../components/layout/Container/Container"
import Footer from "../components/layout/Footer/Footer"

//componentes
import ModalLogin from "../components/Global/ModalLogin/ModalLogin";
import ModalCadastro from "../components/Global/ModalCadastro/ModalCadastro";
import Hero from "../components/Home/Hero/Hero"
import Partners from "../components/Home/Partners/Partners"
import Dashboard from "../components/Home/Dashboard/Dashboard"


function Home() {
    const [openModal, setOpenModal] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };

    const [openModalCad, setOpenModalCad] = useState(false)

    const handleCloseModalCad = () => {
        setOpenModalCad(!openModalCad)
    }
    return (
        <>
        {openModal ? <ModalLogin onClick={handleCloseModal} /> : null}
        {openModalCad ? <ModalCadastro onClick={handleCloseModalCad} /> : null}
        <Header loginOnClick={handleCloseModal} CadastrarOnClick={handleCloseModalCad} />
        <Container>
            <Hero/>
            <Partners/>
            <Dashboard/>
        </Container>
        <Footer/>
        </>
    )
}

export default Home