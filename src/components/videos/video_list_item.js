import React from 'react';
import "./complete.css";

const VideoListItem = (props) => {
    
    const onUserSelected =props.onUserSelected;
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        //<li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="list-group-item videoList bg-dark cardl " style={{padding: 10+"px", margin:10+"px"}}>
           
           <div classname="video-list media"  style={{padding: 10+"px"}}>
	            <div classname="media-left" >
		            <img id="thumbStyle" src={imageUrl}/>
	            </div>
	            <div classname="media-body">
		        <div classname="media-heading">{video.snippet.title}</div>
	            </div>
            </div>
        </div>
        // <div className="list-group-item videoList bg-dark cardl " style={{padding: 10+"px", margin:10+"px"}}>
           
        //    <div classname="video-list media" style={{padding: 10+"px"}}>
	    //         <div classname="media-left" >
		//             <img id="thumbStyle" src="https://i.ytimg.com/vi/L2dguyFo82w/default.jpg"/>
	    //         </div>
	    //         <div classname="media-body">
        //         <div classname="media-heading">"Really Inspiring &amp; Best Motivational Video Story Ever in English by TFC | BELIEVE IN YOURSELF"</div>
	    //         </div>
        //     </div>


        // </div>

    );
};

export default VideoListItem;