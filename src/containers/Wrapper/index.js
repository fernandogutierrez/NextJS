import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = Layout;


const Wrapper = ({ children }) =>{
    const router = useRouter();

    return(
            <Layout className="layout">
        <Header>
        <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{router.route.replace('/','')}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 All rigths reserved</Footer>
    </Layout>

    )
    
  
    
}

export default Wrapper;