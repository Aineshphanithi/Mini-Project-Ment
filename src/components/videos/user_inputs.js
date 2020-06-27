import React, {Component} from 'react';
//import CuratedContents from './routing';
import { Link,navigate } from '@reach/router';
import { connect } from 'react-redux';
import { getUserChoice , updateUserChoice } from '../../actions/UserActions';
import PropTypes from 'prop-types';
import "./complete.css";


class UserInputs extends Component{
    constructor(props){
        
        super(props);
        this.state = {
            nameS:'',
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:''
        };

        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        console.log("userInput");
    }

    // proceed = e => {
    //     e.preventDefault();
    //     //this.props.next();
        
    // }

    handelChange(event){
        if(event.target.name=="value1" && event.target.checked)
            this.setState({ value1: event.target.value});
        else if(event.target.name=="value1")
            this.setState({ value1:""});
        
        if(event.target.name=="value2" && event.target.checked)
            this.setState({ value2: event.target.value});
        else if(event.target.name=="value2")
            this.setState({ value2:""});
        
        if(event.target.name=="value3" && event.target.checked)
            this.setState({ value3: event.target.value});
        else if(event.target.name=="value3")
            this.setState({ value3:""});
        
        if(event.target.name=="value4" && event.target.checked)
            this.setState({ value4: event.target.value});
        else if(event.target.name=="value4")
            this.setState({ value4:""});    
        var str=event.target.value;
        if(event.target.name=="value5" && str.length>0){
            this.setState({ value5: this.state.value5+event.target.value});
        }
        else if(event.target.name=="value5" && str.length>10)
            alert("Please enter less than 10 characters")
    }

    handelSkip(){
        //window.location=`/videos/${"_"}`;
    }
    handelSubmit(event){
        event.preventDefault();
        let str = this.state.value1+this.state.value2+this.state.value3+this.state.value4+this.state.value5;
        this.setState({nameS:str})
        console.log(this.state.nameS)

        //window.location=`/videos/${this.state}`;
        //console.log(this.state.name);
        alert('Name:'+ str);
       
       // console.log(this.state);
        // this.setState({name:" "});
        
    }
    
    render(){
        const {rb1} = this.props;
        return(
            <div>
                <h1>Please Answer these questions for getting Curated content</h1>
                <form align="center">
                    {/* <label>
                        type here:<input type="text" value={this.state.value} onChange={this.handelChange}/>
                    </label> */}
                    <br/>
                    
                    <div className="formMain">
                    <div id="formP">
                        <h2>Have You gone through any of these situatons?</h2>
                        <input  type ="checkbox" id = " cb1" name="value1" value=" abuse" onChange={this.handelChange}/>
                        <label   for="cb1">Abused</label>
                        <br/>
                        <input   type ="checkbox" id = " cb2" name="value2" value=" drugs" onChange={this.handelChange}/>
                        <label   for="cb2">Drug Addict</label>
                        <br/>
                        <input   type ="checkbox" id = " cb3" name="value3" value=" stress" onChange={this.handelChange}/>
                        <label   for="cb3">Work stress</label>
                        <br/>
                        <input   type ="checkbox" id = " cb4" name="value4" value=" relationship" onChange={this.handelChange}/>
                        <label   for="cb4">Relationship Problems</label>
                        <br/>
                        <label   for="cb5">other problems: </label>
                        <input   type ="text" id = "cb5" name="value5" value={this.state.value} onChange={this.handelChange}/>
                        
                        <br/>
                        <input   type ="checkbox" id = "cb6" name="value6" value=" " onChange={this.handelChange}/>
                        <label   for="cb6">None</label>
                        <br/>
                    </div>
                    </div>
                    <br/>
                    
                    <br/>
                    <label >
                        <input id="btnforChange" className="btn" type="submit" value="Save & Proceed" onClick={this.handelSubmit}/>
                    </label>

                    <label >
                        <input id="btnforChange" className="btn" type="button" value="skip" onClick={this.handelSkip}/>
                    </label>

                </form>
            </div>
        );
    }
}


UserInputs.propTypes = {
    mental : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  
    mental : state.volunteer.videoSearchM
})
  
export default connect(mapStateToProps,{ getUserChoice,updateUserChoice})(UserInputs);