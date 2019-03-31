var segment;
var k = 2;
var epsilon = 2;
var w = 160.0;
var r;
var o;
function Condition(x, y){
	var p = {x: x, y:y};
    d1 = dist(segment.p1, p);
    d2 = dist(segment.p2, p);

    writeMessage(d1 + " " + d2+ " " + (d1/d2));
    propTest = Math.abs(d1 - k *d2) < epsilon;

    d = dist(o, p);
    writeMessage((d-r) + " Raio = " + r, + " Razao = " + (d1/d2));

    var razao = d1/d2;

    c = Math.abs(r - d) < 2

    if(c){
        writeValue("2.00");
    } else{
        writeValue(parseFloat(razao.toFixed(2 || 10)));
    }


    return c;
    //return propTest;
}

function Latex(){
    return "$$ \\frac{PA}{PB} = $$";
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

	r = (w/(k+1) + w)/2;
	o = {x:segment.p2.x - w/(k+1) + r, y: segment.p2.y};
    //objects.push(new Point(o.x, o.y, "O"));
}


function Title(){
    return "Encontre o lugar geométrico dos pontos P tais que PA/PB = 2"
}
