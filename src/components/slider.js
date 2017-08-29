/**
 * Created by sole l on 2017/8/30.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Items from './sliderItem';
import Dots from './sliderDots';
import Arrows from './sliderArrows';
import $ from 'jquery'
require('./slider.less');
export default class  Slider extends React.Component{
    constructor(props){
        super(props);//this.props=pros;
        this.state={pos:0}//外部传入不能更改,要轮播图的变化要内部的状态改变
    }
    turn(n){
        let pos = this.state.pos;
        pos +=n;
        if(pos >= this.props.images.length){
            this.$sliders.css('left',0);
            pos=1;
        }
        if(pos<0){
            this.$sliders.css('left',this.props.images.length*-200);
            pos = this.props.images.length-1;
        }
        this.$sliders.stop().animate({left:pos*-200},this.props.speed*1000);
        this.setState({pos})
    }
    play(){
        this.$timer = setInterval(()=>{
            this.turn(1)
        },this.props.interval*1000)
    }
    componentDidMount(){
        this.$sliders = $('.sliders');
        if(this.props.autoplay){
            this.play();
        }
    }
    render(){
        let images = this.props.images;
        let style={
            width:200*(images.length+1)
           /* left:this.state.pos*-200,
            transitionDuration:this.props.speed +'s'*/
        };
        return(
            <div onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.play()} className="wrapper">
                <Items images={images} style={style}/>
                <Dots turn={this.turn.bind(this)} dots={this.props.dots} images={this.props.images} pos={this.state.pos}/>
                <Arrows  turn={this.turn.bind(this)} arrows={this.props.arrows}/>
            </div>
        )
    }
}