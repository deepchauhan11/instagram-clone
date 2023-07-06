import React , {Component} from "react"
import './StatusBar.css'
// import MainContent from "../MainContent/MainContent";
// import NavBar from "../NavBar/NavBar";
import statusimg from '../../images/profile.png'
import Avatar from "@mui/material/Avatar";


class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            statusList: []
        };
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data = [
            {
                "username": "Deepak",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },
            {
                "username": "Sumit",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },
            {
                "username": "Aman",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },
            {
                "username": "Avinash",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },
            {
                "username": "Omkar",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },
            {
                "username": "Nehal",
                "imageURL": "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            },            
        ]
        this.setState({statusList:data});
    }

    render(){
        return(
            <div>
                <div className="statusbar_container">
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_text">
                                    {item.userName}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        );
    }
}


export default StatusBar;