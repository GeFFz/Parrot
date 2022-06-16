import React from 'react';
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { Alert, Button, Form } from 'react-bootstrap';
import { cadastroUsuario, loginUsuario } from '../../services/API/auth';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';  //ok
import * as Yup from 'yup';
import baseAPI from '../../services/API/api_parrot';
import { signIn } from '../../store/user';

// import { Container } from './styles';

const FormLogin: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),
            password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),
        }),
        onSubmit: async values => {
          const { accessToken, user } = await loginUsuario(values);
          dispatch(signIn({accessToken, permission: user.permission}))
          //@ts-ignore
          baseAPI.defaults.headers["Authorization"] = `Bearer ${accessToken}`
          navigate("/feed")
        }
      });

      return(

        <div className="background">
        <div className="containerForm">
          <div className="divImage">
            <img src={logo} alt="logo" />
          </div>
          <h3>LOGIN</h3>
          <Form className="form" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-1 espaco">
              <Form.Control className='linha' id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email} />
            </Form.Group>
            <Form.Group className="mb-1 espaco" >
              <Form.Control className='linha' id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} isInvalid={formik.touched.password && !!formik.errors.password} isValid={formik.touched.password && !formik.errors.password} />
            </Form.Group>
            <Button variant="" type="submit" className='botao'>
              entrar
            </Button>
            <div>
              <a className="" href="/login">cadastre-se</a></div>
          </Form>
        </div>
      </div>

       
    )

}

export default FormLogin;