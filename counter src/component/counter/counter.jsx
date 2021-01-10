import React from 'react'
import './counter.css'
export default class counter extends React.Component{
     State={
        val:0
        }
         x=0
        increment=()=>{
            this.x++
          this.setState({
              val:this.x
          })
        }
        decreament=()=>{
            this.x--
          this.setState({
              val:this.x
          })
        }
        clear=()=>{
            this.x=0
            this.setState({
                val:this.x
            })
        }
    render() {
        // console.log(this.state.val);
        return (
             <div className='counter'>
                <h1> {this.x}</h1>
                <button onClick={this.increment}>increament</button>
                <button onClick={this.decreament}>decreament</button>
                <button onClick={this.clear}>clear</button>
             </div>
        );
    }
}