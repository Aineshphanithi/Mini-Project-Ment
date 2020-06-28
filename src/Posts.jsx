import React ,{useState,useEffect}from 'react'
//import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import _ from 'lodash'
import db from './firebase'
<<<<<<< HEAD
=======

>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
const Posts=(props)=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        let postsRef=db.collection('posts')
            postsRef
                .get()
                .then(posts=>{
                    posts.forEach(post=>{
                        let data = post.data()
                    let { id }= post
    
                    let payload={
                        id,
                        ...data
                    } 
                    setPosts((posts)=>[...posts,payload])
                    })
                })
    },[])
    return(
    <div className="posts_container">
        <div className ="page_header_container">
            {/* <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Posts"
            /> */}
            <h2>Posts</h2>
        </div>
        
        <div className="articles_container">
            {
                _.map(posts,(article,idx)=>(

                    <PostSnippet
                    key={idx}
                    id={article.id}
                     title={_.capitalize(article.title) } 
                    content = {article.content.substring(0,1000)}
                    />
                ))
                        
            }
            
        </div>
        

    </div>
    )
}
export default Posts;