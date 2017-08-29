/**
 * Created by sole l on 2017/8/30.
 */
import React from 'react'
export  default class Arrows extends React.Component{
    render(){
        if(this.props.arrows){
            return (
             <div className="arrows">
                 <span className="arrow arrow-left" onClick={()=>this.props.turn(-1)}>&lt;</span>
                 <span className="arrow arrow-right" onClick={()=>this.props.turn(1)}>&gt;</span>
             </div>
            )
        }
        else{

            return null;
        }
    }
}