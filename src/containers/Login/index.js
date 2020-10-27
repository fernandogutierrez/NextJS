import React, { useEffect,useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useRouter } from 'next/router';
import { SmileOutlined } from '@ant-design/icons';


const Login = () =>{
    const router = useRouter();
    const [state, setState] = useState();

    useEffect(() => {
        return () => {
            console.log(`Page: ${router.route} was changed!`);
        }
    }, []);

    console.log(`Page loaded: ${router.route}!`);
    
    const goToRegister = () => {
        router.push("/register");
    }

    const onFinish = (values) => {
        setState({ values });
        notification.open({
          message: 'Data inserted in FORM:',
          description:`${JSON.stringify(values)}`,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

    console.log(state);  

    return (
        <div className="container" id="centered">
            <Form onFinish={onFinish}>
                <Form.Item label="EmailAddress" name="EmailAddress">
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