import React, {Component} from 'react';
import DeveloperDetails from '../../imports/ui/DeveloperDetails.jsx';


export default class Developers extends Component {
    constructor(){
        super();
        this.state = {
            message: ""
        }
    }
    handleClick() {

        this.setState({message:"coming soon"})
    }
    render() {
        return (
            <div className={"wrapper"}>
                <ul className={"devList"}>
                    <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/47.png"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Abednego TM</p>
                            <p  className={"devPost"}>Designer/Developer</p>
                        </div>
                    </li>
                    <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/oli.jpg"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Olivier JM</p>
                            <p  className={"devPost"}>Developer</p>
                        </div>
                    </li>
                </ul>
                <div className="detailsPane">
                    <DeveloperDetails name={this.state.message}/>
                </div>
            </div>

        )

    }
}