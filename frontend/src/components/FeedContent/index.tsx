import React from 'react';
import { Link } from 'react-router-dom';
import userImg2 from '../../assets/images/user2.png'
import { Post } from '../../types';
import './styles.css'

interface PostFeedProps {
    posts: Post[];
  }

const FeedContent: React.FC = () => {


    return (
        <main className="post-container">
            <div className="user-img-feed">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg2} alt="foto do usuario" />
                </Link>
            </div>
            <div className="feed-content">
                    <div className='userInfo'>
                        <p className='userNameApart'>Vinicius - apê 42</p>
                        <p className='userDateTime'>10/06/2022 09:00</p>
                    </div>
                <div className="comment">
                    Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
                </div>
            </div>
        </main>
    )
}

export default FeedContent