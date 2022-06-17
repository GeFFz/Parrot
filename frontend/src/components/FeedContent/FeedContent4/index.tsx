import React from 'react';
import { Link } from 'react-router-dom';
import userImg5 from '../../../assets/images/user5.png'
import { Post } from '../../../types';
import '../styles.css'

interface PostFeedProps {
    posts: Post[];
  }

const FeedContent4: React.FC = () => {


    //retorna dados - fetch da api
    //criar uma funcao
    // 




    return (
        <main className="post-container">
            <div className="user-img-feed">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg5} alt="foto do usuario" />
                </Link>
            </div>
            <div className="feed-content">
                    <div className='userInfo'>
                        <p className='userNameApart'>Dani - apê 13</p>
                        <p className='userDateTime'>24/05/2022 18:57</p>
                    </div>
                <div className="comment">
                    AAAAAAAAAAA tô fazendo bolo e esqueci de comprar açucar, rs alguém tem um pouco pra me trazer? Pode até levar uma parte do bolo se quiser haha                    
                </div>
            </div>
        </main>
    )
}

export default FeedContent4