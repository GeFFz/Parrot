import React from 'react';
import Container from '../../components/Container'
import ContainerPerfilSemPost from '../../components/ContainerPerfilSemPost';
import Header from '../../components/Header'
import PerfilUser from '../../components/PerfilUser'

const Perfil: React.FC = () => {
    return (
        <Container>
            <Header />
            <PerfilUser />
            <ContainerPerfilSemPost />
        </Container>
        
    )
}

export default Perfil;