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

const Register = ( {name = "/register"} ) =>{   
  const router = useRouter();
  const [pageState, setPageState] = useState({ name });

  useEffect(() => {
    console.log("useEffect")
    initialState();
      return () =>    {
          console.log(`Page: ${router.route} was changed!`);
        }
  }, []);

  const initialState = async () =>{
      setPageState({ name: router.route });
  }
  console.log(`Page loaded: ${router.route}!`);
  console.log(pageState);

  const goBack = () => {
      router.push("/login");
  }

  const onFinish = (values) => {
    console.log('Success:', values.firstName);

    notification.open({
      message: 'Data inserted in FORM:',
      description:
        `FirstName: ${values.firstName}
         LastName: ${values.LastName}
         Age: ${values.Age}
         EmailAddress: ${values.EmailAddress}
         Password: ${values.Password}`,
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
        <Button htmlType="button" onClick={goBack}>
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