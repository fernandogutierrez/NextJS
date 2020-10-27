import { Button } from 'antd';
import React from 'react';
import Terms from '../containers/Terms';
import Wraper from '../containers/Wrapper'

const TermsPage = () =>{
  return (
     <Wraper>
        <Terms/>
        <Button>Go back</Button>
     </Wraper> 
  );
};

export default TermsPage;
