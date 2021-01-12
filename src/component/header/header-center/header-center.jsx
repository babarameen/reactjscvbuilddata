import React from 'react'
import './header-center.css'
import Data from '../../Asset/Data/data'
export default class headercenter extends React.Component{
    state={
        Data:Data
    }
    render() {
        console.log(Data)
        let res=this.state.Data.map((obj,i)=>{
            return <div key={i}>
                <img src={obj.centerheader.img} alt=""/>
            </div>
        })
        return (
            <div className="image-border">
                <div className="image-shape">
                   {res}
                </div>
            </div>
        )
    }
}