import React , {Component} from "react"
import { Grid } from "@mui/material";
import './NavBar.css'
import ig_logo from '../../images/login.png'
import Home from '../../images/home.svg'
import Message from '../../images/message.svg'
import ProfilePic from '../../images/profile.png'
import Explore from '../../images/explore.svg'
import Love from '../../images/love.svg'
// import Notifications from '../../images/login.png'
// import Create from '../../images/login.png'
import Avatar from "@mui/material/Avatar";


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="navbar_wrapper">
                <div className="barcomponent">
                    <Grid container>
                        <Grid item xs={2}>Grid 1</Grid>
                        <Grid item xs={3}>
                            <img src={ig_logo} alt="Instagram" width={105} />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="searchbar" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img src={Home} className="navbar_img" alt="Home" width={25}/>
                            <img src={Message} className="navbar_img" alt="Message" width={25}/>
                            <img src={Explore} className="navbar_img" alt="Explore" width={25}/>
                            <img src={Love} className="navbar_img" alt="Love" width={25}/>
                            <Avatar src={ProfilePic} className="nav_img" style={{"maxHeight":"25px","maxWidth":"25px"}}>

                            </Avatar>
                            {/* <img src={Notifications} alt="Notifications" width={25}/> */}
                            {/* <img src={Create} alt="Create" width={25}/>  */}
                        </Grid>
                        <Grid item xs={1}>
                        {/* <img src={ProfilePic} alt="ProfilePic" width={25}/> */}
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}


export default NavBar;