import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../assets/images/user1.png'
import './styles.css'

const NewPost: React.FC = () => {
    return (
        <main className="post-container">
            <div className="user-img">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg} alt="foto do usuario" />
                </Link>
            </div>
            <div className="post">
                <div>
                    <textarea name='message'id='message'/>
                </div>
                <div className="button-publicar">
                    <button type='submit'>publicar</button>
                </div>
            </div>
        </main>
    )
}

export default NewPost