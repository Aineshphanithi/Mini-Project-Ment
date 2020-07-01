import React,{useState,useEffect} from 'react'
//import { PageHeader,Input,Button} from 'antd';
import db from './firebase'
import { navigate } from "@reach/router"
//import { Menu } from 'antd';
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import{Router,Link} from "@reach/router"


const UpdatePost=(props)=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    //console.log(props,db.collection('users').doc(props.user.uid).collection('posts'))
    useEffect(()=>{
        let posts=db.collection('posts').doc(props.id).get().then(function(doc){
            if(doc.exists){
                console.log(doc.data())
                let {content,title}=doc.data()
                setTitle(title)
                setContent(content)
            }
            
        })
       
    },[])
    const onTitleChange=(event)=>{
        setTitle(event.target.value)
    }
    const onContentChange=(event)=>{
        setContent(event.target.value)
    }
    const onEditPost=()=>{
        //let postRef=db.collection('users').doc(props.user.uid).collection('posts').doc(props.id)
        let postRef2=db.collection('posts').doc(props.id)
        let payload={title,content}
        // postRef.update(payload)
        //     .then(function(doc){
        //         console.log("Document Successfully updated!",doc.id)
        //     })
        postRef2.update(payload)
            .then(function(doc){
                alert("Document Successfully updated!")
            })
        navigate(`/blogs/{props.user.uid}/posts`)

    }
    return(
        <div className="create_post_container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/postapp" style={{ float:'right'}}>Posts</Link>
                    </li>
                    {props.user && 
                       <li class="nav-item">
                        <Link to="/create_post" style={{ float:'right'}}>Create Posts</Link>
                       </li>

                    }
                     {props.user &&
                       <li class="nav-item">
                         <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}><i className="fa fa-certificate"></i>My Posts</Link>
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
                title="Create Post"
            /> */}
            <h2>Create Post</h2>
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Title</h2>
                </div>
                <div className = "post_input">
                    <input placeholder="Post title" value={title} onChange={onTitleChange}/>
                </div>
            </div>
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Content</h2>
                </div>
                <div className = "post_input">
                    <input value ={content} onChange={onContentChange}/>
                </div>
            </div>
            <div className="post_input_button">
                <button type="primary" size="large" onClick={onEditPost}>
                    edit post
                </button>
            </div>
        </div>
        </div>
    )
}
export default UpdatePost;