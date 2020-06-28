<<<<<<< HEAD
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
=======
import React ,{useState}from 'react'
import Posts from  './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import{Router,Link} from "@reach/router"
//import { Menu } from 'antd';
import UpdatePost from './UpdatePost';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MyPosts from './MyPosts'
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
import Particles from 'react-particles-js';


function PostApp(props){
    
    console.log(props.user)
    return (
        
          <div className="app_container">
              
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
<<<<<<< HEAD
                        <Link to="/postapp" className="mr-3"><i className="fa fa-comment"></i>Posts</Link>
                    </li>
                    {props.user && 
                       <li class="nav-item">
                        <Link to="/create_post" className="mr-3"><i class="fa fa-rocket" aria-hidden="true"></i>Create Posts</Link>
=======
                        <Link to="/postapp" style={{ float:'right'}}>Posts</Link>
                    </li>
                    {props.user && 
                       <li class="nav-item">
                        <Link to="/create_post" style={{ float:'right'}}>Create Posts</Link>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                       </li>

                    }
                     {props.user &&
                       <li class="nav-item">
<<<<<<< HEAD
                         <Link to={`/blogs/${props.user.uid}/posts`}><i className="fa fa-certificate"></i>My Posts</Link>
=======
                         <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>My Posts</Link>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
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