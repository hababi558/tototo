var ball,database,position,ball2;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"
var location = database.ref("ball/position");
location.on("value",readPosition,error);
   

ball2 = createSprite(300,250,10,10);
ball2.shapeColor = "blue"

var location2 = database.ref("ball2/position2");
location2.on("value",readPosition2,error2);

}

function draw(){
    background("white");
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}



function writePosition(x,y){
database.ref("ball/position").set({
x: position.x+x,
y: position.y+y
})

}
function readPosition(data){
  position = data.val();

  ball.x = position.x
  ball.y = position.y
}



function error(){
    console.log(eroor)
}

function posBall(x,y){
    database.ref("ball2/position2").set({
        x: position.x+x

    })
}


function readPosition2(Data){
position2 = Data.val();

ball2.x = position2.x;
ball2.y = position2.y;


}
function error2(){
    console.log("hi")
}
