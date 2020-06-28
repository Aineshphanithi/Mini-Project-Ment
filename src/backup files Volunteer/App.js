import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/layout/Header'
import Volunteers from './components/volunteer/Volunteers';
import Profile from './components/volunteer/Profile';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import store from './store';
import {Provider} from 'react-redux';
import CuratedContent from './components/videos/routing'
import UserInputs from './components/videos/user_inputs'
class App extends React.Component{
  render(){
    return(
      <Provider store={store}> 
        <Router>
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/volunteers" component={Volunteers} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/videos" component={CuratedContent}/>
            <Route exact path="/userInput" component={UserInputs}/>
            <Footer />
        
        </Router>
      </Provider>
    );
  }
}

export default App;