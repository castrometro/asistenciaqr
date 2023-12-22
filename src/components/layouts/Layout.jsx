import React from "react";
import {Layout} from 'antd';
const { Header, Footer,Content } = Layout;
const Layoutmain = ({ children }) => {
  return (
    <Layout>
    <Content>{children}</Content>
    </Layout>
  );
} 
export default Layoutmain;    