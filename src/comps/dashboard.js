import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from '../logoo.png'
import Dash from './Dash';
import My_posts from './My_posts';
import Login from './Login';
import Post_food from './post-food';
import Show from './show_food';
import AVShow from './available';
import UserProfile from './UserProfile';

const { Header, Content, Footer, Sider } = Layout;
 


function Dashboard(){
  let navigate = useNavigate();
  const token =   localStorage.getItem('USER')
  const  logout =()=>{
    localStorage.removeItem("USER") 
     navigate('/',{replace:true})
   
 }


const [pass,passprops]=useState("Dashboard");


const [collapsed,setcollapsed]=useState(false);
const toggle = () => {
  this.setState({
    collapsed: !collapsed,
  });
};
 
 if(token){

    return(
      <div>


<div className='logout'>
    <button onClick={logout}>Logout</button></div>


        <Layout  style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <img src={logo} width={"200"} height={"60"} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={()=>passprops("Dashboard")} icon={<UserOutlined />}>
            Dashboard
            </Menu.Item>
            <Menu.Item key="4" onClick={()=>passprops("Profile")} icon={<UploadOutlined />}>
            Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>passprops("Post Food")} icon={<VideoCameraOutlined />}>
            Post Food
            </Menu.Item>
            <Menu.Item key="3" onClick={()=>passprops("Food")} icon={<UploadOutlined />}>
            Food
            </Menu.Item>
            <Menu.Item key="5" onClick={()=>passprops("AVFood")} icon={<UploadOutlined />}>
            Available Food
            </Menu.Item>
            <Menu.Item key="6" onClick={()=>passprops("MYPost")} icon={<UploadOutlined />}>
            My Postings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           


            <DashBoardContent pagename={pass}/>
          </Content>


        </Layout>


      </Layout>
      </div>
    )
 }
 else{

  alert('Please Login first..');
   
return (<Login/>);
 }
}



function DashBoardContent(props){
  if(props.pagename==="Dashboard"){
    return(
      <Dash/>
    )
  }
  if(props.pagename==="AVFood"){
    return(
      <AVShow/>
    )
  }
  if(props.pagename==="MYPost"){
    return(
      <My_posts/>
    )
  }
  if(props.pagename==="Post Food"){
    return(
      <Post_food/>
    )
  }

  if(props.pagename==="Food"){
    return(
      <Show/>
    )
  }
  if(props.pagename==="Profile"){
    return(
      <UserProfile/>
    )
  }
  return(
    <div
    className="site-layout-background"
    style={{
      padding: 24,
      minHeight: 662,
    }}
  >
    
    Home
  </div>
  )
}

export default Dashboard;