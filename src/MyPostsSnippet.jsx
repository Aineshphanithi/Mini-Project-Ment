import React,{useState} from 'react'
//import {Card} from 'antd';
import {Link} from "@reach/router"
import db from './firebase'

const PostSnippet=(props) => {
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
    const onDeletePost=()=>{
        console.log('post being deleted')
        let postRef=db.collection('posts').doc(props.Did)
        postRef.delete()
    
    }
    
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

            <div class="card mx-5 my-3" >
                <h5 class="card-header">{title}{props.user &&
                        <div className ="post_edit_links" style ={{float:'right', size:'5px'}}>
                         <Link to={`/update_post/${props.Did}`} style ={{marginRight:'15px'}}>
                            edit
                        </Link>
                        <a onClick ={onDeletePost}>
                            delete
                        </a>
                        </div>
                    }</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>

                    <p class="card-text">{
                        content.split('\n').map((paragraph,idx)=>{
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                    </p>
                    
                    <Link to={`/create_comment/${props.Did}`} style ={{marginRight : '15px', float: 'left'}}>
                        Read Full Article
                    </Link> 
                    
                </div>
            </div>
        </div>
    )
}
export default PostSnippet;