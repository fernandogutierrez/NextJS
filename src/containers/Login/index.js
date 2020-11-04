import React, { useEffect, useState, useReducer } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";

const reducer = (state, action) => {
   return { ...state, ...action }
}

const Login = () =>{
    const router = useRouter();
    const { login } = useSelector((store) =>{ return store });
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            console.log(`Page: ${router.route} was changed!`);
        }
    }, []);

    console.log(`Page loaded: ${router.route}!`);
    
    const goToRegister = () => {
        router.push("/register");
    }
    
    const goTerms = () => {
      router.push("/terms");
    }

    const goForgotPass= () =>{
      router.push("/forgot_pass")
    }

    const onFinish = (values) => {
       dispatch({ type:"LOGIN_USER_SUCCESS", 
                  email: values.email,
                  password: values.password})
    };
    console.log(login) 

    return (
        <div className="container" id="centered">
            <Form onFinish={onFinish}>
                <Form.Item label="Email" name="email">
                <Input />
                </Form.Item>
        
                <Form.Item label="Password"name="password">
                <Input.Password />
                </Form.Item>
        
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Log In
                </Button>
                <Button htmlType="button" onClick={ goToRegister }>
                    Register
                </Button>
                <Button htmlType="button" onClick={ goTerms }>
                      Terms
                </Button>

                <Button htmlType="button" onClick={ goForgotPass }>
                      Forgot Password?
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
    )
}

export default Login;