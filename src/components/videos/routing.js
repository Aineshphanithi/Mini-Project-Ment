import React, {Component} from 'react';

import { connect } from 'react-redux';
import { GET_VOLUNTEERS } from '../../actions/types';

import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
import "./complete.css"
import db from '../../firebase'
const API_KEY =" "//"AIzaSyALY8xL3Y85VTF27ABKdd4HRTihe13beAA";



class CuratedContents extends Component{
    
    constructor (props){
      super(props);

      this.state = {
        index: 0,
        indexm:0,
        videos: [],
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
        user: this.props.user
    
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
    
    
      
  }
  
  render(){
    console.log(this.state)
    return(
      <div className="videos">
        
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div class="row">
          <div class="container column">
            <VideoDetail 
              video={this.state.selectedVideo} 
              onCompletion={comp => this.videoCompleted(comp)} 
              motivation={this.state.motivates} 
              index={this.state.index}
            />
        
          </div>
          <div class="container columnList">
            <VideoList
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              completed={this.state.completed}
              user={this.state.user}
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