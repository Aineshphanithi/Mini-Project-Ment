import React from 'react';
import "./complete.css"

const VideoListItem = (props) => {
    
    //const onUserSelected =props.onUserSelected;
    //const video = props.video;
    //const imageUrl = video.snippet.thumbnails.default.url;

    return(
        // <li onClick={() => onUserSelected(video)} className="list-group-item">
        // <li className="list-group-item ">
           
        //    <div classname="video-list media">
	    //         <div classname="media-left" style={{height: '100px',width: '150px'}}>
		//             <img classname="media-object" src={imageUrl}/>
	    //         </div>
	    //         <div classname="media-body">
		//         <div classname="media-heading">{video.snippet.title}</div>
	    //         </div>
        //     </div>
        // </li>
        <div className="list-group-item videoList" >
           
           <div classname="video-list media">
	            <div classname="media-left" >
		            <img id="thumbStyle" src="https://i.ytimg.com/vi/L2dguyFo82w/default.jpg"/>
	            </div>
	            <div classname="media-body">
                <div classname="media-heading">"Really Inspiring &amp; Best Motivational Video Story Ever in English by TFC | BELIEVE IN YOURSELF"</div>
	            </div>
            </div>


        </div>

    );
};

export default VideoListItem;