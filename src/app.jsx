import React from 'react'
import Headerleft from './component/header/header-left/header-left'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class app extends React.Component{
    render() {
        return (
             <div>
                 <Headerleft/>
             </div>
        );
    }
}