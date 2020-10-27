import { Button } from 'antd';
import React from 'react';
import Terms from '../containers/Terms';
import Wraper from '../containers/Wrapper'
import { useRouter } from 'next/router';

const TermsPage = () =>{
  const router = useRouter();
  const goBack = () => {
     router.push("/login");
  }

  return (
     <Wraper>
        <Terms/>
        <Button onClick={ goBack }>Go back</Button>
     </Wraper> 
  );
};

export default TermsPage;