import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-feed.png';
import './styles.css'

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-area">
        <img src={logo} alt ="parrot logo"/>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <p>Olá,</p>
            <Link to="/perfil" className="menu-user">Usuário |</Link>
          </li>
          <li >
            <Link to="/" className="menu-sair">sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;