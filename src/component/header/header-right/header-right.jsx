import React from 'react'
import './header-right.css'
import Data from '../../Asset/Data/data'
export default class headerright extends React.Component{
    state={
        Data:Data
    }
    render() {
        let res=this.state.Data.map((obj,i)=>{
            return <div key={i} className="rightheader">
                <p><a href="mailto:babarrana327@gmail.com" target="_blank">{obj.rightheader.email}</a></p>
                <p><a href="tel:+923044169606" target="_blank">{obj.rightheader.phone_number}</a></p>
                <p><a>{obj.rightheader.location}</a></p>
                <p><a href="https://www.linkedin.com/in/babar-ameen-282240130" target="_blank">{obj.rightheader.linkedin}</a></p>
                <p><a href="https://github.com/babarameen" target="_blank">{obj.rightheader.github}</a></p>
            </div>
        })
        return (
            <div>
                {res}
            </div>
        )
    }
}