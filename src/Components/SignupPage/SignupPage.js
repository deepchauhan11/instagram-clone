import { Grid } from "@mui/material";
import React, { useState }  from "react"
import axios from "axios"
import './SignupPage.css'   
import ig_logo from '../../images/login.png'
import fb from '../../images/fb.png'
import { useNavigate } from "react-router-dom"


function SignupPage() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8001/signup",{
                email,name,username,password
            })
            .then(res=>{
                if(res.data==="email already exists"){
                    alert("User with this email already exists")
                }
                else if(res.data==="sign up successful"){
                    alert("Sign up successful")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    
        return(
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        hello
                    </Grid>
                    <Grid item xs={6}>
                        <div className="main_loginpage">
                            <div className="rightcomponent_loginpage">
                                <img src={ig_logo} alt="Instagram logo" className="logo_loginpage" />
                                <div className="photos_videos_signup">Sign up to see photos and videos from your friends.</div>
                                <button className="btn"><img className="fb_logo" src={fb} alt="Signup with Facebook" />Sign Up with Facebook</button>
                                <div className="or_container">
                                    <div className="or_divider"></div>
                                    <div className="or">OR</div>
                                    <div className="or_divider"></div>
                                </div>
                                <div className="inpgrp_signin">
                                <form action="POST" className="inpgrp_signup">
                                    <input type="text" className="inp" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email address"/>
                                    <input type="text" className="inp" onChange={(e) => { setName(e.target.value) }} placeholder="Full Name"/>
                                    <input type="text" className="inp" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username"/>
                                    <input type="password" className="inp" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                                    <p className="learnmore">People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                                    <p className="privacy_dt">By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                                    <button className="btn_sinup" onClick={submit}>Sign Up</button>
                                </form>
                                </div>
                                
                                
                                
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>
                        hello
                    </Grid>
                </Grid>
            </div>
        )
}


export default SignupPage;