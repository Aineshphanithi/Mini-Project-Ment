import React, { useState,useEffect } from 'react'
//import {Card} from 'antd';
import {Link, navigate} from "@reach/router"
import db from './firebase'
import './components/videos/complete.css'
import ParticlesBg from 'particles-bg';
import CommentSnipet from'./AddComment';
import _ from 'lodash'

const CreateComment=(props) => {
    const[comments,setComment]=useState([])
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [input,setvalue]=useState([])
    useEffect(()=>{
        let posts=db.collection('posts').doc(props.id)
        posts.get().then(function(doc){
            if(doc.exists){
                console.log(doc.data())
                let {content,title}=doc.data()
                setTitle(title)
                setContent(content)
            }
            
        })
        posts.collection('comments').get().then(comments=>{
            comments.forEach(comment=>{
                let data = comment.data()
                let { id } = comment
                let payload={
                    id,
                    ...data
                }
                setComment((comments)=>[...comments,payload])
            })
        })
    },[])
    const handelChange=e=>{
        e.preventDefault();
        setvalue(e.target.value)
    }

    const handelComment =()=>{
        db.collection('posts').doc(props.id).collection('comments').add({'comment':input})
        navigate(`/postapp`)
    }
    console.log(comments,title,content)
    return (
        <div className="postSnippet_container">
            
            <div class="cardp mx-5 my-3" >
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>

                    <p class="card-text">{
                        content.split('\n').map((paragraph,idx)=>{
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                    </p>
                    
                </div>

                <h5 mx-5 my-1>Comments:</h5>
                {/* <Link to={`/add_comment/${props.id}`} style ={{marginRight : '15px', float: 'right'}}>
                        Add Comment
                    </Link>  */}
                
                <div class="row">
                    <div class="col-sm-4 ml-5"><button type="button" class="btn btn-primary" onClick={handelComment}>Add Comment</button></div>
                    <div class="col-sm-6 border border-primary rounded"><input type="text" class="form-control" value={input} onChange={handelChange}/></div>
                </div>

                {Object.keys(comments).length >0 ? _.map(comments,(article,idx)=>(
                        <div class="card mx-5 my-1" >{article.comment}</div>
                )):
                <div class="card mx-5 my-1">No comments yet</div> }    
                    
                
            </div>
            <ParticlesBg type="cobweb" style ={{height:100+"%"}} bg = {true}/>
        </div>
    )
}
export default CreateComment;