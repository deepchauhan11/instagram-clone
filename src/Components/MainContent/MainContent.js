import React , {Component} from "react"
import { Grid } from "@mui/material";
import './MainContent.css'
import StatusBar from "../StatusBar/StatusBar";
// import NavBar from "../NavBar/NavBar";


class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={6} className="maincontent">
                        <div>
                            <StatusBar />
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        );
    }
}


export default MainContent;