import React from 'react'
import Header from './component/header/header'
import Headerleft from './component/header/header-left/header-left'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Areofex from './component/area-of-expertise/areaofexpertise'
import Proexp from './component/professional experience/proexp'
export default class app extends React.Component{
    render() {
        return (
             <div>
                 <Header/>
                 <hr className="header-bottom-border" style={{border:"1px solid #f2745e"}}/>
                 <Areofex/>
                 <Proexp/>
             </div>
        );
    }
}