import React, { useState } from 'react';
import ReactPlayer from 'react-player'

import { navigate } from "@reach/router"
const VideoDetail = (props) => {
    

    const video = props.video;
   console.log(props)
    const [watchComplete, setWatchComplete] =useState(false)
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    //const url = "https://www.youtube.com/watch?v=ssrNcwxALS4";
    
    const onNextVideo=()=>{
        console.log(props)
        if(watchComplete){
            console.log("watch complete")
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
    console.log(props,watchComplete)
    return (
        <div>
            
            <div >
                <ReactPlayer 
                    className="react-player "
                    url={url}
                    controls={true}
                    onProgress={handelComplete}
                /> 
                <div>
                <div><h4>{video.snippet.title}</h4></div>
                <div>{video.snippet.description}</div>
                </div>
                 
                    <h2>Task:{props.motivation[props.index]}</h2>
                
                {/* <button onClick={onNextVideo} className={
                    watchComplete ? "button btnIsComplete":"button btnIsNotComplete tooltip"
                    }>
                    Go to next video<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>on completion of Video(70%)</span>
                </button> */}
                <button onClick={onNextVideo} className="btn btn-success ml-3 mt-3">
                    Go to next video
                </button>
                <button onClick={onChange} className="btn btn-success ml-3 mt-3">
                    Change your preferences
                </button>

            </div> 
            {/* <button onClick={onChange} className={"button btnforChange tooltip"
                    }>
                    Change<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>Change your Preferences</span>
             </button> */}
            
            

        </div>
    );
};

export default VideoDetail;