import React, { Component } from 'react';
import './Volunteer.css';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { GET_VOLUNTEERS } from '../../actions/types';

class Volunteer extends Component {

    componentDidMount(){
        this.props.getVolunteers();
        console.log(this.props);
    }
    
    styleElement = {
        backgroundImage: "linear-gradient(to top,#3d55b5 0,#40006b 100%)"
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row my-5">
                {this.props.volunteers.map(v=>(
                        <div className="flip-card mb-5 col-md-4">
                            <div className="flip-card-inner">
                                <div style={this.styleElement} className="flip-card-front">
                                <br/>
                                <h3 className="text-white">{v.name}<br/><br/> {v.occupation} </h3>
                                <br/>
                                <p className="text-white">{v.about}</p>
                               
                                </div>
                                <div className="flip-card-back">     
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
                                    
                                </div>
                            </div>
                            {/* Spaces before Connect*/}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                            <Link to={`/profile/${v.id}`} className = "mt-1 btn btn-primary">Connect</Link>
                        </div> 
                ))}
                
                </div>
            </div>  
            </>
        );
    }
    
}
const mapStateToProps = (state) => ({
    volunteers : state.volunteer.volunteers,
    mental : state.volunteer.videoSearchM
})
const mapDispatchToProps = (dispatch) => ({
    getVolunteers: () => dispatch({type:GET_VOLUNTEERS})
})
export default connect(mapStateToProps,mapDispatchToProps)(Volunteer);