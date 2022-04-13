import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Laniste from "./Pages/Laniste";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Register/>}/>
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/laniste"} element={<Laniste/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
