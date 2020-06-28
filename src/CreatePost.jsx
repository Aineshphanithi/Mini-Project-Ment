import React,{useState} from 'react'
//import { PageHeader,Input,Button} from 'antd';
<<<<<<< HEAD

=======
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
import db from './firebase'
import { navigate } from "@reach/router"
//import { Menu } from 'antd';
import { Envelope, ColumnsGap, CardList} from 'react-bootstrap-icons';
import{Router,Link} from "@reach/router"

const CreatePost=(props)=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const onTitleChange=(event)=>{
        setTitle(event.target.value)
    }
<<<<<<< HEAD
    const onContentChange=(event)=>{
        setContent(event.target.value)
    }
    const onCreatePost=()=>{
        let postRef=db.collection('users').doc(props.user.uid).collection('posts')
        let postRef2=db.collection('posts')
        let payload={title,content}
        postRef.add(payload)
            .then(function(doc){
                console.log("Document Successfully written!",doc.id)
            })
        postRef2.add(payload)
            .then(function(doc){
                console.log("Document Successfully written!",doc.id)
            })
        navigate(`/posts`)

    }
    return(
        
        <div className="create_post_container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/postapp" className="mr-3"><i className="fa fa-comment"></i>Posts</Link>
                    </li>
                    {props.user && 
                       <li class="nav-item">
                        <Link to="/create_post" className="mr-3"><i class="fa fa-rocket" aria-hidden="true"></i>Create Posts</Link>
=======

    const onContentChange=(event)=>{
        setContent(event.target.value)
    }

    const onCreatePost=()=>{
        let postRef=db.collection('users').doc(props.user.uid).collection('posts')
        let postRef2=db.collection('posts')
        console.log(postRef2.id);
        let payload={title,content}
        
        postRef2.add(payload)
            .then(function(doc){
                console.log("Document Successfully written!",doc.id)
                return doc.id;
            }).then((Did)=>{
                let postId={Did}
                postRef.add(postId)
            })
        navigate(`/posts`)
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
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                       </li>

                    }
                     {props.user &&
                       <li class="nav-item">
<<<<<<< HEAD
                         <Link to={`/blogs/${props.user.uid}/posts`}><i className="fa fa-certificate"></i> My Posts</Link>
=======
                         <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>My Posts</Link>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                       </li>
                    }
                </ul>
            </div>
<<<<<<< HEAD
            </nav>
=======
          </nav>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            
        <div className ="page_header_container">
            {/* <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Create Post"
            /> */}
<<<<<<< HEAD
            <h3><strong>Create Post</strong></h3>
=======
            <h3>Create Post</h3>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Title</h2>
                </div>
                <div className = "post_input">
                    <input type= "text" placeholder="Post title" value={title} onChange={onTitleChange}/>
                </div>
            </div>
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Content</h2>
                </div>
                <div className = "post_input">
                    <input rows={10} value ={content} onChange={onContentChange}/>
                </div>
            </div>
            <div className="post_input_button">
<<<<<<< HEAD
                <button type="primary" className="btn btn-primary my-3" size="large" onClick={onCreatePost}>
                    Create Post
                </button>
            </div>
        </div>
=======
                <button type="primary" size="large" onClick={onCreatePost}>
                    Create Post
                </button>
            </div>
          </div>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        </div>
    )
}
export default CreatePost;