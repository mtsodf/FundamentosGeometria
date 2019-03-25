var segment;
var k = 2;
var epsilon = 2;
var w = 250.0;
var r;
var o;
function Condition(x, y){
	var p = {x: x, y:y};
    d = dist(o, p);
    writeMessage((d-r) + " Raio = " + r);

    return Math.abs(r - d) < epsilon;

}

function CorrectPos(loc){
	if(Condition(loc.x, loc.y)){
		v = new Point(loc.x-o.x, loc.y-o.y);
		v.normalize();
		loc.x = o.x + r*v.x;
		loc.y = o.y + r*v.y;
	}
}

function AddInitObjects(){

    var middley = height/2.0;
    var middlex = width /2.0;
    segment = new Segment(middlex-w/2-20, middley, middlex+w/2-20, middley, "A", "B");
    objects.push(segment);

	r = w/2;
	o = {x:(segment.p2.x + segment.p1.x)/2 , y: (segment.p2.y + segment.p1.y)/2};
    //objects.push(new Point(o.x, o.y, "O"));
}


function Title(){
    return "Encontre os pontos P tais que APB é ângulo reto."
}
