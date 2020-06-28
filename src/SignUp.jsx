import React,{useState} from 'react';
//import { PageHeader ,Input,Button} from 'antd';
import {navigate} from '@reach/router'
import {auth} from './firebase'
import "./components/videos/complete.css"
const SignUp = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange=(event)=>setPassword(event.target.value)
    const onSignUp=()=>{
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          setEmail('')
          setPassword('')
        navigate('/userInput')
    }
    return(
        <div className = "Sign_up_container">
             <div className ="page_header_container">
            {/* <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Sign Up"
            /> */}
            <h2>Sign Up</h2>
            </div>
            <div className="sign_up_container_inputs" style ={{marginTop : "20px" }}>
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Email</h2>
                </div>
                <div className = "post_input">
                    <input placeholder="Email"  onChange={onEmailChange}/>
                </div>
            </div>
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Password</h2>
                </div>
                <div className = "post_input">
                    <input placeholder="Password" onChange={onPasswordChange}/>
                </div>
            </div>
            <div style ={{width:'100%'}}>
                <div style={{float:'left'}}>
                    <a href="sign_in">Already have an account,Sign In</a>
                </div>
                <div className="post_input_button">
                <button type="primary" size="large" onClick= {onSignUp}>
                    SignUp
                </button>
                </div>
            </div>
            
        </div>
        </div>
    )
}
export default SignUp;