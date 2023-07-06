import { Grid } from "@mui/material";
import React , {Component} from "react"
import './LoginPage.css'
import ig_login_img from '../../images/login.svg'
import ig_logo from '../../images/login.png'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'


class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin: true
        }
    }
    changeLogin = () =>{
        if(this.state.isLogin){
            this.setState({isLogin: false})
        }else{
            this.setState({isLogin: true})
        }
    }
    render(){
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
                                    <input type="text" className="inp" placeholder="Phone number, email or username"/>
                                    <input type="password" className="inp" placeholder="Password"/>
                                    <button className="btn">Sign In</button>
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
                                    {
                                        this.state.isLogin ? 
                                        <div className="signin_login_ac">
                                            Don't have an account? <span className="sign_ac">Sign up</span> 
                                        </div> :
                                        <div className="signin_login_ac">
                                            Have an account ? <span className="sign_ac">Sign In</span>
                                        </div>
                                    }
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
}

export default LoginPage;