import React, {Component} from 'react';

export default class Developers extends Component {
    handleClick() {
        console.log("hello there")
    }
    render() {
        return (
                <ul>
                    <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/47.png"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Abednego TM</p>
                            <p  className={"devPost"}>Designer/Developer</p>
                        </div>
                    </li>
                    <li className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/oli.jpg"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Olivier JM</p>
                            <p  className={"devPost"}>Developer</p>
                        </div>
                    </li>
                </ul>
        )

    }
}