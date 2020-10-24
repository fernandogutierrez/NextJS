import React from 'react';

const IndexPage = () =>{
    return (
        <div className="container" id="centered">
          <label className="element">Email address </label> 
          <input className="element" placeholder="Enter email" type="email" required/>
          <label className="element" >Password </label>
          <input className="element" placeholder="Enter password" type="password" required/>
          <button>Log In</button>

          <style jsx>{`
          .element{
            margin-top: 10px;  
          }

          button {
            border-radius: 4px;
            margin-top: 10px;
            height:20px;
            width:100px;
            margin-left: 1px;
          }
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

export default IndexPage
