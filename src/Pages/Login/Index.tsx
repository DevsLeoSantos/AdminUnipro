//Bibliotecas
import React, { useState } from "react"
import CampoLogin from "../../Components/CampoLogin";

//Estilos
import "./Login.css"



const Login = () => {
    const [userAdm, setUserAdm] = useState("");
    const [passwordAdm, setPasswordAdm] = useState("");


    const AoEntrar = (e: any) => {
        e.preventDefault();
        setUserAdm("");
        setPasswordAdm("");
    }


    return (
        <div id="login">
            <form onSubmit={AoEntrar} className="dados">
                <div className="dados1">
                    <h2>Login</h2>
                </div>
                <div className="card-content">
                    <CampoLogin
                        htmlFor="User"
                        Label="Usuário"
                        Type="text"
                        Id="user"
                        Digitado={userAdm}
                        aoAlterar={(Digitado: React.SetStateAction<string>) => setUserAdm(Digitado)}
                    />
                    <CampoLogin
                        htmlFor="password"
                        Label="Senha"
                        Type="password"
                        Id="password"
                        Digitado={passwordAdm}
                        aoAlterar={(Digitado: React.SetStateAction<string>) => setPasswordAdm(Digitado)}
                    />

                </div>
                <div className="login">
                    <button> Entrar </button>
                    {/* <a href="#" className="recuperar_senha">Esqueceu a senha?</a> */}
                </div>

            </form>
        </div>
    )
}

export default Login