import 'antd/dist/antd.css';
import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox, notification } from 'antd';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Register = () =>{   
  const router = useRouter();
  const [state, setState] = useState( {} );

  useEffect(() => {
    console.log("useEffect")
      return () =>    {
          console.log(`Page: ${router.route} was changed!`);
          setState({});
        }
  }, []);

  const goBack = () => {
      router.push("/login");
  }

  const onFinish = (values) => {
    setState({ 
        name: values.firstName,
        lastName: values.LastName,
        age: values.Age,
        email: values.EmailAddress,
        password: values.EmailAddress
    });

    notification.open({
      message: 'Data inserted in FORM:',
      description:
        `FirstName: ${state.name}
         LastName: ${state.lastName}
         Age: ${state.age}
         EmailAddress: ${state.email}
         Password: ${state.password}`,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <div className="container" id="centered">
    <Form onFinish={onFinish}>
      <Form.Item label="FirstName" name="firstName">
        <Input />
      </Form.Item>

      <Form.Item label="LastName" name="LastName">
        <Input />
      </Form.Item>

      <Form.Item label="Age" name="Age">
        <Input />
      </Form.Item>

      <Form.Item label="EmailAddress" name="EmailAddress">
        <Input />
      </Form.Item>

      <Form.Item label="Password"name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={ goBack }>
          Go Back
        </Button>
      </Form.Item>
    </Form>
    <style jsx>
          {`
          #centered{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .container {
            border-radius: 15px;
            border: 3px solid #034f84;
            padding: 10px;
            width: 400px;
            display: flex;
            flex-direction: column;
            align-items: left;
          }
        `}
        </style>
       </div>
  );
}

export default Register;