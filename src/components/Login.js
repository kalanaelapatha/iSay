import React from'react';
// import { Redirect } from "react-router-dom";
import { Route, Redirect } from 'react-router'
import { Form, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';
import axios from 'axios';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Login  = ({config,onClick}) => {


  const onFinish = values => {

     let userName=values.username;
     let password=values.password;
     let nic= values.nic;



    axios.post('http://localhost:4000/iSay_api/login',{
      userName: userName,
      password: password,
      nic:nic


    })
        .then(function (response) {
          console.log('Responce is:'+ response);
        })
        .catch(function (error) {
          console.log(error);
        });


  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };



  return (


    <div className="site-card-border-less-wrapper" style={{display:'flex',alignItems:'center', justifyContent:'center',margin:'0 24 0 24'}}>
       <Card bordered={true} style={{ width: 600 ,marginTop:'20%' }}>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 600 ,margin:'0 4rem 0 -5rem ' }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="NIC"
        name="nic"
        rules={[{ required: true, message: 'Please input your NIC!' }]}
      >
        <Input  />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>

      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
                onClick={onClick}
        >Sign In
        </Button>




      </Form.Item>
    </Form>

    </Card>

    </div>
  );
};

export default Login;