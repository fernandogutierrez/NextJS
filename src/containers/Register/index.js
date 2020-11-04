import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { REGISTER_USER_SUCCESS } from "../../redux/constants"

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Register = () =>{   
  const router = useRouter();
  const { register } = useSelector((store) =>{ return store });
  const dispatch = useDispatch()

  useEffect(() => {
      return () => {
          console.log(`Page: ${router.route} was changed!`);
        }
  }, []);

  const goBack = () => {
      router.push("/login");
  }

  const onFinish = (values) => {
    dispatch({ type: REGISTER_USER_SUCCESS,
               firstName: values.firstName,
               lastName: values.LastName,
               age: values.Age,
               email: values.EmailAddress,
               password: values.Password });
  };
  
  console.log(register);

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

      <Form.Item label="Password" name="Password">
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