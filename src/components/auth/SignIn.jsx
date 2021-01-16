import React,{useState} from 'react';
//import { PageHeader ,Input,Button} from 'antd';
import {auth} from '../../firebase'
import ParticlesBg from 'particles-bg';
import '../Images/MentTransparent.png'
import { navigate } from "@reach/router"
import "../videos/complete.css";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './sign.css';
const SignIn = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange=(event)=>setPassword(event.target.value)
    let config = {
        
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        //body: "MentTransparent.png", // Whether to render pictures
        rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "all", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: null,  // or null,
        g: 1,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 0.5, particle.radius * 0.5);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
      };
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
                    <div className="cardi">
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
                <ParticlesBg type="custom" config={config} bg={true} />
            </div>

    )
}


export default SignIn;