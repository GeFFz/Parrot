import React from 'react';
import "./styles.css"
// import * as S from "./styled";
import { Link } from 'react-router-dom';
import background from "../../assets/images/background.png"
import logo from "../../assets/images/logo.png"
import { Button, Form } from 'react-bootstrap';

// import { Container } from './styles';

const Login: React.FC = () => (
    <div className="container-login">
        <div className="login">
            <img className='logo' src={logo} alt="logo" />
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

)

export default Login;








// <S.Body>
// <S.Container>
//     <S.Logo src={logo} />
//     <span>LOGIN</span>
//     <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//             Submit
//         </Button>
//     </Form>
// </S.Container>
// </S.Body>