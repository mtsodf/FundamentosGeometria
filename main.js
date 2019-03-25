    var canvas;
    var ctx;
    var loc = {x: 0.0, y:0.0};
    var currenty = 0.0;
    var objects = new Array();
    var width;
    var height;

    function paintCurrent(ctx) {
        if(Condition(loc.x, loc.y)){
            ctx.fillStyle = green;
            ctx.strokeStyle = green;
        } else{
            ctx.fillStyle = black;
            ctx.strokeStyle = black;
        }       

        ctx.beginPath();
        ctx.moveTo(segment.p1.x, segment.p1.y);
        ctx.moveTo(segment.p1.x, segment.p1.y);
        ctx.lineTo(loc.x, loc.y);
        ctx.lineTo(segment.p2.x, segment.p2.y);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 4, 0, Math.PI * 2, true); // Círculo exterior
        ctx.closePath();
    }

    function windowToCanvas(canvas, x, y) {
       var bbox = canvas.getBoundingClientRect();
       return { x: x - bbox.left * (canvas.width  / bbox.width),
                y: y - bbox.top  * (canvas.height / bbox.height)
              };
    }


    function init(){

        document.getElementById('title').innerHTML = Title();
        
        canvas = document.getElementById('tutorial');
        width = canvas.width;
        height = canvas.height;
        ctx = canvas.getContext('2d');

        canvas.onmousemove = function (e) {
            loc = windowToCanvas(canvas, e.clientX, e.clientY);
            var div = document.getElementById('coords');
            div.innerHTML= loc.x + " " + loc.y;
        };

        canvas.onclick = function(e) {

            
            var loc = windowToCanvas(canvas, e.clientX, e.clientY);
            var color = black;
            if(Condition(loc.x, loc.y)){
                color=green;
                CorrectPos(loc);
            }
            p = new Point(loc.x, loc.y, "", color);
            objects.push(p); 
        };

        AddInitObjects();
        setInterval(draw, 10);

    }



    function draw(){
     
        if (canvas.getContext){
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Print Objects
            for (var i = objects.length - 1; i >= 0; i--) {
                objects[i].paint(ctx);
            }
            // Print Current Position
            ctx.beginPath();        
            paintCurrent(ctx);
            ctx.fill();
            ctx.closePath();
        }
    }

    class Point{
        constructor(x, y, name="", color=black, r=4){
            this.x = x;
            this.y = y;
            this.r = r;
            this.name=name;
            this.color = color;
        }

        paint(ctx){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true); // Círculo exterior
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
            
            ctx.font = "15px Arial";
            ctx.fillText(this.name, this.x-10, this.y+20);

        }

        normalize(){
            origin = new Point(0.0, 0.0);
            var norm = dist(this, origin);
            this.x = this.x/norm;
            this.y = this.y/norm;
        }
    }

    class Segment{
        constructor(x1, y1, x2, y2, name1="", name2="", color=black){
            this.p1 = new Point(x1, y1, name1);
            this.p2 = new Point(x2, y2, name2);
            this.color = color;
        }

        paint(ctx){
            this.p1.paint(ctx);
            this.p2.paint(ctx);

            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.p1.x, this.p1.y);
            ctx.lineTo(this.p2.x, this.p2.y);
            ctx.stroke();
        }
    }

    function writeMessage(message) {
        document.getElementById('message').innerHTML= message;
    }

    function drawAll(){
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                if(Condition(i, j)){
                    objects.push(new Point(i+0.0, j+0.0, "", black, 1));
                }
            }
        }
    }

    function dist(p1, p2){
        var dx = (p1.x - p2.x);
        var dy = (p1.y - p2.y);
        return Math.sqrt(dx*dx + dy*dy);
    }

    function removeLast(){
        objects.pop();
    }