import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userImg from '../../assets/images/user1.png'
import { createPost } from '../../services/API/posts';
import { RootState } from '../../store';
import { addNewPost } from '../../store/post';
import './styles.css'

const NewPost: React.FC = () => {

    const id = useSelector((state: RootState) => state.usersSlice.id) as number;
    const name  = useSelector((state: RootState) => state.usersSlice.name) as string;
    const email = useSelector((state: RootState) => state.usersSlice.email) as string;
    const apartment = useSelector((state: RootState) => state.usersSlice.apartment) as number;
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: '',
            user_name: '',
            user_email: '',
            user_apartment: '',
            comentario: '',
            user_id: ''
        },
        onSubmit: async values => {
            const data = await createPost({ ...values, user_id: id, user_apartment: apartment, user_email: email, user_name: name });
            dispatch(addNewPost({ post: data }));
        }
    })




    return (
        <main className="post-container">
            <div className="user-img">
                <Link to="/perfil" className="menu-user">
                    <img src={userImg} alt="foto do usuario" />
                </Link>
            </div>
            <div className="post">
                <form onSubmit={formik.handleChange}>
                    <div>
                        <textarea className="post-area" placeholder="Deixe aqui seu comentário" value={formik.values.comentario} onChange={formik.handleChange} name='message' id='message'></textarea>
                    </div>
                    <div className="button-publicar">
                        <button type='submit'>publicar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default NewPost