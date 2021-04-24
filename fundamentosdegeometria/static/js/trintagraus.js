var segment;
var k = 2;
var epsilon = 2;
var w = 100.0;
var r;
var o1;
var o2;

function Condition(x, y){
    var p = {x: x, y:y};

    var v1 = new Point(segment.p1.x-p.x, segment.p1.y-p.y);
    var v2 = new Point(segment.p2.x-p.x, segment.p2.y-p.y);

    v1.normalize()
    v2.normalize()

    var dot = v1.x * v2.x + v1.y * v2.y;

    var ang = Math.acos(dot)*180/Math.PI;

    c = Math.abs(ang - 30) < epsilon;

    if(c){
            writeValue("30.00 graus");
    } else{
        writeValue(parseFloat(ang.toFixed(2 || 10)) + " graus");
    }

    return c;

}

function CorrectPos(loc){
    if(Condition(loc.x, loc.y)){
        v = new Point(loc.x-o1.x, loc.y-o1.y);
        v.normalize();
        loc.x = o1.x + r*v.x;
        loc.y = o1.y + r*v.y;
    }
}

function Latex(){
    return "$$ \\measuredangle  APB = $$";
}

function AddInitObjects(){

    var middley = height/2.0;
    var middlex = width /2.0;
    segment = new Segment(middlex-w/2-20, middley, middlex+w/2-20, middley, "A", "B");
    objects.push(segment);

    var o1x = (segment.p1.x + segment.p2.x)/2
    var o1y = (segment.p1.y + segment.p2.y)/2 - w*Math.sqrt(3)/2
    var o2y = (segment.p1.y + segment.p2.y)/2 + w*Math.sqrt(3)/2

    o1 = new Point(o1x, o1y, "O1");
    o2 = new Point(o1x, o2y, "O2");

    r = dist(o1, segment.p1);

    o = {x:(segment.p2.x + segment.p1.x)/2 , y: (segment.p2.y + segment.p1.y)/2};
    //objects.push(new Point(o.x, o.y, "O"));
}


function Title(){
    return "Encontre os pontos P tais que APB mede 30 graus."
}
