import { Grid } from "@mui/material";
import React , { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './LoginPage.css'
import ig_login_img from '../../images/login.svg'
import ig_logo from '../../images/login.png'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'


function LoginPage(){
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8001/login",{
                email,password
            })
            .then(res=>{
                if(res.data!=="invalid"){
                    alert("valid")
                }
                else if(res.data==="invalid"){
                    alert("User have not sign up")
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
                    <Grid item xs={3}>
                        hello
                    </Grid>
                    <Grid item xs={6}>
                        <div className="main_loginpage">
                            <div>
                                <img src={ig_login_img} alt="Instagram Login" className="left_mob_image" />
                            </div>
                            <div className="rightcomponent_loginpage">
                                <img src={ig_logo} alt="Instagram logo" className="logo_loginpage" />
                                <div className="inpgrp_signin">
                                    <input type="text" className="inp" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address"/>
                                    <input type="password" className="inp" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                                    <button className="btn" onClick={submit}>Sign In</button>
                                </div>
                                <div className="or_container">
                                    <div className="or_divider"></div>
                                    <div className="or">OR</div>
                                    <div className="or_divider"></div>
                                </div>
                                <div className="login_fb">
                                    <img className="fb_logo" src={fb} alt="Login with Facebook" />
                                    <div>Login with Facebook</div>
                                </div>
                                <div className="forgot_pass">Forgot your Password?</div>
                                <div className="signin_login_opt">
                                   <div className="signin_login_ac">
                                            Don't have an account? <span className="sign_ac">Sign up</span> 
                                        </div>
                                </div>
                            <div className="downloadapp">
                                <div className="downloadapp_getapp">Get the app.</div>
                                <div className="downloadapp_store">
                                    <img className="downloadapp_store" src={appstore} alt="App store" />
                                    <img className="downloadapp_store" src={playstore} alt="Play store" />
                                </div>
                            </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        hello
                    </Grid>
                </Grid>
            </div>
        )
    }


export default LoginPage;