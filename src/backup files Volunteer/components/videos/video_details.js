import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import "./player.css"
import "./complete.css"

const VideoDetail = (props) => {
    

    const video = props.video;
    const [watchComplete, setWatchComplete] =useState(false)
    // if(!video){
    //     return <div>Loading...</div>;
    // }
    
    // const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;
    const url = "https://www.youtube.com/watch?v=Rq5SEhs9lws&t=19s";
    
    const onNextVideo=()=>{
        console.log(props)
        if(watchComplete){
            props.onCompletion(true)
            setWatchComplete(false)
        }

    }
    const handelComplete =({played}) => {
        console.log(played)
        if(played >= 0.7 && !watchComplete){
            setWatchComplete(true)
        }
    }
    return (
        <div className="container row-md-8">
            
            <div class="container">
                <ReactPlayer 
                    className="react-player "
                    url={url}
                    controls={true}
                    onProgress={handelComplete}
                /> 
                <button onClick={onNextVideo} className={
                    watchComplete ? "button btnIsComplete":"button btnIsNotComplete"
                    }>
                    Go to next video
                </button>

            </div> 
            
            {/* <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div> */}
            

        </div>
    );
};

export default VideoDetail;