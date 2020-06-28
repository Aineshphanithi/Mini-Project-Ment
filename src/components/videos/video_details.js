import React, { useState } from 'react';
<<<<<<< HEAD
import ReactPlayer from 'react-player';
//import "./player.css"
import "./complete.css";
import { navigate } from "@reach/router";
=======
import ReactPlayer from 'react-player'
import "./player.css"
////import "./complete.css"
import { navigate } from "@reach/router"
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
const VideoDetail = (props) => {
    

    const video = props.video;
<<<<<<< HEAD
    
=======
   
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
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
<<<<<<< HEAD
=======

>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
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
<<<<<<< HEAD
    console.log(props)
=======
    console.log(props,watchComplete)
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
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
<<<<<<< HEAD
                <button onClick={onNextVideo} className="btn btn-success ml-3 mt-3">
                    Go to next video
                </button>
                <button onClick={onChange} className="btn btn-success ml-3 mt-3">
                    Change your preferences
                </button>

            </div> 
           
=======
                <button onClick={onNextVideo} className={
                    watchComplete ? "button btnIsComplete":"button btnIsNotComplete tooltip"
                    }>
                    Go to next video<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>on completion of Video(70%)</span>
                </button>
               

            </div> 
            <button onClick={onChange} className={"button btnforChange tooltip"
                    }>
                    Change<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>Change your Preferences</span>
             </button>
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            {/* <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div> */}
            

        </div>
    );
};

export default VideoDetail;