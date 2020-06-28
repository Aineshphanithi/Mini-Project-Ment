import React, {Component} from 'react';

import { connect } from 'react-redux';
import { GET_VOLUNTEERS } from '../../actions/types';

import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
import "./complete.css"
<<<<<<< HEAD

const API_KEY =" "; //"AIzaSyALY8xL3Y85VTF27ABKdd4HRTihe13beAA";
=======
import db from '../../firebase'
const API_KEY =" "//"AIzaSyALY8xL3Y85VTF27ABKdd4HRTihe13beAA";
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15



class CuratedContents extends Component{
<<<<<<< HEAD

=======
    
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
    constructor (props){
      super(props);

      this.state = {
        index: 0,
        indexm:0,
<<<<<<< HEAD
        videos: [1,2,3,4,5],
=======
        videos: [],
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        motivates: ["Talk to friends or family face-to-face",
          "Spend some time in nature",
          "Read a good book",
          "List what you like about yourself",
          "Do something spontaneous",
          "Listen to music",
          "Take a long, hot bath",
          "Watch a funny movie or TV show"],
        selectVideo: null,
        completed: false,
<<<<<<< HEAD
        
=======
        user: this.props.user
    
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
      };
      
    }
    componentDidMount(){
      this.props.getVolunteers();
      console.log(this.props,"this is video section")
      this.videoSearch(this.props.mental);
    }
  
  
  videoCompleted = (completed) => {
    
    this.setState({completed:completed});
  }
<<<<<<< HEAD

  
  videoSearch = (searchTerm) => {
    console.log("hello",searchTerm,this.state)
    YTSearch({key: API_KEY, term: searchTerm},(data) => {
      
      this.setState({
          videos: data,
          selectedVideo: data[0]
      });
    });
=======
  getVideo = (SearchVideo) =>{
    
    
    YTSearch({key: API_KEY, term: SearchVideo,maxValue: 100},(data) => {
      this.state.videos=data;
    });
    this.state.selectVideo=this.state.videos[this.state.index];
  }
  
  videoSearch = (searchTerm) => {
    console.log("hello",searchTerm,this.state)
    var dataset
    
    db.collection('users').doc(this.props.user.uid).get().then(function(doc){
      if (doc.exists) {
          //searchTerm=searchTerm+doc.data.videoSearchM;
          dataset=doc.data();
          console.log("Document data in video:", doc.data(),dataset.UserVideo,dataset.VideoSearchM);
                
        } 
      else{
        console.log("video preference not found")
      }
     return dataset;
      //this.getVideo(searchTerm+dataset.VideoSearchM, dataset.UserVideo)
    }).then((dataset)=>{
        console.log(dataset,this.state.index)
        this.setState({index:dataset.UserVideo%50})
        this.setState({indexm:dataset.UserVideo%8})
        this.getVideo(searchTerm+dataset.VideoSearchM)

    })
    
    
      
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
  }
  
  render(){
    console.log(this.state)
    return(
<<<<<<< HEAD
      <div className="container">
        
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div className="row">
          <div className="container mt-3 ml-3 col-md-8">
=======
      <div className="videos">
        
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div class="row">
          <div class="container column">
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            <VideoDetail 
              video={this.state.selectedVideo} 
              onCompletion={comp => this.videoCompleted(comp)} 
              motivation={this.state.motivates} 
              index={this.state.index}
            />
        
          </div>
<<<<<<< HEAD
          <div className="col-md ml-5">
            <VideoList
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              completed={this.state.completed}
=======
          <div class="container columnList">
            <VideoList
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              completed={this.state.completed}
              user={this.state.user}
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
              index={this.state.index}
              indexM={this.state.indexm}
              videos={this.state.videos}
              onCompletion={completed => this.videoCompleted(completed)}
              indexChange={indexC => this.setState({index: indexC})}
              indexMChange = {indexMo => this.setState({indexm: indexMo})}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
  mental : state.volunteer.videoSearchM
})
const mapDispatchToProps = (dispatch) => ({
  getVolunteers: () => dispatch({type:GET_VOLUNTEERS})
})

export default connect(mapStateToProps,mapDispatchToProps)(CuratedContents);