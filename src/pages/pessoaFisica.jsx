import useAuth from "../hooks/useAuth"

function pessoaFisica() {
    const {logOut, user} = useAuth()

    return (
        <div>
            <h1>teste</h1>
            <p>{user.nome}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <button onClick={logOut}>Sair</button>
        </div>
    )
}

export default pessoaFisica