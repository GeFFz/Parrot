import React from 'react';
import { Link } from 'react-router-dom';
import userImg3 from '../../../assets/images/user3.png'
import { Post } from '../../../types';
import '../styles.css'

interface PostFeedProps {
    posts: Post[];
  }

const FeedContent2: React.FC = () => {


    //retorna dados - fetch da api
    //criar uma funcao
    // 




    return (
        <main className="post-container">
            <div className="user-img-feed">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg3} alt="foto do usuario" />
                </Link>
            </div>
            <div className="feed-content">
                    <div className='userInfo'>
                        <p className='userNameApart'>Claudio - apê 81</p>
                        <p className='userDateTime'>07/06/2022 09:41</p>
                    </div>
                <div className="comment">
                    Contratei um personal trainer e quero um parceiro pra fazer treinos semanais e dividir o custo, quem anima? :D
                </div>
            </div>
        </main>
    )
}

export default FeedContent2