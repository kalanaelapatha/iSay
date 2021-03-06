import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";


import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Login from '../components/Login';
import Register from '../components/Register';
import AddPolls from '../components/AddPolls';
import AvailablePolls from '../components/AvailablePolls';
import {submit} from "../reducer/action";
import Button from "antd/es/button";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const backgroundImage=require('../assets/iSayBG.jpg');



const MainView = ({config,submitClick,loginClick,logoutClick}) =>{
    console.log(config)

    if (config.isLogged === false) {
        return(
            <>
                <div style={{height:768,backgroundImage:`url(${backgroundImage})`}} >
                    <Login config={config} onClick={loginClick}/>
                    <marquee><h2 style={{fontSize:'30px'}}>Sri Lanka's First Online Legislative Assistance Platform</h2></marquee>
                </div>
                <Router>
                    <Route path="/register" component={Register} />
                </Router>

            </>

        )

    }

    return(
        <div style={{ backgroundColor: '#ffa000' }}>
            <Router>

                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                                    <UserOutlined />
                                                    Polls
                              </span>
                                    }
                                >
                                    <Menu.Item key="1"> <Link to="/allpolls">Current Polls</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/addPolls" > Add Polls</Link> Add Polls</Menu.Item>
                                    <Menu.Item key="3">Results</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                                    <LaptopOutlined />
                                                    Settings
                              </span>
                                    }
                                >
                                    <Menu.Item key="5">Profile</Menu.Item>
                                    <Menu.Item key="6"
                                    onClick={logoutClick}>Log Out</Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>

                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 800,
                                }}
                            >
                                <Route path="/addPolls" component={AddPolls} />
                                <Route path="/allpolls" component={AvailablePolls} />

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </Router>

        </div>


    );

}



export default MainView;

