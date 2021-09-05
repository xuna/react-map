import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

class ESMap extends React.Component {
  componentDidMount() {
    let map = new window.esmap.ESMap({
      container: document.getElementById('map-container'), //绑定dom
      mapDataSrc: './data', //地图数据位置
   // mapThemeSrc: './data/theme', //主题数据位置
      themeID: '2001',
      visibleFloors: 'all',
      loadLabel: false,
   //   token: 'escope',
      token: 'xsgonganju',
    })
    //打开地图数据
    map.openMapById('test666')
    map.showCompass = true //显示指南针

    //导航线
    var lineStyle6 = {
      color: "#33cc61",
      lineWidth: 2,
      alpha: 0.8,
      offsetHeight: 1,
      lineType: window.esmap.ESLineType.ESARROW,
      noAnimate: false  //控制箭头动画
  }

  let im = new window.esmap.ESImageMarker({
    x: map.center.x,
    y: map.center.y,   //如果不添加x和y，则默认坐标在地图中心。
    url: './image/user.png',  //图片标注的图片地址
    size: 64,   			//图片大小 或者 size:{w:32,h:64},
    spritify:true,			//跟随地图缩放变化大小，默认为true，可选参数
    height:6,    			//距离地面高度
    showLevel: 5,  		//地图缩放等级达到多少时隐藏,可选参数
    seeThrough: true,		//是否可以穿透楼层一直显示,可选参数
    //angle:0,  	//如果设置了就是固定marker角度，与地图一起旋转。(size需要重新设置)
    id: 2017,   			//id，可自定义
    name: 'myMarker'   		//name可自定义
  });

  let im1 = new window.esmap.ESImageMarker({
    x: map.center.x+10,
    y: map.center.y,   //如果不添加x和y，则默认坐标在地图中心。
    url: './image/user.png',  //图片标注的图片地址
    size: 64,   			//图片大小 或者 size:{w:32,h:64},
    spritify:true,			//跟随地图缩放变化大小，默认为true，可选参数
    height:6,    			//距离地面高度
    showLevel: 5,  		//地图缩放等级达到多少时隐藏,可选参数
    seeThrough: true,		//是否可以穿透楼层一直显示,可选参数
    //angle:0,  	//如果设置了就是固定marker角度，与地图一起旋转。(size需要重新设置)
    id: 2017,   			//id，可自定义
    name: 'myMarker'   		//name可自定义
  });

  let im2 = new window.esmap.ESImageMarker({
    x: map.center.x+15,
    y: map.center.y+15,   //如果不添加x和y，则默认坐标在地图中心。
    url: './image/user.png',  //图片标注的图片地址
    size: 64,   			//图片大小 或者 size:{w:32,h:64},
    spritify:true,			//跟随地图缩放变化大小，默认为true，可选参数
    height:6,    			//距离地面高度
    showLevel: 5,  		//地图缩放等级达到多少时隐藏,可选参数
    seeThrough: true,		//是否可以穿透楼层一直显示,可选参数
    //angle:0,  	//如果设置了就是固定marker角度，与地图一起旋转。(size需要重新设置)
    id: 2017,   			//id，可自定义
    name: 'myMarker'   		//name可自定义
  });

  map.on('loadComplete',function(){
  //    map.setBackgroundImage('./image/bg.jpg');

  //    map.rotateAngle = 90;    //设置地图的旋转角度
    map.tiltAngle = 20;      //设置地图的倾斜角(最大72°)

    var layer = new window.esmap.ESLayer(window.esmap.ESLayerType.IMAGE_MARKER);

    layer.addMarker(im);              //将imageMarker添加到图层
    layer.addMarker(im1);
    layer.addMarker(im2);
    var floorLayer = map.getFloor(1)  //获取第一层的楼层对象
    floorLayer.addLayer(layer);       //将图层添加到楼层对象

    addlineMarker(lineStyle6);

  });

  function addlineMarker(lineStyle) {
    var center = map.center;
    var fnum = map.focusFloorNum;
    var v1 = {
        x: center.x,
        y: center.y,
        fnum: fnum,
        offset: 6
    }
    var v2 = {
        x: center.x + 10,
        y: center.y,
        fnum: fnum,
        offset: 6
    }
    var v3 = {
      x: center.x + 15,
      y: center.y + 15,
      fnum: fnum,
      offset: 6
   }

    //箭头导航线
    var points = [v1, v2, v3];
    var linemark = new window.esmap.ESLineMarker(1, points, lineStyle)
    linemark.datas = {
        case: 'ffff'
    }
    map.drawLineMark(linemark)
  }

  }
  render() {
    return(
        <div id='map-container'></div>
  )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(<ESMap />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
