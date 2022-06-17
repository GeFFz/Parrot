import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../assets/images/user1.png'
import './styles.css'

const PerfilUser: React.FC = (props) => {
    return (
        <main className="perfil-container">
            <div className="user-img">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg} alt="foto do usuario" />
                </Link>
            </div>
            <div className="infoContainer">
                <div className="perfilInfoUser">
                    <div className='perfilUserName'>Nome Sobrenome</div>
                    <div className='perfilUserApart'>apê 82</div>
                    <div className='perfilUserEmail'>user@mail.com</div>
                </div>
                <div className="buttonPerfil">
                    <button className="editarPerfil">editar</button>
                </div>
            </div>
        </main>
    )
}

export default PerfilUser