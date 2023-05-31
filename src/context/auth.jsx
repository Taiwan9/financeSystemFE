import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    //ao recarregar a pagian verifica o token 
   useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const userData = localStorage.getItem("user_data")

        if(userToken && userData) {
            const objUser = JSON.parse(userData)
            const stringUserToken = JSON.stringify(objUser.token)

            const hasUser = stringUserToken === userToken ? objUser : null

            if(hasUser) {
                setUser(hasUser)
            }
        }
    }, [])

    const signIn = (email, password) => {
            try {
                fetch('http://localhost:5000/userCPF', {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((resp) => resp.json())
                  .then((data) => {
                    const hasUser = data.filter((user) => user.email === email)
                    if(hasUser.length) {
                        if(hasUser[0].email === email && hasUser[0].password === password) {
                            const token = hasUser[0].token
                            localStorage.setItem("user_token", JSON.stringify(token))
                            localStorage.setItem("user_data", JSON.stringify(hasUser[0]))
                            setUser(hasUser[0])
                            return
                        } else {
                            console.log("usuario ou senha incorretos")
                        }
                    } else {
                        console.log("usuario não cadastrado")
                    }
                  })

                
            } catch(error) {
                console.log(error)
            }
    }

    const signUp = (nome, email, password) => {
        try {
            //verificar se já tem o usuario
            fetch('http://localhost:5000/userCPF', {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((resp) => resp.json())
                  .then((data) => {
                    const hasUser = data.filter((user) => user.email === email)

                    if(hasUser.length) {
                        console.log("usuario já cadastrado")
                    }
                    else {
                        //cria o novo usuario
                        if(nome != null && email != null && password != null) {
                            console.log(nome + email + password)
                            const newUser = {
                                token: Math.random().toString(36).substring(2),
                                nome: nome,
                                email: email,
                                password: password
                            }
                            console.log(newUser)
    
                            fetch("http://localhost:5000/userCPF", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(newUser)
                            }).then((resp) => resp.json())
                              .then((dados) => console.log(dados))
                              .then(console.log("usuario cadastrado com sucesso"))
                          } else {
                            console.log("preencha os campos")
                          }
                        
                    }
                  })

        }
        catch (error) {
            console.log(error)
        }

        return

    }

    const logOut = () => {
        setUser(null)
        localStorage.clear("user_token")
        localStorage.clear("user_data")
    }

    return (
        <AuthContext.Provider value={{user, logado: !!user, signIn, signUp, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}