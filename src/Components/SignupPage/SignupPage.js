import { Grid } from "@mui/material";
import React , {Component} from "react"
import './SignupPage.css'   
import ig_logo from '../../images/login.png'
import fb from '../../images/fb.png'


class SignupPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            isSignup: true
        }
    }
    changeLogin = () =>{
        if(this.state.isSignup){
            this.setState({isSignup: false})
        }else{
            this.setState({isSignup: true})
        }
    }
    render(){
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
                                    <input type="text" className="inp" placeholder="Phone number or email address"/>
                                    <input type="text" className="inp" placeholder="Full Name"/>
                                    <input type="text" className="inp" placeholder="Username"/>
                                    <input type="password" className="inp" placeholder="Password"/>
                                    <p className="learnmore">People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                                    <p className="privacy_dt">By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                                    <button className="btn_sinup">Sign Up</button>
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
}

export default SignupPage;