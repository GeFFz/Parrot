import React from 'react';
import { Link } from 'react-router-dom';
import userImg2 from '../../assets/images/user2.png'
import { Post } from '../../types';
import './styles.css'

interface PostFeedProps {
    posts: Post[];
  }

const FeedContent: React.FC = () => {


    //retorna dados - fetch da api
    //criar uma funcao
    // 




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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt ut porro beatae provident, illum, inventore officiis quas asperiores ab ratione sunt, dolorum est. Distinctio tempora perferendis quod quam architecto.
                </div>
            </div>
        </main>
    )
}

export default FeedContent