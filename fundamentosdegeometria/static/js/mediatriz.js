var epsilon = 5.0;

function Condition(x, y){

	c = Math.abs(x - width/2) < epsilon

	if(c){
		writeValue("1.00")
	} else{
		var p = { x: x, y:y};
		var d1 = dist(segment.p1, p);
    	var d2 = dist(segment.p2, p);
    	var razao = d1/d2;
    	writeValue(parseFloat(razao.toFixed(2 || 10)));

	}

    return c;
}

function Latex(){
    return "$$ \\frac{PA}{PB} = $$";
}

function CorrectPos(loc){
    loc.x = width/2;
}

var segment;

function AddInitObjects(){
    var w = 200
    var middley = height/2.0;
    var middlex = width /2.0;
    segment = new Segment(middlex-w/2, middley, middlex+w/2, middley, "A", "B");
    objects.push(segment);
}

function Title(){
    return "Encontre o lugar geométrico dos pontos equidistantes a A e B"
}
