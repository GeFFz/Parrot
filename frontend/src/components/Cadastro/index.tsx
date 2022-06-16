import React from 'react';
import "./styles-cadastro.css"
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

const FormCadastro: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          apartment: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Por favor preencha com seu nome'),
            email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),
            password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais').required('Por favor preencha com uma password'),
            apartment: Yup.string().required('Por favor preencha com o número do seu apartamento'),
        }),
        onSubmit: async values => {
          const { accessToken, user } = await cadastroUsuario(values);
          dispatch(signIn({accessToken, permission: user.permission}))
          //@ts-ignore
          baseAPI.defaults.headers["Authorization"] = `Bearer ${accessToken}`
          navigate("/login")
        }
      });

      return(

        <div className="background-cadastro">
        <div className="containerForm-cadastro">
          <div className="divImage-container">
            <img src={logo} alt="logo" />
          </div>
          <h3 className="titulo-cadastro">CADASTRO</h3>
          <Form className="form-cadastro" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-1 espaco-cadastro">
              <Form.Control className='linha-cadastro' id="name" type="text" placeholder="name" value={formik.values.name} onChange={formik.handleChange} isInvalid={formik.touched.name && !!formik.errors.name} isValid={formik.touched.name  && !formik.errors.name} />
            </Form.Group>
            <Form.Group className="mb-1 espaco-cadastro">
              <Form.Control className='linha-cadastro' id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email} />
            </Form.Group>
            <Form.Group className="mb-1 espaco-cadastro" >
              <Form.Control className='linha-cadastro' id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} isInvalid={formik.touched.password && !!formik.errors.password} isValid={formik.touched.password && !formik.errors.password} />
            </Form.Group>
            <Form.Group className="mb-1 espaco-cadastro" >
              <Form.Control className='linha-cadastro' id="confirmPassword" type="password"
                value={formik.values.confirmPassword} onChange={formik.handleChange} placeholder="confirmar senha" isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} isValid={formik.touched.confirmPassword && !formik.errors.apartment} />
            </Form.Group>
            <Form.Group className="mb-1 espaco-cadastro" >
              <Form.Control className='linha-cadastro' id="apartment" type="text" placeholder="unidade/apartamento" value={formik.values.apartment} onChange={formik.handleChange} isInvalid={formik.touched.apartment && !!formik.errors.apartment} isValid={formik.touched.apartment && !formik.errors.apartment} />
            </Form.Group>
            <Button variant="" type="submit" className='botao-cadastro'>
              entrar
            </Button>
            {formik.errors.email && formik.touched.email
              && (
                <Alert style={{ marginTop: 15 }} variant="danger">
                  {formik.errors.email}
                  {formik.errors.password && formik.touched.password
              && (
                <Alert style={{ marginTop: 15 }} variant="danger">
                  {formik.errors.password}
                </Alert>
              )}
            {formik.errors.confirmPassword && formik.touched.confirmPassword
              && (
                <Alert style={{ marginTop: 15 }} variant="danger">
                  {formik.errors.confirmPassword}
                </Alert>
              )}
                </Alert>
              )}
            <div>
              <a className="link-cadastro" href="/login">Voltar</a></div>
          </Form>
        </div>
      </div>

       
    )

}

export default FormCadastro;