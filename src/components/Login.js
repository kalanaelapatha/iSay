import React from 'react';
import {Button, Card, Checkbox, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import { subscribeToTimer } from '../connector';
import { login } from '../connector';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export default class SignInComponent extends React.Component{
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    onFinish(e) {
        login(e)
        console.log(e);

        console.log('Success:');
    }

    onFinishFailed(){
        console.log('Failed:');
    }

    componentWillMount() {
        subscribeToTimer();
    }


    render() {
        return (

            <div className="site-card-border-less-wrapper"
                 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 24 0 24'}}>
                <Card bordered={true} style={{width: 600, marginTop: '20%'}}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        style={{width: 600, margin: '0 4rem 0 -5rem '}}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            label="NIC"
                            name="nic"
                            rules={[{required: true, message: 'Please input your NIC!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>

            </div>
        );
    }
}




