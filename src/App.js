import React ,{useState}from 'react'
import Posts from  './Posts'
import Post from './Post'
import MentTransparent from './components/Images/MentTransparent.png';
import CreatePost from './CreatePost'
import{Router,Link, navigate} from "@reach/router"
<<<<<<< HEAD

import UpdatePost from './UpdatePost';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {auth} from './firebase';
=======
import UpdatePost from './UpdatePost';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {auth} from './firebase'
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
import PostApp from './PostApp';
import MyPosts from './MyPosts';
import MyPostsSnippet from './MyPostsSnippet';
import store from './store';
import {Provider} from 'react-redux';
//import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Volunteers from './components/volunteer/Volunteers'
import Profile from './components/volunteer/Profile';
import Chat from './components/chat/Chat';
import Home from './components/pages/Home';
import CuratedContent from './components/videos/routing'
import UserInputs from './components/videos/user_inputs'
<<<<<<< HEAD
//import 'antd/dist/antd.css';
import "./components/videos/complete.css"
import "./components/layout/Header.css"
=======
import CreateComment from './creatComment'
//import 'antd/dist/antd.css';
//import "./components/videos/complete.css"
//import "./components/layout/Header.css"
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15

//const {SubMenu} = Menu;
function App(props){
    const [user,setUser]=useState(false)
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          // ...
          setUser(user)
          navigate("/")
<<<<<<< HEAD
=======

>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        } 
        else {
          // User is signed out.
          console.log("No user Signed in")
          //alert("password")
          // ...
        }
      });
<<<<<<< HEAD
=======

>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
      const onSignOut=()=>{
        console.log('signing out',props)
        auth.signOut().then(function(){

            console.log('user signed out')
            alert('signed out')
            setUser(false)
            navigate("/")
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
          });
      }
<<<<<<< HEAD
=======
      
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
    console.log(user,"routing report on User")  
    return (
      <Provider store={store}>
         <nav className ="navbar navbar-expand-sm navbar-dark navbar-custom">
          <div className = "container">
            <Link className="navbar-brand" to="/">
            <img src={MentTransparent} width = "100" height = "500" className="img-fluid" />
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button> 
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> 
              <Link style={{float:'right',marginLeft:'20px'}} to="/">HOME</Link>
              </li>
              {!user ?
                <li className="nav-item">
                  <Link style={{float:'right',marginLeft:'20px'}} to="/sign_in">VIDEOS</Link>
                  </li>                
                  :
                  <li className="nav-item">
                  <Link style={{float:'right',marginLeft:'20px'}} to="/videos">VIDEOS</Link>
                  </li>
                }
                {!user ?  
                  <li className="nav-item">
                  <Link style={{float:'right',marginRight:'20px',marginLeft:'20px'}} to="/sign_in">VOLUNTEERS</Link>
                  </li>
                  :
                  <li className="nav-item">
                  <Link style={{float:'right',marginRight:'20px',marginLeft:'20px'}} to="/volunteers">VOLUNTEERS</Link>
                  </li>
                } 
                <li className="nav-item">
                  <Link style={{float:'right',marginRight:'20px'}} to="/postapp">BLOGS</Link>
                </li>
                {!user?
                <li className="nav-item">
                  <Link style={{float:'right',marginRight:'20px'}} to="/sign_in">Sign In</Link>
                  </li>
                :
                <li className="nav-item">
                <Link style={{float:'right',marginRight:'20px'}} onClick = {onSignOut} to="/">Sign Out</Link>
                </li>
              
            }
            </ul>
        </div>
      </nav>
         {/* <Header user={user}/> */}
          <div className="app_container main">
            <Router>
                  
                  <SignUp path="sign_up"/>
                  <SignIn path="sign_in"/>
                  <PostApp path ="postapp" user={user}/>
<<<<<<< HEAD
                  <Home path="home" default/>
                  <Volunteers path="volunteers"/>
                  <Chat path="chat" user={user}/>
                  <CuratedContent path="videos" user={user}/>
                  <Profile path="profile/:id" user={user}/>
                  <UserInputs path="userInput" user={user} />
=======
                  <Home path="home" />
                  <Volunteers path="volunteers"/>
                  <Chat path="chat" user={user}/>
                  <CuratedContent path="videos" user={user} />
                  <Profile path="profile/:id" user={user}/>
                  <UserInputs path="userInput" user={user} default/>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                  <MyPosts path="blogs/:uid/posts" user={user}/>
                  <CreatePost path="create_post" user={user}/>
                  <Post path="post/:id"/>
                  <UpdatePost path="update_post/:id" user={user}/>
<<<<<<< HEAD

=======
                  <CreateComment path="create_comment/:id" user={user}/>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15

              </Router>

          </div>
<<<<<<< HEAD
          <Footer/>
        </Provider>
=======
        <Footer/>
      </Provider>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        
    )

}
export default App;