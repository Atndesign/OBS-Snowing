/*
=========================
This project was created for christmas
Atndesign/KevinMoulun 2019
=========================
*/


//Instanciate a canvas
var canvas = document.getElementById("snow");
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var snowballList = [];

function Snowball(x,y,size){
    this.size = size;
    this.x = x;
    this.y = y;
    this.dy = Math.floor(Math.random() * 5 + 5); //Your snowball speed
    this.display = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0 , Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
    }
    this.update = function(){
        if(this.x > innerWidth){
            this.x = 0;
        }
        if(this.y > innerHeight){
            this.y = 0;
        }
        this.x += 1.5;
        this.y += this.dy;
    }
}

function generateSnowballs(nbrSnowballs){
    for(snowball = 0; snowball < nbrSnowballs; snowball++){
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        var size = (Math.random() * 1) + 1;

        snowballList.push(new Snowball(x,y,size));
    }
}

function animate(){
    ctx.clearRect(0,0,innerWidth,innerHeight)
    snowballList.forEach(snowball => {
        snowball.update();
        snowball.display();
    })
}
generateSnowballs(100) //The number you want to generate
setInterval(animate, 40);