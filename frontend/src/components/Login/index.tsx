import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { Button, Form } from 'react-bootstrap';

// import { Container } from './styles';

const FormLogin: React.FC = () => (

    <main className="background-img">
        <div className="container-FormLogin">
            <div className="login">
                <img className='logo' src={logo} alt="logo" />

                <div >
                    <h4 className='titulo-login'>Login</h4>
                </div>
                <div >
                    <input className='input' type="Email" placeholder="email"></input>
                </div>
                <div >
                    <input className='input' type="password" placeholder="senha"></input>
                </div>
                <div>
                <Link to="/" className="link-button-entrar">entrar </Link>
                </div>
                <div>
                    <Link to="/cadastro" className="link-cadastro">cadastre-se</Link>
                </div>
            </div>
        </div>
    </main>


)

export default FormLogin;
