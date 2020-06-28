import React ,{useState}from 'react';
import Posts from  './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import{Router,Link} from "@reach/router";
//import { Menu } from 'antd';
import UpdatePost from './UpdatePost';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MyPosts from './MyPosts';
import Particles from 'react-particles-js';


function PostApp(props){
    
    console.log(props.user)
    return (
        
          <div className="app_container">
              
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/postapp" className="mr-3"><i className="fa fa-comment"></i>Posts</Link>
                    </li>
                    {props.user && 
                       <li class="nav-item">
                        <Link to="/create_post" className="mr-3"><i class="fa fa-rocket" aria-hidden="true"></i>Create Posts</Link>
                       </li>

                    }
                     {props.user &&
                       <li class="nav-item">
                         <Link to={`/blogs/${props.user.uid}/posts`}><i className="fa fa-certificate"></i>My Posts</Link>
                       </li>
                    }
                </ul>
            </div>
            </nav>
              
                  
                  
                  <Posts/>
                  
       

          </div>
          
       
        
    )

}
export default PostApp;