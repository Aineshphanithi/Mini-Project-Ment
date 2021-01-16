import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { navigate } from "@reach/router"
import { grey } from '@material-ui/core/colors';
const VideoDetail = (props) => {
    

    const video = props.video;
   //const video = 'https://youtu.be/iRN62IebC04';
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
            alert("Don't forget to do the task!!")
        }
        else{
            alert("Please listen atleast 70% of the video")
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
        <div className="container"> 
            <div className="row">
            <div style={{backgroundColor:"black"}} className="cardp mx-2 my-5" >
                <ReactPlayer 
                    className="react-player ms-9 container-fluid"
                    url={url}
                    controls={true}
                    onProgress={handelComplete}
                /> 
                <div className="card-body">
                <div><h4>{video.snippet.title}</h4></div>
                <div>{video.snippet.description}</div>
                {/* <div><h4>This is for the testing of the heading of the video</h4></div>
                <div>This is for the testing of the description of the video, the style and the formatting of the text is necessary for the display.</div> */}
                </div>
                 
                    <h2>Task:{props.motivation[props.index]}</h2>
                
                {/* <button onClick={onNextVideo} className={
                    watchComplete ? "button btnIsComplete":"button btnIsNotComplete tooltip"
                    }>
                    Go to next video<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>on completion of Video(70%)</span>
                </button> */}
                <div className="row mx-3">
                <div onClick={onNextVideo} className="btn btn-outline-primary col mx-1" >
                    Go to next video
                </div>
                <div onClick={onChange} className="btn btn-outline-success col mx-1">
                    Change your preferences
                </div>
                </div>
            </div> 
            {/* <button onClick={onChange} className={"button btnforChange tooltip"
                    }>
                    Change<span class={watchComplete ? "tooltiptextIncomplete":"tooltiptext"}>Change your Preferences</span>
             </button> */}
            
            </div>
        
        </div>
    );
};

export default VideoDetail;