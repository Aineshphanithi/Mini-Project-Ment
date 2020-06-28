<<<<<<< HEAD
import React ,{useState,useEffect}from 'react';
//import { PageHeader } from 'antd';
import MyPostsSnippet from './MyPostsSnippet';
import _ from 'lodash';
import db from './firebase';
=======
import React ,{useState,useEffect}from 'react'
//import { PageHeader } from 'antd';
import MyPostsSnippet from './MyPostsSnippet';
import _ from 'lodash'
import db from './firebase'
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
//import { Menu } from 'antd';
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import{Router,Link} from "@reach/router"
const MyPosts=(props)=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        let userId=props?.user.uid ? props?.user.uid : props.uid
        db.collection('users').doc(userId).collection('posts')
            .onSnapshot(async posts => {
                let postsData= await posts.docs.map(post => {
                    let data = post.data()
                    let { id }= post
    
                    let payload={
                        id,
                        ...data
                    } 
<<<<<<< HEAD
                    return payload
                });
                setPosts(postsData)
=======
                    console.log("internal data of My post",data,id,payload)
                    return payload
                });
                setPosts(postsData)
                console.log("outside data of My posts",postsData)
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            })
    },[])
    return(
    <div className="posts_container">
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
        <div className ="page_header_container">
            {/* <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Posts"
            />
             */}
             <h2>Posts</h2>
        </div>
        <div className="articles_container">
            {
                _.map(posts,(article,idx)=>(
<<<<<<< HEAD

                    <MyPostsSnippet
                    key={idx}
                    id={article.id}
                     title={_.capitalize(article.title) } 
                    content = {article.content.substring(0,1000)}
                    user={props.user}
                    uid={props.uid}
                    />
=======
                   // console.log("My post Snippet",posts,article,idx)
                    <MyPostsSnippet
                     key={idx}
                     id={article.id}
                     Did={article.Did}
                    //  title={_.capitalize(article.title) } 
                    // content = {article.content.substring(0,1000)}
                     user={props.user}
                     uid={props.uid}
                     />
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                ))
                        
            }
            
        </div>
        

    </div>
    )
}
export default MyPosts;