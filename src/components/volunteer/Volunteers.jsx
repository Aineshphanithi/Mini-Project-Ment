import React, { Component } from 'react';
import Volunteer from './Volunteer';
import { connect } from 'react-redux';
import { GET_VOLUNTEERS } from '../../actions/types';
// Ainesh's work
// once the user clicks connect, he should be relocated to the calendar to fix a date. the date shoudld be updated with the volunteer and the user.
// The user should be able to text the volunteer at that time.
// Implement Login functionality also.

 class Volunteers extends Component {
    
    render() {
        console.log(this.state);
        return (
            <div>
                <Volunteer/>
                
                
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
