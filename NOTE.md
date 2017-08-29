##心得
- 组件从外写入内,在slider.js的render先构建整体结构,要分离的结构直接在组件页写,就不用写完才拆分组件
- 忘记下载babel-preset-react,使用webpack打包也要编译react的JSX语法
- slierItem的style在slider定义好之后再传入,这样利于组件的复用
- 组件要使用的函数都定义在slider内部,子组件要再传入,传入会有this的问题,要么在定义函数本身就用箭头函数去定义,要么传入函数的时候bind(this),把组件的this传入
- 子组件传入准则要什么传什么,子组件无需再次this.props=props;
- 引入子组件的接收名字不可以和文件名字一样,因为在使用子组件的时候可能会和文件名混合
- 函数的问题,在传入子组件函数的时候除了解决this的问题,还要用一个箭头函数包裹,因为this.props.turn();本身是代码,直接写就会执行这个代码,这个代码调用setState,因此调用render,render再次调用render,形成死循环,因此为了同时解决this和此问题,要用箭头函数包裹
- react本身是无法实现无缝轮播图的,react是通过pos改变left,无法有一个瞬时跳跃的过程,因为要用jquery去实现
    补充安装jquery
    react中的实现准备工作在生命周期函数componentDidMount中实现
更改处:
```
1.第一张图片多一张
2.边界条件设置好,在最后一张图片的时候瞬间跳跃到一张,这里借助jq,除此之外用动画改变left
3.原本用react依靠原生css,就要用transitionDuration,在jq中就可以用动画
this.$sliders.stop().animate({left:pos*-200},this.props.speed*100);
因此原来定义定义的style只用给宽就可以
4.dots多了一个,修改一下,用了嵌套三元
 <span key={index} className={index==this.props.images.length-1?'':((index==this.props.pos)||(this.props.pos==this.props.images.length-1&&index==0)?'active dot':'dot')} onClick={()=>this.props.turn(index-this.props.pos)}></span>
```
