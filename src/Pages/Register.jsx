import React ,{useContext, useState}from 'react';
import "../Style/Register.css"
import {useNavigate} from "react-router";
import AuthContext from "../Context/AuthContext";
import AuthAPI from "../Service/AuthAPI";
import {toast} from "react-toastify";
import Field from "../Component/Field";

const Register = () => {
    const navigate = useNavigate();

    const {setIsAuthenticated} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
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
            await AuthAPI.register(credentials);
            setError("");
            navigate("/login");
        } catch (error) {
            setError("Les informations ne sont pas correctes");
            toast.error("Une Erreur est survenue");
        }
    }

    return (
        <>
            <div className={"globalRegister"}>
                <div className={"bgRegister"}>
                    <div className={"formRegister"}>
                        <div className={"paddingRegister"}>
                            <h1 className={"text-center"}>Inscription</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={"paddingRegister"}>
                                <Field
                                    label="Adresse email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    placeholder="Adresse email"
                                    error={error}
                                />
                            </div>

                            <div className={"paddingRegister"}>
                                <Field
                                    name="password"
                                    label="Mot de passe"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    type="password"
                                    error=""
                                />
                            </div>

                            <div className={"paddingRegister"}>
                                <Field
                                    label="Prénom"
                                    name="firstName"
                                    value={credentials.firstName}
                                    onChange={handleChange}
                                    placeholder="Prénom"
                                    error={error}
                                />
                            </div>

                            <div className={"paddingRegister"}>
                                <Field
                                    label="nom"
                                    name="lastName"
                                    value={credentials.lastName}
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    error={error}
                                />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btnRegister">
                                    M'inscrire
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;