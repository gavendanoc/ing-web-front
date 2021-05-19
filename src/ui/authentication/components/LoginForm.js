import React, { useEffect, useState } from 'react';

import exercise_girl from '../../../shared/images/exercise_girl.webp';

import { useHistory, Redirect} from 'react-router-dom';
import axios from 'axios';
import endpoint from '../../../server/server';

import { Form, Input, Button, Alert} from 'antd';

const LoginForm = (props) => {
    const [accesoAPI, setAccesoAPI] = useState({ tipo: '', url: '' , datos: ''});
    const [errorAPI, setErrorAPI] = useState(null);
    const [loading, setLoading] = useState(false);
    const [respuestaAPI, setRespuestaAPI] = useState({});
    const [isFinishQuery, setIsFinishQuery] = useState(false);

    const history = useHistory();

    useEffect(() => {
        const consultaAPI = async () => {
            if (accesoAPI.tipo === '') return;

            setErrorAPI(null);
            setLoading(true);

            try {
                // 'data' son los datos que se envían como request body
                // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
                const consulta = await axios({ method: accesoAPI.tipo, url: accesoAPI.url, data: accesoAPI.datos });
                console.log(consulta);
                if (consulta.data.status == true) {
                    localStorage.setItem('type', consulta.data.type);
                    localStorage.setItem('data', JSON.stringify(consulta.data.data));
                    localStorage.setItem('status', consulta.data.status);
                }
                setRespuestaAPI(consulta);
            } catch (error) {
                setErrorAPI(error.response);
            }
            
            setLoading(false);
            setIsFinishQuery(true);
        };

        consultaAPI();
    }, [accesoAPI.tipo, accesoAPI.url, accesoAPI.datos]);

    if (isFinishQuery && respuestaAPI.data.status) {
        console.log(respuestaAPI.data.status);
        history.push("/");
        window.location.reload();
    }

    const buttonLogin = (values) => {
        setAccesoAPI({ 
            tipo: 'POST', 
            url: `${endpoint}/user/login`, 
            datos:{ email: values.Email, password: values.Password }});
    }

    if (loading) {
        return (
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
    console.log(!errorAPI && isFinishQuery);

    /*
    if (error && error.message.substring(14, 18).trim() === "406") {
        history.push('/validate')
    }*/

    return (
        <>
            <h1 className="TitleFontTypeRoboto">My-Gym</h1>
            <img alt="react" src={exercise_girl} style={{ width: "70px" }} className="m-0" />
            { errorAPI && <Alert message={"Server Error"} type="error" /> }
            { (!errorAPI && isFinishQuery && !respuestaAPI.data.status) && <Alert message={respuestaAPI.data.message} type="error" /> }
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={buttonLogin}
                layout={'vertical'}
                size={'large'}
            >
                <Form.Item
                    label="Correo:"
                    name="Email"
                    rules={[{ required: true, type: 'email', message: 'Por favor ingrese un correo valido' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contraseña:"
                    name="Password"
                    rules={[{ required: true, message: 'Ingrese una contraseña' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ background: "#ffbc02", color: "#231F20", borderColor: "#e3a765" }}
                    >
                        Ingresar
            </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm;

/**
 *
            {(tokenError) &&
                <div className="alert alert-danger m-0" role="alert">
                    {tokenError.message.substring(19)}
                </div>
            }
            {(error) &&
                <div className="alert alert-danger m-0" role="alert">
                    {error.message.substring(19)}
                </div>
            }
 */