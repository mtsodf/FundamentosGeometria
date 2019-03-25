var epsilon = 5.0;

function Condition(x, y){
    return Math.abs(x - width/2) < epsilon;
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
