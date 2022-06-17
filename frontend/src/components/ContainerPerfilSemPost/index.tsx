import React from 'react';
import logo from '../../assets/images/logo-perfil.png'
import './styles.css'

const ContainerPerfilSemPost: React.FC = () => {
    return (
        <div className="containerPerfilSemPost">
            <h2>Você ainda não fez nenhuma publicação :(</h2>
            <img src={logo} alt="logo parrot" />
        </div>
    )
}

export default ContainerPerfilSemPost