import React, { useEffect,useState } from 'react';
import { Button, Input } from 'antd';
import { useRouter } from 'next/router';

const fetch = {
    status: 200,
    body: {
        name: "Daniel",
        age: 26
    }
}

const Login = ({ name = "Fernando"} ) =>{
    const router = useRouter();
    const [state, setState] = useState({ name });

    useEffect(() => {
        console.log("useEffect")
        initialState();
        return () =>    {
            console.log(`Page: ${router.route} was changed!`);
        }
    }, []);

    const initialState = async () =>{
        setState({ name: fetch.body.name });
    }
    console.log(`Page: loaded ${router.route}!`);
    console.log(state);

    const goToRegister = () => {
        router.push("/register");
    }

    return (
        <div className="container" id="centered">
          <label className="element">Email address </label>
          <Input className="element" placeholder="Enter email" type="email" required/>
          <label className="element" >Password </label>
          <Input className="element" placeholder="Enter password" type="password" required/>
          <Button>LOG IN</Button>
          <Button onClick={ goToRegister }>REGISTER</Button>
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