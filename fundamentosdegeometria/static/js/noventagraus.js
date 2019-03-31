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
    c = Math.abs(r - d) < epsilon;

    if(c){
            writeValue("90.00 graus");
    } else{
        var v1 = new Point(segment.p1.x-p.x, segment.p1.y-p.y);
        var v2 = new Point(segment.p2.x-p.x, segment.p2.y-p.y);

        v1.normalize()
        v2.normalize()

        var dot = v1.x * v2.x + v1.y * v2.y;

        var ang = Math.acos(dot)*180/Math.PI;

        writeValue(parseFloat(ang.toFixed(2 || 10)) + " graus");
    }

    return c;

}

function CorrectPos(loc){
    if(Condition(loc.x, loc.y)){
        v = new Point(loc.x-o.x, loc.y-o.y);
        v.normalize();
        loc.x = o.x + r*v.x;
        loc.y = o.y + r*v.y;
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

    r = w/2;
    o = {x:(segment.p2.x + segment.p1.x)/2 , y: (segment.p2.y + segment.p1.y)/2};
    //objects.push(new Point(o.x, o.y, "O"));
}


function Title(){
    return "Encontre os pontos P tais que APB é ângulo reto."
}
