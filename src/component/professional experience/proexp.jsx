import React from 'react'
import Data from '../Asset/Data/data'
import './proexp.css'
export default class proexp extends React.Component{
    state={
        Data:Data
    }
    render() {
        let res=this.state.Data.map((obj,i)=>{
            return <div>
                <h4 className="pro_exp">{obj.proexp.proexp_title}</h4>
                <div>
                    <h5 className="jb_title">{obj.proexp.exp1.job_title}</h5>
                    <h5 className="job_company">{obj.proexp.exp1.company}</h5>
                    <div className="job_date_main">
                        <span className="job_dates">{obj.proexp.exp1.st_date} - {obj.proexp.exp1.end_date}</span>
                        <span className="job_location">{obj.proexp.exp1.company_loc}</span>
                    </div>
                    <h5 className="achiv_tag">achivements</h5>
                    <ul>
                        <li>{obj.proexp.exp1.achivement.ach1}</li>
                        <li>{obj.proexp.exp1.achivement.ach2}</li>
                        <li>{obj.proexp.exp1.achivement.ach3}</li>
                        <li>{obj.proexp.exp1.achivement.ach4}</li>
                    </ul>
                </div>
                <div>
                    <h5 className="jb_title">{obj.proexp.exp2.job_title}</h5>
                    <h5 className="job_company">{obj.proexp.exp2.company}</h5>
                    <div className="job_date_main">
                        <span className="job_dates">{obj.proexp.exp2.st_date} - {obj.proexp.exp2.end_date}</span>
                        <span className="job_location">{obj.proexp.exp2.company_loc}</span>
                    </div>
                    <h5 className="achiv_tag">achivements</h5>
                    <ul>
                        <li>{obj.proexp.exp2.achivement.ach1}</li>
                        <li>{obj.proexp.exp2.achivement.ach2}</li>
                        <li>{obj.proexp.exp2.achivement.ach3}</li>
                        
                    </ul>
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