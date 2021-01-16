import React, {Component} from 'react';

import { connect } from 'react-redux';
import { GET_VOLUNTEERS } from '../../actions/types';
import ParticlesBg from 'particles-bg';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
import "./complete.css"
import db from '../../firebase'
import { navigate } from '@reach/router';
const API_KEY ="AIzaSyDd-dqSJ53e_p-etO6hdB7EA-E2Nri7Lyw";//"AIzaSyDE2WFy_oZsNwPSnFdKbMBtcXfV68UVkDM" 	AIzaSyBS7YzMWkBVZWUl1j4Oc1b_dd-fEvsQprs AIzaSyDd-dqSJ53e_p-etO6hdB7EA-E2Nri7Lyw



class CuratedContents extends Component{
    
    constructor (props){
      super(props);

      this.state = {
        index: 0,
        indexm:0,
        //videos: ['https://youtu.be/iRN62IebC04','https://youtu.be/FSVHx23ByhM','https://youtu.be/vG12FW5lMWc','https://youtu.be/1LfdbHI4oDE','https://youtu.be/-uEc8_dcYUc'],
       videos:[], 
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
      
      var dataset
      db.collection('users').doc(this.props.user.uid).get().then(function(doc){
        if (doc.exists) {
           // searchTerm=searchTerm+doc.data.videoSearchM;
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
          //this.getVideo(searchTerm+dataset.VideoSearchM)
          var userVideos
          YTSearch({key: API_KEY, term: this.props.mental+dataset.VideoSearchM,maxValue: 100},(data) => {
            userVideos=data;
            console.log("fetched user data",this.state)
            this.videoSearch(userVideos);
          })
            
          //this.videoSearch(userVideos);//this is only for testing
          
          //this.state.selectVideo=this.state.videos[this.state.index];
        }
      )
    }
  
  
  videoCompleted = (completed) => {
    console.log("videoCompleted")
    this.setState({completed:completed});
    
  }
  getVideo = () =>{
    
    console.log("Retrieving the video")
    this.setState({selectedVideo:this.state.videos[this.state.index]});
    
  }
  
  videoSearch = (userVideos) => {
    //console.log("hello",searchTerm,this.state, db.collection('users').doc(this.props.user.uid))
    
    this.setState({videos:userVideos});
    
    this.getVideo()
    console.log("user videos loaded")

  }
  
  render(){
    console.log(this.state)
    
    return(
      <div className="videos text-light" >
        
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div class="row">
          <div className="container mt-3 ml-3 col-md-8">
            <VideoDetail 
              video={this.state.selectedVideo} 
              onCompletion={comp => this.videoCompleted(comp)} 
              motivation={this.state.motivates} 
              index={this.state.index}
            />
        
          </div>
          <div className="col-md ml-5 scroll">
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
        <ParticlesBg type="lines" bg = {true}/>
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