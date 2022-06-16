import React, { FormEvent, useState } from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { Button, Form } from 'react-bootstrap';
import { cadastroUsuario } from '../../services/API/cadastroUser';

// import { Container } from './styles';


export default function FormularioCadastro(){
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [apartment, setApartment] = useState<number>(0);

    const cadastro = async (event: FormEvent) =>{
        event.preventDefault();

        const payload = {
            name,
            email,
            password,
            apartment,
        };

        try{
            const response = await cadastroUsuario(payload);

            if(response.status != 201){
                return alert("Deu algo errado");
            }
            alert("Cadastro efetuado com sucesso");
            
        }catch(error){
            alert("Erro de catch");
            }
    };

    return (

        <main className="background-img">
        <div className="container-FormCadastro">
            <div className="cadastro">
                <img className='logo' src={logo} alt="logo" />
                <div >
                    <h4 className='titulo-cadastro'>Cadastro</h4>
                </div>
                <div>
                    <form onSubmit={cadastro} className="form-cadastro">
                    <div >
                        <input 
                        className='input' 
                        type="text"
                        value={name} 
                        onChange={(event) => setName(event.target.value)} 
                        placeholder="nome"
                        />
                    </div>
                    <div >
                        <input className='input' 
                        type="Email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="email"
                        />
                    </div>
                    <div >
                        <input 
                        className='input' 
                        type="password" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="senha"
                        />
                    </div>
                    <div >
                        <input 
                        className='input' 
                        type="password" 
                        value={passwordConfirm} 
                        onChange={(event) => setPasswordConfirm(event.target.value)}
                        placeholder="confirmar senha"
                        />
                        
                    </div>
                    <div >
                        <input 
                        className='input' 
                        type="number" 
                        value={apartment} 
                        onChange={(event) => setApartment(event.target.value)}
                        placeholder="unidade/apartamento"
                        />
                    </div>
                    <div>
                        <button type='submit'>
                            <Link to="/login" className="link-button-enviar">enviar</Link>
                        </button>                                        
                    </div>
                </form>
                </div>
                

                
                
                
            </div>
        </div>
    </main>
    )






}











// const FormCadastro: React.FC = () => (



//     <main className="background-img">
//         <div className="container-FormCadastro">
//             <div className="cadastro">
//                 <img className='logo' src={logo} alt="logo" />

//                 <div >
//                     <h4 className='titulo-cadastro'>Cadastro</h4>
//                 </div>
//                 <div >
//                     <input className='input' type="text" placeholder="nome"></input>
//                 </div>
//                 <div >
//                     <input className='input' type="Email" placeholder="email"></input>
//                 </div>
//                 <div >
//                     <input className='input' type="password" placeholder="senha"></input>
//                 </div>
//                 <div >
//                     <input className='input' type="password" placeholder="confirmar senha"></input>
//                 </div>
//                 <div >
//                     <input className='input' type="number" placeholder="unidade/apartamento"></input>
//                 </div>
//                 <div >
//                     <input className='input' type="link" placeholder="link da foto"></input>
//                 </div>
//                 <div>
//                 <Link to="/login" className="link-button-enviar">enviar</Link>                    
//                 </div>
                
//             </div>
//         </div>
//     </main>


// )

// export default FormCadastro;