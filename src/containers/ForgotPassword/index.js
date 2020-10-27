import React, { useEffect,useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useRouter } from 'next/router';


const ForgotPassword = () =>{
    const router = useRouter();
    useEffect(() => {
        return () => {
            console.log(`Page: ${router.route} was changed!`);
        }
    }, []);

    console.log(`Page loaded: ${router.route}!`);
    
    const goBack = () => {
        router.push("/login");
    }

    return (
        <div className="container" id="centered">
            <Form>
                <Form.Item label="Email address" name="EmailAddress">
                <Input />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="button"> Send </Button>
                  <Button htmlType="button" onClick= { goBack }> Go back </Button>
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

export default ForgotPassword;