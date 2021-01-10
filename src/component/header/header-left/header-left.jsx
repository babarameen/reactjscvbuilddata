import React from 'react';
import Data from '../../Asset/Data/data'
import "./header-left.css"
export default class header_left extends React.Component{
    state={
        Data:Data
    }
    render(){
    console.log(this.state.Data);
        let res = this.state.Data.map((obj,i)=>{
            return <div className='header' key={i}>
                <h1>name:{obj.name}</h1>
                <h1>Age:{obj.age}</h1>
                <h1>Age:{obj.class}</h1>
            </div>
        })
        return(
            <div>
                {res}
            </div>
        )
    }
}