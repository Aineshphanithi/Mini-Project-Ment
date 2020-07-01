import React, { Component } from 'react'
import android from '../Images/android.png';
export default class About extends Component {
    render() {
        return (
            <div>
               <img src={android} className="img-fluid justify col-md-8"/>
                <h2 className="text-dark text-center">Contact the Developers</h2>
                <h5 className="text-center">B. Lekh Raj. Mail : lekhraj9169@gmail.com</h5>
                <h5 className="text-center">T. Harsha Sri. Mail : harsha.tipirneni@gmail.com</h5>
                <h5 className="text-center">Ainesh Phanithi. Mail : aineshphanithi@gmail.com</h5>
            </div>
        )
    }
}
