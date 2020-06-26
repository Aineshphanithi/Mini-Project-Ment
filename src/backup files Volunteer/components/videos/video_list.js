import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    console.log(props)
    
    if(props.completed){
        props.onCompletion(false)
        props.onVideoSelect(props.videos[props.index+1])
        props.indexChange((props.index+1)%5)
    }
    const videoItems = props.videos.map((video) => {
        
        return (
        <VideoListItem
            //onUserSelected={props.onVideoSelect}
            
            key={video.etag}
            video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;