import React from 'react';
import VideoListItem from './video_list_item';
import db from '../../firebase'
import firebase from 'firebase'
const VideoList = (props) => {
    console.log(props)
    
    if(props.completed){
        props.onCompletion(false)
        props.onVideoSelect(props.videos[props.index+1])
        props.indexChange((props.index+1)%50)
        props.indexMChange((props.indexM+1)%8)
        db.collection('users').doc(props.user.uid).update({
            UserVideo:firebase.firestore.FieldValue.increment(1)
        })
        
    }
    const videoItems = props.videos.map((video) => {
        
        return (
        <VideoListItem
            //onUserSelected={props.onVideoSelect}
            
            //key={video.etag}0
            video={video} 
        />
        );
    });

    return (
        <ul className="col-md list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;