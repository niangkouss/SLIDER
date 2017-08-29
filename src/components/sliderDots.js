/**
 * Created by sole l on 2017/8/30.
 */
import React from 'react';
export default class Dots extends React.Component{
    render(){
        if(this.props.dots){

            return(
                <div className="dots">
                    {
                        this.props.images.map((item,index)=>(
                            <span key={index} className={"dot "+(index==this.props.pos?'active':'')} onClick={()=>this.props.turn(index-this.props.pos)}></span>
                        ))
                    }
                </div>
            )
        }else{
            return null;
        }

    }
}