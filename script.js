// Code goes here

var canvas = new fabric.Canvas('c', { selection: false });
var grid = 80;

// create grid
// rgba(255,255,255,0.4)
for (var i = 0; i < (600 / grid); i++) {
  var name =(7+i)*100;
  canvas.add(new fabric.Line([ i * grid , 0, i * grid, 600], { stroke: 'rgba(160,160,160,0.1)', selectable: false }));
 divGrid(grid*i, (7+i)*100)
  canvas.add(new fabric.Text(name, {left: 2,top: i*grid,fill: 'black',fontSize:10}) );
  canvas.add(new fabric.Line([ 0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
}
function divGrid (top,name){
	for (var i = 1; i < 4; i++) {
		  i*15;
		  console.log(top+(grid/4)*i)
		  var div  = (top+(grid/4)*i)
		  var _name =  ((i*15)+name).toString() ;
		  canvas.add(new fabric.Line([ 0, div, 600, div], { stroke: 'rgba(160,160,160,0.2)', selectable: false }));
		  canvas.add(new fabric.Text(_name, {left: 3,top: div,fill: 'black',fontSize:8}) );
	}
}

var cita = new fabric.Rect({ fill: 'rgba(232,149,148,1)',width: 100,height: 80  });
var nameText = new fabric.Text("Tilt-Test", {left:10,top:19,fill: 'rgb(0,0,0)',fontSize:14 , fontFamily: "Helvetica"}) ;
var hour = new fabric.Text("7:00", {left:10,top:5,fill: 'rgb(0,0,0)',fontSize:14 , fontFamily: "Helvetica"}) ;
canvas.add( new fabric.Group([cita,nameText,hour],{left:25,top:1} ) )
// console.log(divGrid(600))

canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});

/*

new fabric.Text(i, {left: 2,top: i*grid,fill: '#f55'});
var rect = new fabric.Rect({ left: 100,top: 100,fill: 'red',width: 20,height: 20  });
*/
//(17,	17,	17, 0.4)	
