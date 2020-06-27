import React, { useState } from 'react';
import ReactPlayer from 'react-player';
//import "./player.css"
import "./complete.css";
import { navigate } from "@reach/router";
const VideoDetail = (props) => {
    

    const video = props.video;
    
    const [watchComplete, setWatchComplete] =useState(false)
    // if(!video){
    //     return <div>Loading...</div>;
    // }
    
    // const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;
    const url = "https://www.youtube.com/watch?v=ssrNcwxALS4";
    
    const onNextVideo=()=>{
        console.log(props)
        if(watchComplete){
            props.onCompletion(true)
            setWatchComplete(false)
        }
    }
    const onChange=()=>{
        navigate('/userInput')
    }
    const handelComplete =({played}) => {
        console.log(played)
        if(played >= 0.7 && !watchComplete){
            setWatchComplete(true)
        }
    }
    console.log(props)
    return (
        <div>
            
            <div >
                <ReactPlayer 
                    className="react-player "
                    url={url}
                    controls={true}
                    onProgress={handelComplete}
                /> 
                 <div className={
                    watchComplete ? "readyForTask tooltip":"notReadyForTask"
                    }>
                    <h2>Task:{props.motivation[props.index]}</h2><span class="tooltiptext">Do this to feel good(optional)</span>
                </div>
                <button onClick={onNextVideo} className="btn btn-success ml-3 mt-3">
                    Go to next video
                </button>
                <button onClick={onChange} className="btn btn-success ml-3 mt-3">
                    Change your preferences
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