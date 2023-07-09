var hole = document.getElementById("hole");
var container = document.getElementById("container");
var result = document.getElementById("result"); 
var scoredisplay = document.getElementById("text");
var jumping = 0;
var score = 0;

hole.addEventListener('animationiteration',gap);

function gap(){
    var random = -((Math.random()*450) + 250);
    hole.style.top = random + "px";
    score++;
}

var fall = setInterval(function(){
    var birdfly =  parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(jumping == 0)
    {bird.style.top= (birdfly + 2) + "px"};

    var wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = (600 + holeTop);

    if((birdfly > 530) || ((wallLeft < 90) && (wallLeft > -100) && ((birdfly < hTop) || birdfly > hTop + 200))){
        result.style.display = "block";
        container.style.display = "none";
        scoredisplay.innerText = `Score : ${score}`;
    }

},10)


function fly(){
    jumping = 1;

    var birdfly =  parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(birdfly > 90){
    bird.style.top = (birdfly - 60) + "px";
    };

    setTimeout(function(){
        jumping = 0;
    },100)
}

window.addEventListener("keydown" , fly);
container.addEventListener("keydown" , fly);