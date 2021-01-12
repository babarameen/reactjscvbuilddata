import React from 'react';
import Data from '../../Asset/Data/data'
import "./header-left.css"
export default class header_left extends React.Component{
    state={
        Data:Data
    }
    render(){
        let res = this.state.Data.map((obj,i)=>{
            return <div className='header' key={i}>
             <h1 class="avatarname">{obj.leftheader.name}</h1>
             <h1 class="avatartitle">{obj.leftheader.job_title}</h1>
             <p className="avatardes">{obj.leftheader.about_me}</p>
            </div>
        })
        return(
            <div>
                {res}
            </div>
        )
    }
}