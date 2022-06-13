import React from 'react';
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

// import { Container } from './styles';

const Login: React.FC = () => {
    return (
        <main>
            <div className="container-login">
                <div className="login">
                    <img className='logo' src={logo} alt='logo parrot' />

                    <form className='form-login'>
                        <h2>Login</h2>
                        <div>
                            <input type="Email" placeholder="E-mail"></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Senha"></input>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        <div>
                            <a href='#'>cadastre-se</a>
                        </div>
                    </form>


                </div>

            </div>

        </main>
    );
}

export default Login;