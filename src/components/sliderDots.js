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
                            <span key={index} className={index==this.props.images.length-1?'':((index==this.props.pos)||(this.props.pos==this.props.images.length-1&&index==0)?'active dot':'dot')} onClick={()=>this.props.turn(index-this.props.pos)}></span>
                        ))
                    }
                </div>
            )
        }else{
            return null;
        }

    }
}