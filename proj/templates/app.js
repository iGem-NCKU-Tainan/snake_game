
var players = [];

$( document ).ready(function() {

  /* Ajax */ 
  /* get player data */
  $.ajax({
    type: "GET",
    url: "./get_data/",
    dataType: 'json'
  })
    .done(function(data) {
      alert("success");
      data.forEach(function(element) {
        players.push(element.fields)
      });
      console.log(players)
    })
    .fail(function() {
          alert( "error" );
    });
  // Update data
  $.ajax({
    type: "POST",
    url: "./update/",
    data: JSON.stringify(players)
  })
    .done(function(data) {
      console.log(data);
    });

  // csrf code fron django doc

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  var csrftoken = getCookie('csrftoken');
  function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });



});

/* Snake Game */
/*  按鍵的設定  */
const key_left=37
const key_up=38
const key_right=39
const key_down=40

var width=1450
var height=705

var canvas=document.getElementById('snake')
var ctx=canvas.getContext("2d")

function gameStart(){
    document.getElementById('snakeForm').style.display="none";
    new game
}

class boforeGame2{
    constructor(){
        

    }
}

class beforeGame{
    constructor(){
        this.starting()
    }

    starting(){
        this.adding({x:20,y:20,})
        this.adding({x: 0,y:20,})
        this.adding({x:290,y:20,})
        this.adding({x:50,y:0,})
        this.adding({x:60,y:140,})
        this.adding({x:70,y:20,})

        this.adding({x:20,y:30,})
        this.adding({x:20,y:40,})
        this.adding({x:20,y:50,})
        this.adding({x:20,y:60,})

        this.adding({x:30,y:60,})
        this.adding({x:40,y:60,})
        this.adding({x:50,y:60,})
        this.adding({x:60,y:60,})
        this.adding({x:70,y:60,})
        
        this.adding({x:70,y:70,})
        this.adding({x:70,y:80,})
        this.adding({x:70,y:90,})
        this.adding({x:70,y:100,})

        this.adding({x:20,y:100,})
        this.adding({x:30,y:100,})
        this.adding({x:40,y:100,})
        this.adding({x:50,y:100,})
        this.adding({x:60,y:100,})

        ctx.arc(50,20,3,0,Math.PI*2)
        ctx.stroke()
        ctx.fill()
    }

    adding({x,y,width=10,height=10,color='#FF7744'}){
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
  ctx.lineWidth = 1
    ctx.strokeStyle='#FFFFFF'
  ctx.strokeRect(x, y, width, height)
    }

}

class game{
    constructor(){
            /*蛇的部分*/
        this.x=20
        this.y=20
        this.speed=100  
        this.scale=10
        this.tail=[]
        this.length=3
        this.moveX=1   /*向上為正*/
        this.moveY=0    /*向下為正*/

            /*遊戲的interval*/
        this.gameInterval=null

            /*食物部分*/
        this.foodX=Math.floor(Math.random()*290/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*140/this.scale)*this.scale

            /*函式部分*/
        this.snakeBody() /*蛇運作的部分*/
        this.keyPress()  /*鍵盤感應*/
    }
        /*蛇身的部分，用array做推進，遊戲運作的核心*/
    snakeBody(){
        this.gameInterval=setInterval(()=>{

            this.update()
            this.tail.push({
                x:this.x,
                y:this.y
            })

            if(this.tail.length>this.length){
                this.tail.shift()
            }
            this.drawSnake()
            this.addFood()

        },this.speed)
    }
        /*讓蛇往前走 */
    drawSnake(){
        this.clear()
        for(let i=0;i<this.tail.length;i++){
            ctx.fillStyle='#7cf20a'
            ctx.fillRect(this.tail[i].x,this.tail[i].y,10,10)
            ctx.strokeStyle='#009900'
            ctx.strokeRect(this.tail[i].x,this.tail[i].y,10,10)
        }
    }
    clear(){
        ctx.clearRect(0,0,width,height)
    }
        /*主要遊戲運作偵測區，食物+死亡*/
    update(){
        this.x += (this.moveX*this.scale)
        this.y += (this.moveY*this.scale)

        if( this.x==this.foodX && this.y==this.foodY ){
            this.length=(this.length+1)
            this.foodeat()
        }

        if(this.x>290 || this.y>140 || this.x<0 || this.y<0 || this.x==this.tail.x){

            clearInterval(this.gameInterval)
            this.clear()
            this.restart()
        }

    }
        /*吃了食物發生的事情*/
    foodeat(){
        this.foodX=Math.floor(Math.random()*290/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*140/this.scale)*this.scale
        this.addFood()
    }
        /*重新產生食物*/
    addFood(){
        ctx.fillStyle="#FF7744"
        ctx.fillRect(this.foodX,this.foodY,10,10)
    }

    restart(){
        new game()
    }

    keyPress(){
        document.addEventListener("keydown",(event)=>this.onkeydown(event))
    }
    onkeydown({keyCode}){
        switch(keyCode){
    
            case 37:  /*向左走*/
            case 65:
            case 100:
                if(this.moveX == 0){
                    this.moveX=-1;
                    this.moveY= 0;
                }
            break;
    
            case 38: /*向上*/
            case 87:
            case 104:
                if(this.moveY ==0){
                    this.moveX=0;
                    this.moveY=-1;
                }
                break;
    
            case 39: /*向右*/
            case 68:
            case 102:
                if(this.moveX ==0){
                    this.moveX=1;
                    this.moveY=0;
                }
            break;
    
            case 40: /*向下*/
            case 83:
            case 101:
                if(this.moveY ==0){
                    this.moveX=0;
                    this.moveY=1;
                }
            break;
            }
        }
}
