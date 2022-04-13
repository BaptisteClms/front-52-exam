import React, {useContext, useState} from 'react';
import Field from "../Component/Field";
import axios from "axios";
import AuthAPI from "../Service/AuthAPI";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import AuthContext from "../Context/AuthContext";
import "../Style/Login.css"

const Login = () => {

    const navigate = useNavigate();

    const {setIsAuthenticated} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");

    // Gestion des champs
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await AuthAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            navigate("/laniste");
        } catch (error) {
            setError("Les informations ne sont pas correctes");
            toast.error("Une Erreur est survenue");
        }
    }

    return (
        <>
            <div className={"globalLogin"}>
                <div className={"bgLogin"}>
                    <div className={"formLogin"}>
                        <div className={"paddingLogin"}>
                            <h1 className={"text-center"}>Connexion</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={"paddingLogin"}>
                                <Field
                                    label="Adresse email"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    placeholder="Adresse email"
                                    error={error}
                                />
                            </div>

                            <div className={"paddingLogin"}>

                                <Field
                                    name="password"
                                    label="Mot de passe"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    type="password"
                                    error=""
                                />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btnLogin">
                                    Je me connecte
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
