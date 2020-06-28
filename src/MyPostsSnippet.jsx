<<<<<<< HEAD
import React from 'react'
=======
import React,{useState} from 'react'
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
//import {Card} from 'antd';
import {Link} from "@reach/router"
import db from './firebase'

const PostSnippet=(props) => {
<<<<<<< HEAD
=======
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const[comments,setComment]=useState([])
    let posts=db.collection('posts').doc(props.Did)
    posts.get().then(function(doc){
        if(doc.exists){
            console.log(doc.data())
            let {content,title}=doc.data()
            setTitle(title)
            setContent(content)
        }
        
    })
    
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
    return (
        <div class="postSnippet_container mx-3">
            {/* <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                    <Link to={`/blogs/${props.uid}`} style ={{marginRight : '15px', float: 'left'}}>
                    Read Full Article
                    </Link> 
                    {props.user &&
                        <div className ="post_edit_links" style ={{float:'right'}}>
                         <Link to={`/update_post/${props.id}`} style ={{marginRight:'15px'}}>
                            edit
                        </Link>
                        </div>
                }
                    
                    </div>
                }
                >
                <p className = "article_content">
                    {
                        props.content.split('\n').map((paragraph,idx)=>{
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                </p>  
            </Card> */}
<<<<<<< HEAD
            <div class="card mx-5 my-3" >
                <h5 class="card-header">{props.title}{props.user &&
                        <div className ="post_edit_links" style ={{float:'right', size:'5px'}}>
                         <Link to={`/update_post/${props.id}`} style ={{marginRight:'15px'}}>
=======

            <div class="card mx-5 my-3" >
                <h5 class="card-header">{title}{props.user &&
                        <div className ="post_edit_links" style ={{float:'right', size:'5px'}}>
                         <Link to={`/update_post/${props.Did}`} style ={{marginRight:'15px'}}>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                            edit
                        </Link>
                        </div>
                    }</h5>
                <div class="card-body">
<<<<<<< HEAD
                    {/* <h5 class="card-title">Special title treatment</h5> */}

                    <p class="card-text">{
                        props.content.split('\n').map((paragraph,idx)=>{
=======
                    <h5 class="card-title">Special title treatment</h5>

                    <p class="card-text">{
                        content.split('\n').map((paragraph,idx)=>{
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                    </p>
                    
<<<<<<< HEAD
                    <Link to={`/blogs/${props.uid}`} style ={{marginRight : '15px', float: 'left'}}>
                        Read Full Article
                    </Link> 
=======
                    <Link to={`/create_comment/${props.Did}`} style ={{marginRight : '15px', float: 'left'}}>
                        Read Full Article
                    </Link> 
                    
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
                </div>
            </div>
        </div>
    )
}
export default PostSnippet;