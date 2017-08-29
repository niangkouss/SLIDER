/**
 * Created by sole l on 2017/8/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/slider'
let images=[
    {src:require('./img/1.jpg')},
    {src:require('./img/2.jpg')},
    {src:require('./img/3.jpg')},
    {src:require('./img/1.jpg')}
];
ReactDOM.render((
    <Slider
        images={images}
        interval={2}
        speed={1}
        autoplay={true}
        pause={true}
        arrows={true}
        dots={true}
    />
),document.querySelector('#root'));