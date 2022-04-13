import React, {useEffect, useState} from 'react';
import "../Style/Laniste.css"
import LanisteAPI from "../Service/LanisteAPI";
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

const Laniste = () => {
    const [ludis, setLudis] = useState([]);

    const fetchLudis = async () => {
        const token = window.localStorage.getItem("authToken");
        try {
            const {id: id} = jwtDecode(token);
            const data = await LanisteAPI.findAll(id);
            console.log(data);
            setLudis(data);
            // setLoading(false);
        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    }

    useEffect(() => {
        fetchLudis().then(r => "r")
    }, [])

    console.log(ludis);
    return (
        <div className={"globalLaniste"}>
            <div>
                <div className={"centerLaniste d-flex justify-content-center align-items-center"}>
                    {ludis.map(ludis =>
                        <div className={"bgLaniste text-center"} key={ludis.id}>
                            <div>
                                {ludis.nameLudi}
                            </div>
                                <Link className={"btnLaniste"} to={"/ludi/" + ludis.id} >Voir info</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Laniste;