import React, { Component } from 'react';
import Volunteer from './Volunteer';
import { connect } from 'react-redux';
import ParticlesBg from 'particles-bg';
import { GET_VOLUNTEERS } from '../../actions/types';

 class Volunteers extends Component {
    
    render() {
        console.log(this.state);
        return (
            <div className="scroll">
                <Volunteer/>
                
                <ParticlesBg type="round" bg = {true}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
    
    volunteers : state.volunteer.volunteers
})
const mapDispatchToProps = (dispatch) => ({
    getVolunteers: () => dispatch({type:GET_VOLUNTEERS})
})


export default connect()(Volunteers);
