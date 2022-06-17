import React from 'react';
import { Link } from 'react-router-dom';
import userImg4 from '../../../assets/images/user4.png'
import { Post } from '../../../types';
import '../styles.css'

interface PostFeedProps {
    posts: Post[];
  }

const FeedContent3: React.FC = () => {


    //retorna dados - fetch da api
    //criar uma funcao
    // 




    return (
        <main className="post-container">
            <div className="user-img-feed">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg4} alt="foto do usuario" />
                </Link>
            </div>
            <div className="feed-content">
                    <div className='userInfo'>
                        <p className='userNameApart'>Nat - apê 32</p>
                        <p className='userDateTime'>02/06/2022 19:00</p>
                    </div>
                <div className="comment">
                    Alô vizinhos, acabei de me mudar e vou fazer uma festinha no sábado às 18h, espero vocês!
                </div>
            </div>
        </main>
    )
}

export default FeedContent3