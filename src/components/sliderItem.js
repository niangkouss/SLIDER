/**
 * Created by sole l on 2017/8/30.
 */
import React from 'react';
export default class sliderItem extends React.Component{
    render(){
        return(
            <ul style={this.props.style} className="sliders">
                {
                    this.props.images.map((item,index)=>(
                        <li className="slider" key={index}>
                            <img src={item.src}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}