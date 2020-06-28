import React, {Component} from 'react';
//import CuratedContents from './routing';
import { Link,navigate } from '@reach/router';
import { connect } from 'react-redux';
import { getUserChoice , updateUserChoice } from '../../actions/UserActions';
import PropTypes from 'prop-types';
import "./complete.css";
import db from '../../firebase'

const UserInputs=(props) =>{
    
        
        
        const state = {
            nameS:'',
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:''
        };

        let userId=props?.user.uid ? props?.user.uid : props.uid
        console.log("userInput",userId);
        //db.collection('users').doc(userId)
        
        // const componentWillMount=()=>{
        //     db.collection('users').doc(props.user.uid).get().then(function(doc){
        //             if (doc.exists) {
        //                 console.log("Document data:", doc.data());
        //             } else {
        //                 // doc.data() will be undefined in this case
        //                 console.log("No such document!");
        //             }
        // });
        // }

    //     db.collection('users').doc(props.user.uid)..then(function(doc){
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
    // proceed = e => {
    //     e.preventDefault();
    //     //props.next();
        
    // }

    const handelChange=event=>{
        if(event.target.name=="value1" && event.target.checked)
            state.value1= event.target.value;
        else if(event.target.name=="value1")
            state.value1="";
        
        if(event.target.name=="value2" && event.target.checked)
            state.value2= event.target.value;
        else if(event.target.name=="value2")
            state.value2="";
        
        if(event.target.name=="value3" && event.target.checked)
            state.value3= event.target.value;
        else if(event.target.name=="value3")
            state.value3="";
        
        if(event.target.name=="value4" && event.target.checked)
            state.value4= event.target.value;
        else if(event.target.name=="value4")
            state.value4="";    
        var str=event.target.value;
        if(event.target.name=="value5" && str.length>0){
            state.value5= event.target.value;
        }
        else if(event.target.name=="value5" && str.length>10)
            alert("Please enter less than 10 characters")
    }

    const handelSkip=()=>{
        //window.location=`/videos/${"_"}`;
        db.collection('users').doc(props.user.uid).get().then(function(doc){
            if (doc.exists) {
                db.collection('users').doc(props.user.uid).update({'VideoSearchM':" "})
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                db.collection('users').doc(props.user.uid).set({'VideoSearchM':" ",UserVideo:0})
                console.log("No such document!",doc.data());
            }
});
        navigate('/videos')
        
    }
    const handelSubmit=(event)=>{
        event.preventDefault();
        console.log("this is the text ===",state.value5)
        let str = state.value1+state.value2+state.value3+state.value4+" "+state.value5;
        state.nameS=str
        console.log(state.nameS)

        //window.location=`/videos/${state}`;
        //console.log(state.name);
        alert('Name:'+ str);
        // if(db.collection('users').doc(props.user.uid).update({'VideoSearchM':str}).then(function(doc){console.log("UserPreference Successfully Edited",doc)})){

        // }
            db.collection('users').doc(props.user.uid).get().then(function(doc){
                    if (doc.exists) {
                        db.collection('users').doc(props.user.uid).update({'VideoSearchM':str})
                        console.log("Document data:", doc.data());
                    } else {
                        // doc.data() will be undefined in this case
                        db.collection('users').doc(props.user.uid).set({'VideoSearchM':str,UserVideo:0})
                        console.log("No such document!",doc.data());
                    }
        });
       
       // console.log(state);
        // setState({name:" "});
        state.nameS=" "
        state.value1=" "
        state.value2=" "
        state.value3=" "
        state.value4=" "
        state.value5=" "
        navigate('/videos')

    }
    
    
        return(
            <div >
                <h1>Please Answer these questions for getting Curated content</h1>
                <form align="center">
                    {/* <label>
                        type here:<input type="text" value={state.value} onChange={handelChange}/>
                    </label> */}
                    <br/>
                    
                    <div className="formMain">
                    <div id="formP">
                        <h2>Have You gone through any of these situatons?</h2>
                        <input  type ="checkbox" id = " cb1" name="value1" value=" abuse" onChange={handelChange}/>
                        <label   for="cb1">Abused</label>
                        <br/>
                        <input   type ="checkbox" id = " cb2" name="value2" value=" drugs" onChange={handelChange}/>
                        <label   for="cb2">Drug Addict</label>
                        <br/>
                        <input   type ="checkbox" id = " cb3" name="value3" value=" stress" onChange={handelChange}/>
                        <label   for="cb3">Work stress</label>
                        <br/>
                        <input   type ="checkbox" id = " cb4" name="value4" value=" relationship" onChange={handelChange}/>
                        <label   for="cb4">Relationship Problems</label>
                        <br/>
                        <label   for="cb5">other problems: </label>
                        <input   type ="text" id = "cb5" name="value5" value={state.value} onChange={handelChange}/>
                        
                        <br/>
                        <input   type ="checkbox" id = "cb6" name="value6" value=" " onChange={handelChange}/>
                        <label   for="cb6">None</label>
                        <br/>
                    </div>
                    </div>
                    <br/>
                    
                    <br/>
                    <label >
                        <input id="btnforChange" type="submit" value="Save & Proceed" onClick={handelSubmit}/>
                    </label>

                    <label >
                        <input id="btnforChange" type="button" value="skip" onClick={handelSkip}/>
                    </label>

                </form>
            </div>
        );
    
}


UserInputs.propTypes = {
    mental : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  
    mental : state.volunteer.videoSearchM
})
  
export default connect(mapStateToProps,{ getUserChoice,updateUserChoice})(UserInputs);