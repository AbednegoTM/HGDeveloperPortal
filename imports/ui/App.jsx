import React, { Component } from 'react';

import MainHeader from '../../imports/ui/MainHeader.jsx';
import Developers from '../../imports/ui/Developers.jsx';


let  variablej = "test";
export default class App extends Component{

    constructor (){
        super();
          this.varia = "test2";

        this.state = {
            isMenuDroped: false,
            animateIcon: "",
            animateMenu: "",
            iconType: "/images/menuIcon.svg"
        }
    }
    handleMenuButtonClick(){
        if (this.state.isMenuDroped){
            this.setState({
                isMenuDroped:false,
                animateMenu:"",
                animateIcon: "",
                iconType: "/images/menuIcon.svg"
            });

        } else {
            this.setState({
                isMenuDroped:true,
                animateMenu:"animateMenu",
                animateIcon: "animateIcon",
                iconType:"/images/upArrow.svg"
            });
        }
        variablej = "changed";
    }
   render(){
       return(
           <div>
               <MainHeader/>
                <div className={`dropMenu ${this.state.animateMenu}`}>
                        menu coming soon
                    {variablej}

                    {/*{this.varia}*/}
                </div>
               <img onClick={this.handleMenuButtonClick.bind(this)}
                    className={`menuico ${this.state.animateIcon}`}
                    src={this.state.iconType} alt="svg"/>
               <div className={"boundTitleContainer"}>
                    <div className={"boundTitle"}>Developers</div>
               </div>
               <Developers/>
           </div>
       )
   }
}