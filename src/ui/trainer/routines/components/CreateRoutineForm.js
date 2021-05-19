import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

import { Form, Input, Button, InputNumber, Select } from 'antd';


const AssignProfileForm = (props) => {


    return (
        <>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.onSubmitRoutine}
                layout={'vertical'}
                size={'small'}
            >
                <Form.Item
                    label="Nombre de la clase:"
                    name="name"
                    rules={[{ required: true, message: 'Por favor ingrese un nombre de la clase' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="descripcion:"
                    name="description"
                    rules={[{ required: true, message: 'Por favor ingrese la descripcion' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="aforo:"
                    name="capacity"
                    rules={[{ required: true, type: 'number', message: 'Por favor ingrese un aforo valido', min: 1 }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Inicio:"
                    name="enter"
                    rules={[{ required: true, message: 'Porfavor ingrese un inicio' }]}>
                    <Input />
                    
                </Form.Item>
                <Form.Item
                    label="Fin::"
                    name="exit"
                    rules={[{ required: true, message: 'Por favor ingrese un fin' }]}
                >
                    <Input />
                </Form.Item>
                <br />
                <Form.Item >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ background: "#ffbc02", color: "#231F20", borderColor: "#e3a765" }}
                    >
                        Crear
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AssignProfileForm;