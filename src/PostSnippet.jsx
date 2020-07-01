import React from 'react'
//import {Card} from 'antd';
import {Link} from "@reach/router"
import db from './firebase'

const PostSnippet=(props) => {
    return (
        <div className="postSnippet_container">
            
            <div class="card mx-5 my-3" >
                <h5 class="card-header">{props.title}</h5>
                <div class="card-body">
                    {/* <h5 class="card-title">Special title treatment</h5> */}

                    <p class="card-text">{
                        props.content.split('\n').map((paragraph,idx)=>{
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                    </p>
                    
                    <Link to={`/create_comment/${props.id}`} style ={{marginRight : '15px', float: 'left'}}>
                        Read Full Article
                    </Link> 
                    
                    
                </div>
            </div>
        </div>
    )
}
export default PostSnippet;