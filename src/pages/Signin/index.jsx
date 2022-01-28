import React, { Component } from 'react';
import { Form, Input, Button, Checkbox ,Card} from 'antd';
import signin from './index.module.css';


export default class Signin extends Component {

   onFinish = (values) => {
    console.log('Success:', values);
  };

 onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <Card title="欢迎登录" className={signin.form}>
      <Form  name="basic" 
            initialValues={{ remember: true,}} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} autoComplete="off">
        <Form.Item label="用户名" name="username" rules={[
          {
            required: true,
            message: '请输入你的用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label=" 密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
    </Card>
    )
  }
}
