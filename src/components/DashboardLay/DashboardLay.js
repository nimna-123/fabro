import React, { useState } from 'react';
import Classes from './DashboardLayout.module.css'


import { CgNotes } from 'react-icons/cg'

import {Layout, Menu, theme } from 'antd';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg'
import {FaAngleRight} from 'react-icons/fa'
import Profile from '../../assets/images/profile.png'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
    getItem('Orders', '1', <CgNotes color='#E1B17D' size={25} />),

  ];
const DashboardLayout = (props) =>{
    const history = useHistory()
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const menuClickHandler = (e) =>{
      if(e.key=== '1'){
            history.push('/orders')
          
      }else if(e.key === '2'){
            history.push('/track')
           
      }else if(e.key === '3'){
            history.push('/triplog')
      }else if(e.key === '6'){
      history.push('/busstaff')
      }
      else if(e.key === '8'){
        history.push('/adminStaff')
      }
      else if(e.key === '9'){
        history.push('/masterStudentList')
      }
      else if(e.key === '10'){
        history.push('/masterBusList')
      }
      else if(e.key === '11'){
        history.push('/classList')
      }
      else if(e.key === '12'){
        history.push('/routeList')
      }
      else if(e.key === '13'){
        history.push('/notification')
      }
      else if(e.key === '14'){
        history.push('/roles')
      }
      else if(e.key === '15'){
        history.push('/vendor')
      }
    }
    return(
     <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={300} style={{background:'#FFFFFF'}}>
                    <div
                        style={{
                        height: 32,
                        background: '#FFFFFF',
                        }}
                        className={Classes.Logo}
                    ><img src={Logo} alt='dashLogo'/></div>
                    <Menu  selectedKeys={props.selectKey}  mode="inline" items={items}  
                    style={{background:'#FFFFFF',color:'#300508',fontSize:'16px'}} onClick={menuClickHandler}/>
             </Sider>
            <Layout className="site-layout" >
                  <Header
                    style={{
                      padding: 0,
                      background: '#FFFFFF',
                      marginLeft:20,
                      minHeight:100
                      
                    }}
                    className='site-head'
                  >
                    <div className={Classes.Header}>
                        <img src={Profile} alt='profile'/>
                    </div>
                       
                        <div className={Classes.NavLinks}>
                            <p>Home<FaAngleRight size={20}/>Orders</p>
                           
                        </div>
                   
                  </Header>
                <Content
                  style={{ background:'#EBEBEB',padding:'20px' }}
                >
                          {props.children}
                </Content>
              
            </Layout>
    </Layout>

    )
}
export default DashboardLayout