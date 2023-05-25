//React-Router-Dom
import { BrowserRouter , Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import pessoaFisica from "../pages/pessoaFisica";

function Private( { Item }) {
    const logado = false
    return logado > 0 ? < Item /> : <Home />
}

function Rotas() {

    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route exact path="/" element={<Private Item={pessoaFisica} />}/>
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default Rotas