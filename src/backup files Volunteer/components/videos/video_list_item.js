import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    //const onUserSelected =props.onUserSelected;
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        // <li onClick={() => onUserSelected(video)} className="list-group-item">
        <li className="list-group-item">
           
           <div classname="video-list media">
	            <div classname="media-left">
		        <img classname="media-object" src={imageUrl}/>
	            </div>
	            <div classname="media-body">
		        <div classname="media-heading">{video.snippet.title}</div>
	            </div>
            </div>
        </li>
    );
};

export default VideoListItem;