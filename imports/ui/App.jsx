import React, { Component } from 'react';

import DeveloperDetails from '../../imports/ui/DeveloperDetails.jsx';
import MainHeader from '../../imports/ui/MainHeader.jsx';
import Developers from '../../imports/ui/Developers.jsx';
export default class App extends Component{
   render(){
       return(
           <div>
               <MainHeader/>
               <img className={"menuico"} src="/images/menuIcon.svg" alt="svg"/>
               <div className={"boundTitleContainer"}>
                    <div className={"boundTitle"}>Developers</div>
               </div>
               <div className="wrapper">
                   <div className="devComp">
                       <Developers/>
                   </div>
                   <div className="detailsComp">
                       <DeveloperDetails/>
                   </div>
               </div>
           </div>
       )
   }
}