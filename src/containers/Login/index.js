import 'antd/dist/antd.css';
import React from 'react';
import { Button, Input } from 'antd';


const Login = () =>{
    return (
        <div className="container" id="centered">
          <label className="element">Email address </label>
          <Input className="element" placeholder="Enter email" type="email" required/>
          <label className="element" >Password </label>
          <Input className="element" placeholder="Enter password" type="password" required/>
          <Button>LOG IN</Button>
        <style jsx>
          {`
          #centered{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .container {
            border-radius: 25px;
            border: 10px solid #034f84;
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