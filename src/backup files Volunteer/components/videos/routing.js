import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserInputs from './user_inputs';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
import "./complete.css"

const API_KEY =" ";//"AIzaSyALY8xL3Y85VTF27ABKdd4HRTihe13beAA";

const User_In = () => {
    return (
      <div>
        <UserInputs/>
      </div>
    );
  };
  

class CuratedContents extends Component{

    constructor (props){
      super(props);

      this.state = {
        index: 0,
        videos: [],
        selectVideo: null,
        completed: false,
        
      };
      this.videoSearch('English Motivational Videos');
    }
    
  
  
  videoCompleted = (completed) => {
    
    this.setState({completed:completed});
  }

  
  videoSearch = (searchTerm) => {
    console.log("hello",searchTerm,this.state)
    YTSearch({key: API_KEY, term: searchTerm},(data) => {
      
      this.setState({
          videos: data,
          selectedVideo: data[0]
      });
    });
  }
  
  render(){
    console.log(this.state)
    return(
      <div className="videos">
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div class="row">
          <div class="column">
            <VideoDetail video={this.state.selectedVideo} onCompletion={comp => this.videoCompleted(comp)}/>
        
          </div>
          <div class="container column">
            <VideoList
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              completed={this.state.completed}
              index={this.state.index}
              videos={this.state.videos}
              onCompletion={completed => this.videoCompleted(completed)}
              indexChange={indexC => this.setState({index: indexC})}
            />
          </div>
        </div>
        
        
      </div>
    );
  }
}
// const CuratedContents = () => {
    
//     return (
      
//     );
//   }; 
  
  
class test extends Component{
  
  state = {
    screen : 1,

  }
  
  next = () => {
    const { screen } = this.state;
    this.setState({
      screen: screen +1
    });
  }
  
  render(){
        return(
        //     <Router>
        //       <div>
        //       <h1>My Videos</h1>
        //         <nav>
        //           <ul>
        //             <li>
        //               <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //               <Link to="/about">About</Link>
        //             </li>
                    
        //           </ul>
        //         </nav>
        //         <Route path="/" exact component={User_In} />
        //         <Route path="/about" component={CuratedContents} />
        //       </div>
        // </Router>
        <>
          {}
          
        </>
            );
    }
}

export default CuratedContents;