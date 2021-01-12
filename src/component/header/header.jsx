import React from 'react'
import './header.css'
import Headerleft from './header-left/header-left'
import Headercenter from './header-center/header-center'
import Headerright from './header-right/header-right'
export default class header extends React.Component{
    render() {
        return (
             <div className="container">
                 <div className="row">
                     <div className="col-md-5">
                        <Headerleft/>
                     </div>
                     <div className="col-md-2">
                        <Headercenter/>
                     </div>
                     <div className="col-md-5">
                        <Headerright/>
                    </div>
                 </div>
                 <hr className="header-bottom-border"/>
             </div>
            
        );
    }
}