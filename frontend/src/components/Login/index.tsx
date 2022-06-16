import React from 'react';
import "./styles-login.css"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { Alert, Button, Form } from 'react-bootstrap';
import { loginUsuario } from '../../services/API/auth';
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
          password: ''
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),
          password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),
        }),
        onSubmit: async values => {
          const { accessToken, user } = await loginUsuario(values);
          dispatch(signIn({accessToken, permission: user.permission, user}))
          //@ts-ignore
          baseAPI.defaults.headers["Authorization"] = `Bearer ${accessToken}`
          navigate("/feed")
        }
      });

      return(

        <div className="background-login">
        <div className="containerForm-login">
          <div className="divImage">
            <img src={logo} alt="logo" />
          </div>
          <h3 className='titulo-login'>LOGIN</h3>
          <Form className="form-login" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-1 espaco-login">
              <Form.Control className='linha-login' id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email} />
            </Form.Group>
            <Form.Group className="mb-1 espaco-login" >
              <Form.Control className='linha-login' id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} isInvalid={formik.touched.password && !!formik.errors.password} isValid={formik.touched.password && !formik.errors.password} />
            </Form.Group>
            <Button variant="" type="submit" className='botao-login'>
              entrar
            </Button>
            <div>
              <a className="link-login" href="/cadastro">cadastre-se</a>
            </div>
            {formik.errors.email && formik.touched.email 
              && ( 
                <Alert style={{marginTop: 15}} variant="danger">
                  {formik.errors.email}
                </Alert> 
              )}
            {formik.errors.password && formik.touched.password 
              && ( 
                <Alert style={{marginTop: 15}} variant="danger">
                  {formik.errors.password}
                </Alert> 
              )}
          </Form>
        </div>
      </div>

       
    )

}

export default FormLogin;