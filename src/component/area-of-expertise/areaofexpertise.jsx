import React from 'react'
import Data from '../Asset/Data/data'
import './areaofexpertise.css'
export default class areofexp extends React.Component{
    state={
        Data:Data
    }
    render() {
        let res = this.state.Data.map((obj,i)=>{
            return <div key="i">
                <h5 className="ex-title">{obj.areaofexpertise.ex_title}</h5>
               <div className="main-tag">
               <span className="tags">{obj.areaofexpertise.tag[0]}</span>
                <span className="tags">{obj.areaofexpertise.tag[1]}</span>
                <span className="tags">{obj.areaofexpertise.tag[2]}</span>
                <span className="tags">{obj.areaofexpertise.tag[3]}</span>
                <span className="tags">{obj.areaofexpertise.tag[4]}</span>
                <span className="tags">{obj.areaofexpertise.tag[5]}</span>
                <span className="tags">{obj.areaofexpertise.tag[6]}</span>
                <span className="tags">{obj.areaofexpertise.tag[7]}</span>
                <span className="tags">{obj.areaofexpertise.tag[8]}</span>
                <span className="tags">{obj.areaofexpertise.tag[9]}</span>
                <span className="tags">{obj.areaofexpertise.tag[10]}</span>
                <span className="tags">{obj.areaofexpertise.tag[11]}</span>
               </div>
            </div>
        })
        return (
            <div className="container">
                {res}
            </div>
        )
    }
}