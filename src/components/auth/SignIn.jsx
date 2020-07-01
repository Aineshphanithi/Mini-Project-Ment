import React,{useState} from 'react';
//import { PageHeader ,Input,Button} from 'antd';
import {auth} from '../../firebase'
import { navigate } from "@reach/router"
import "../videos/complete.css";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const SignIn = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange=(event)=>setPassword(event.target.value)
    const onSignIn=()=>{
        if (email == '')
            alert("Email empty");
        else if(!email.includes('@'))
            alert('Invalid Email');
        else if (password == '')
            alert("Password is empty");
       
        else {
        console.log(email,password)
        auth.signInWithEmailAndPassword(email, password)
        .then(function(result){
            console.log('user signed in')
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          setEmail('')
          setPassword('')
        }
    }

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
       signInFlow: 'popup',
       // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
       signInSuccessUrl: '/',
       // We will display Google and Facebook as auth providers.
       signInOptions: [
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   //firebase.auth.FacebookAuthProvider.PROVIDER_ID
       ]
   }

    return(
        <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fas fa-lock"></i> Login
                                </span>
                            </h1>
                            
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text"
                                    className="form-control" 
                                    name="email" 
                                    required
                                    onChange={onEmailChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">password</label>
                                    <input type="password"
                                    className="form-control" 
                                    name="password" 
                                    required
                                    onChange={onPasswordChange}
                                    />
                                </div>
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                                <div>
                                    <a href="sign_up">Don't have an account? Sign up now</a>
                                </div>
                                <div className="post_input_button">
                                <button type="submit" onClick={onSignIn} className="btn btn-primary btn-block">Submit</button>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>

    )
}


export default SignIn;