import React,{useState} from 'react'
//import { PageHeader,Input,Button} from 'antd';
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
        navigate(`/postapp`)
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
                         <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>My Posts</Link>
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
            <h3>Create Post</h3>
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
                <button type="primary" size="large" onClick={onCreatePost}>
                    Create Post
                </button>
            </div>
          </div>
        </div>
    )
}
export default CreatePost;