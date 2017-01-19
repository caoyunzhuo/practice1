/**
 * Created by Administrator on 2016/12/5 0005.
 */
var Oground = document.getElementById("ground");
var direction ='right';
//创建操
for(var i= 0;i < 50*25;i++){
    var Odiv = document.createElement("div");
    Odiv.className="grid";
    Oground.appendChild(Odiv);
}

//创建蛇
var snakeBody= [];
for(var i=0;i<3;i++){
    var Osnake = document.createElement("div");
    Osnake.className="snake";
    Osnake.style.top="60px";
    Osnake.style.left=60-i*20+"px";
    Oground.appendChild(Osnake);
    snakeBody.push(Osnake);
}

//创建食物
var bFlag=false;
var Ofoot_Left;
var Ofoot_Top;



var oFdiv = document.createElement('div');
//var oFdiv = null;
    function txt(){
    do{
        bFlag=false;
        Ofoot_Left=parseInt(Math.random()*50)*20;
        Ofoot_Top=parseInt(Math.random()*25)*20;
        for(var i=0;i<snakeBody.length;i++) {
            if (snakeBody[i].offsetLeft == Ofoot_Left && snakeBody[i].offsetTop == Ofoot_Top) {
                bFlag = true;
            }
        }
    }while(bFlag);

    //oFdiv = document.createElement('div');
    oFdiv.className = 'food';
    oFdiv.style.top = Ofoot_Top +'px';
    oFdiv.style.left = Ofoot_Left +'px';
        console.log(oFdiv.style.top);
        console.log(oFdiv.style.left);
    Oground.appendChild(oFdiv);
}
txt();

//蛇移动

var next = null;
function move(){
    var snakeHead = snakeBody[0];
    if(direction == 'right'){
        next = {
            top:snakeHead.offsetTop,
            left:snakeHead.offsetLeft + 20
        }
    }else if(direction == 'left'){
        next = {
            top:snakeHead.offsetTop,
            left:snakeHead.offsetLeft - 20
        }
    }else if(direction == 'top'){
        next = {
            top:snakeHead.offsetTop - 20,
            left:snakeHead.offsetLeft
        }
    }else if(direction == 'down'){
        next = {
            top:snakeHead.offsetTop + 20,
            left:snakeHead.offsetLeft
        }
    }

//吃食物变长
    if(oFdiv.offsetLeft==next.left&&oFdiv.offsetTop==next.top){
        oFdiv.className="snake";
        snakeBody.unshift(oFdiv);
        txt();
    }else{
        var oDiv = snakeBody.pop();
        oDiv.style.left = next.left +'px';
        oDiv.style.top = next.top +'px';
        snakeBody.unshift(oDiv);
    }



    //判断是否吃到自己



}

setInterval(move,200)

document.onkeydown = function(e){
    e = e || window.event;
    var kc = e.which || e.keyCode;
    if(kc == 37 && direction!='right'){
        direction = 'left';
    }else if(kc == 38 && direction!='down'){
        direction = 'top';
    }else if(kc == 39 && direction!='left'){
        direction = 'right';
    }else if(kc == 40 && direction!='top'){
        direction = 'down';
    }


};
