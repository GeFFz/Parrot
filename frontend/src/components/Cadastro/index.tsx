import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { Button, Form } from 'react-bootstrap';

// import { Container } from './styles';

const FormCadastro: React.FC = () => (
    <main className="background-img">
        <div className="container-FormCadastro">
            <div className="cadastro">
                <img className='logo' src={logo} alt="logo" />

                <div >
                    <h4 className='titulo-cadastro'>Cadastro</h4>
                </div>
                <div >
                    <input className='input' type="text" placeholder="nome"></input>
                </div>
                <div >
                    <input className='input' type="Email" placeholder="email"></input>
                </div>
                <div >
                    <input className='input' type="password" placeholder="senha"></input>
                </div>
                <div >
                    <input className='input' type="password" placeholder="confirmar senha"></input>
                </div>
                <div >
                    <input className='input' type="number" placeholder="unidade/apartamento"></input>
                </div>
                <div >
                    <input className='input' type="link" placeholder="link da foto"></input>
                </div>
                <div>
                    <button className='input' type="submit">enviar</button>
                </div>
                
            </div>
        </div>
    </main>


)

export default FormCadastro;