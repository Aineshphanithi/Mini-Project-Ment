import React from 'react';
import VideoListItem from './video_list_item';
<<<<<<< HEAD

=======
import db from '../../firebase'
import firebase from 'firebase'
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
const VideoList = (props) => {
    console.log(props)
    
    if(props.completed){
        props.onCompletion(false)
        props.onVideoSelect(props.videos[props.index+1])
<<<<<<< HEAD
        props.indexChange((props.index+1)%5)
        props.indexMChange((props.indexM+1)%8)
=======
        props.indexChange((props.index+1)%50)
        props.indexMChange((props.indexM+1)%8)
        db.collection('users').doc(props.user.uid).update({
            UserVideo:firebase.firestore.FieldValue.increment(1)
        })
        
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
    }
    const videoItems = props.videos.map((video) => {
        
        return (
        <VideoListItem
            //onUserSelected={props.onVideoSelect}
            
            //key={video.etag}
            video={video} 
        />
        );
    });

    return (
<<<<<<< HEAD
        <ul className="col-md list-group">
=======
        <ul className="col-md-4 list-group">
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            {videoItems}
        </ul>
    );
};

export default VideoList;