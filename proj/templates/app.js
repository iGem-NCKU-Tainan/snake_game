var players = [];
              // [{"name":"test", "team":"ncku", "score":0, "rank":1},
              //   {"name":"test", "team":"ncku", "score":0, "rank":1},
              //   ....]
var curr_player = {}
                // {"name":"test", "team":"ncku", "score":0};
var change = false;
$( document ).ready(function() {
  /*Compare*/
  $("#snakeButton").click(function() {
    curr_player.name=$("input[name='name']").val();
    curr_player.team=$("input[name='team']").val();
    if(players.length<10|| curr_player.score> players[9].score){
	change = true;
    }
    players.push({"name":curr_player.name, "team":curr_player.team, "score":curr_player.score, "rank":players.length+1});
    players.sort(function (a, b) {
  	return b.score - a.score;
    });
    if(players.length>10){
	players.pop();
    }
    for(let i=0;i<players.length;i++){
	players[i].rank=i+1;
    }
    if(change){
      updateData(players);
    }
  });
  /* Ajax */ 
  /* get player data */
  $.ajax({
    type: "GET",
    url: "./get_data/",
    dataType: 'json'
  })
    .done(function(data) {
      data.forEach(function(element) {
        players.push(element.fields)
      });
    })
    .fail(function() {
          alert( "error" );
    });
  // Update data
  function updateData(players){
    change = false;
    $("tbody").html("");
    players.forEach(function(element) {
	$("tbody").append('<tr><th scope="row">'+element.rank+'</th><td>'+element.name+'</td><td>'+element.team+'</td><td>'+element.score+'</td></tr>');
    });
    $.ajax({
      type: "POST",
      url: "./update/",
      data: JSON.stringify(players)
    })
      .done(function(data) {
        console.log(data);
      });
  }

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

/*  按鍵的設定  */
const key_left=37
const key_up=38
const key_right=39
const key_down=40

var width=1200
var height=600

var canvas=document.getElementById('snake')
var ctx=canvas.getContext('2d')

function gameStart(){
    document.getElementById('snakeStory').style.display="none"
    document.getElementById('snakeButton2').style.display="none"
    $("html").addClass("noscroll")
    new beforeGame
}

function gameRecord(){
    document.getElementById('snakeForm').style.display="none"
    $("html").addClass("noscroll")
    new beforeGame
}

class beforeGame{
    constructor(){
        this.starting()
        this.counting()
    }
    
    starting(){
        this.adding({x:120,y:60,})
        this.adding({x:120,y:100,})
        this.adding({x:120,y:140,})
        this.adding({x:120,y:180,})
        this.adding({x:120,y:220,})
        this.adding({x:120,y:260,})
        this.adding({x:120,y:300,})
        this.adding({x:120,y:340,})
        this.adding({x:120,y:380,})
        this.adding({x:120,y:420,})
        this.adding({x:120,y:460,})
        this.adding({x:120,y:500,})
        this.adding({x:160,y:500,})
        this.adding({x:200,y:500,})
        this.adding({x:240,y:500,})
        this.adding({x:280,y:500,})
        this.adding({x:320,y:500,})
        this.adding({x:320,y:60,})
        this.adding({x:320,y:100,})
        this.adding({x:320,y:140,})
        this.adding({x:320,y:180,})
        this.adding({x:320,y:220,})
        this.adding({x:320,y:260,})
        this.adding({x:320,y:300,})
        this.adding({x:320,y:340,})
        this.adding({x:320,y:380,})
        this.adding({x:320,y:420,})
        this.adding({x:320,y:460,})
        this.adding({x:320,y:500,})
        this.adding({x:160,y:60,})
        this.adding({x:200,y:60,})
        this.adding({x:240,y:60,})
        this.adding({x:280,y:60,})
        
        this.adding({x:440,y:60,})
        this.adding({x:440,y:100,})
        this.adding({x:440,y:140,})
        this.adding({x:440,y:180,})
        this.adding({x:440,y:220,})
        this.adding({x:440,y:260,})
        this.adding({x:440,y:300,})
        this.adding({x:440,y:340,})
        this.adding({x:440,y:380,})
        this.adding({x:440,y:420,})
        this.adding({x:440,y:460,})
        this.adding({x:440,y:500,})
        this.adding({x:480,y:60,})
        this.adding({x:520,y:60,})
        this.adding({x:560,y:60,})
        this.adding({x:560,y:100,})
        this.adding({x:560,y:140,})
        this.adding({x:560,y:180,})
        this.adding({x:560,y:220,})
        this.adding({x:560,y:260,})
        this.adding({x:560,y:300,})
        this.adding({x:560,y:340,})
        this.adding({x:600,y:60,})
        this.adding({x:640,y:60,})
        this.adding({x:680,y:60,})
        this.adding({x:680,y:100,})
        this.adding({x:680,y:140,})
        this.adding({x:680,y:180,})
        this.adding({x:680,y:220,})
        this.adding({x:680,y:260,})
        this.adding({x:680,y:300,})
        this.adding({x:680,y:340,})
        this.adding({x:680,y:380,})
        this.adding({x:680,y:420,})
        this.adding({x:680,y:460,})
        this.adding({x:680,y:500,})
        
        this.adding({x:800,y:60,})
        this.adding({x:840,y:60,})
        this.adding({x:880,y:60,})
        this.adding({x:920,y:60,})
        this.adding({x:960,y:60,})
        this.adding({x:1000,y:60,})
        this.adding({x:800,y:100,})
        this.adding({x:800,y:140,})
        this.adding({x:800,y:180,})
        this.adding({x:800,y:220,})
        this.adding({x:800,y:260,})
        this.adding({x:800,y:300,})
        this.adding({x:800,y:340,})
        this.adding({x:800,y:380,})
        this.adding({x:800,y:420,})
        this.adding({x:800,y:460,})
        this.adding({x:800,y:500,})
        this.adding({x:840,y:500,})
        this.adding({x:880,y:500,})
        this.adding({x:920,y:500,})
        this.adding({x:960,y:500,})
        this.adding({x:1000,y:500,})
        this.adding({x:1000,y:460,})
        this.adding({x:1000,y:420,})
        this.adding({x:1000,y:380,})
        this.adding({x:1000,y:340,})
        this.adding({x:1000,y:300,})
        this.adding({x:920,y:620,})
        this.adding({x:960,y:300,})
    }
    
    adding({x,y,width=40,height=40,color='#AAAAAA'}){
        ctx.fillStyle = color
        ctx.fillRect(x, y, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle='#FFFFFF'
        ctx.strokeRect(x, y, width, height)
    }
    
    counting(){
        let countingNum=3
        
        this.countingInterval=setInterval(()=>{
            countingNum=countingNum-1
            
            if(countingNum===2){
                this.addingRed({x:120,y:60,})
                this.addingRed({x:120,y:100,})
                this.addingRed({x:120,y:140,})
                this.addingRed({x:120,y:180,})
                this.addingRed({x:120,y:220,})
                this.addingRed({x:120,y:260,})
                this.addingRed({x:120,y:300,})
                this.addingRed({x:120,y:340,})
                this.addingRed({x:120,y:380,})
                this.addingRed({x:120,y:420,})
                this.addingRed({x:120,y:460,})
                this.addingRed({x:120,y:500,})
                this.addingRed({x:160,y:500,})
                this.addingRed({x:200,y:500,})
                this.addingRed({x:240,y:500,})
                this.addingRed({x:280,y:500,})
                this.addingRed({x:320,y:500,})
                this.addingRed({x:320,y:60,})
                this.addingRed({x:320,y:100,})
                this.addingRed({x:320,y:140,})
                this.addingRed({x:320,y:180,})
                this.addingRed({x:320,y:220,})
                this.addingRed({x:320,y:260,})
                this.addingRed({x:320,y:300,})
                this.addingRed({x:320,y:340,})
                this.addingRed({x:320,y:380,})
                this.addingRed({x:320,y:420,})
                this.addingRed({x:320,y:460,})
                this.addingRed({x:320,y:500,})
                this.addingRed({x:160,y:60,})
                this.addingRed({x:200,y:60,})
                this.addingRed({x:240,y:60,})
                this.addingRed({x:280,y:60,})
                
            }
            if(countingNum===1){
                this.addingRed({x:440,y:60,})
                this.addingRed({x:440,y:100,})
                this.addingRed({x:440,y:140,})
                this.addingRed({x:440,y:180,})
                this.addingRed({x:440,y:220,})
                this.addingRed({x:440,y:260,})
                this.addingRed({x:440,y:300,})
                this.addingRed({x:440,y:340,})
                this.addingRed({x:440,y:380,})
                this.addingRed({x:440,y:420,})
                this.addingRed({x:440,y:460,})
                this.addingRed({x:440,y:500,})
                this.addingRed({x:480,y:60,})
                this.addingRed({x:520,y:60,})
                this.addingRed({x:560,y:60,})
                this.addingRed({x:560,y:100,})
                this.addingRed({x:560,y:140,})
                this.addingRed({x:560,y:180,})
                this.addingRed({x:560,y:220,})
                this.addingRed({x:560,y:260,})
                this.addingRed({x:560,y:300,})
                this.addingRed({x:560,y:340,})
                this.addingRed({x:600,y:60,})
                this.addingRed({x:640,y:60,})
                this.addingRed({x:680,y:60,})
                this.addingRed({x:680,y:100,})
                this.addingRed({x:680,y:140,})
                this.addingRed({x:680,y:180,})
                this.addingRed({x:680,y:220,})
                this.addingRed({x:680,y:260,})
                this.addingRed({x:680,y:300,})
                this.addingRed({x:680,y:340,})
                this.addingRed({x:680,y:380,})
                this.addingRed({x:680,y:420,})
                this.addingRed({x:680,y:460,})
                this.addingRed({x:680,y:500,})
            }
            if(countingNum===0){
                this.addingRed({x:800,y:60,})
                this.addingRed({x:840,y:60,})
                this.addingRed({x:880,y:60,})
                this.addingRed({x:920,y:60,})
                this.addingRed({x:960,y:60,})
                this.addingRed({x:1000,y:60,})
                this.addingRed({x:800,y:100,})
                this.addingRed({x:800,y:140,})
                this.addingRed({x:800,y:180,})
                this.addingRed({x:800,y:220,})
                this.addingRed({x:800,y:260,})
                this.addingRed({x:800,y:300,})
                this.addingRed({x:800,y:340,})
                this.addingRed({x:800,y:380,})
                this.addingRed({x:800,y:420,})
                this.addingRed({x:800,y:460,})
                this.addingRed({x:800,y:500,})
                this.addingRed({x:840,y:500,})
                this.addingRed({x:880,y:500,})
                this.addingRed({x:920,y:500,})
                this.addingRed({x:960,y:500,})
                this.addingRed({x:1000,y:500,})
                this.addingRed({x:1000,y:460,})
                this.addingRed({x:1000,y:420,})
                this.addingRed({x:1000,y:380,})
                this.addingRed({x:1000,y:340,})
                this.addingRed({x:1000,y:300,})
                this.addingRed({x:920,y:620,})
                this.addingRed({x:960,y:300,})
            }
            if(countingNum===-1){
                new game

            }
        },1000)
    }
    
    addingRed({x,y,width=40,height=40,color='red'}){
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
        this.x=40
        this.y=40
        this.speed=100  
        this.scale=40
        this.tail=[]
        this.length=3
        this.moveX=1   /*向上為正*/
        this.moveY=0    /*向下為正*/
        
        /*食物部分*/
        this.foodX=Math.floor(Math.random()*width/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*height/this.scale)*this.scale
        
        /*函式部分*/
        this.setup()
        this.snakeBody() /*蛇運作的部分*/
        this.keyPress()  /*鍵盤感應*/
    }
    
    setup(){
        if(localStorage.highScore==undefined){
            localStorage.highScore=0
        }
        else{ 
            document.querySelector("#recordScore").innerHTML=localStorage.getItem("highScore")
        }
    }
    
    /*蛇身的部分，用array做推進，遊戲運作的核心*/
    snakeBody(){
        this.gameInterval=setInterval(()=>{
            this.accelerate()
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
            ctx.fillStyle='#620E15'
            ctx.fillRect(this.tail[i].x,this.tail[i].y,40,40)
            ctx.strokeStyle='#FFFFFF'
            ctx.strokeRect(this.tail[i].x,this.tail[i].y,40,40)
        }
    }
    /*清除畫面+搖晃*/
    clear(){
        ctx.clearRect(0,0,width,height)
    }
    /*主要遊戲運作偵測區，食物+死亡*/
    update(){
        this.x += (this.moveX*this.scale)
        this.y += (this.moveY*this.scale)
        
        this.scoreUpdate()
        this.checkDeath()
        
        if( this.x==this.foodX && this.y==this.foodY ){
            this.length=(this.length+1)
            this.foodeat()
        }
        
        if (this.checkDeath()){
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            this.clear()
            this.restart()
            this.checkRecord()
        }

        if(this.x>1160 || this.y>560 || this.x<0 || this.y<0 || this.x==this.tail.x){
            
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            this.clear()
            this.restart()
            this.checkRecord()
        }
    }
    /*加速器*/
    accelerate(){
        if(this.length>12){
            clearInterval(this.gameInterval)
            
            this.gameInterval2=setInterval(()=>{
                
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
            },this.speed-20)
            
        }
        
        if(this.length>22){
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            
            this.gameInterval3=setInterval(()=>{
                
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
            },this.speed-25)
        }
    }
    /*吃到自己死*/
    checkDeath(){
        return this.tail.filter((value)=>{
            return (this.x==value.x && this.y==value.y)
        }).length
        }
    
    /*吃了食物發生的事情*/
    foodeat(){
        this.foodX=Math.floor(Math.random()*width/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*height/this.scale)*this.scale
        this.addFood()
    }
    /*重新產生食物*/
    addFood(){
        ctx.fillStyle="#488099"
        ctx.fillRect(this.foodX,this.foodY,40,40)
    }
    /*retart + record to backend + shake the screen*/
    restart(){
        setTimeout(()=>{
            document.getElementById("snake").classList.add("canvasShake")
        },10)
        this.checkRecord()
        var length=this.length
        /*const form=document.forms['snakeForm']
        curr_player.name=form.elements.name.value
        curr_player.team=form.elements.team.value*/
        curr_player.score=(length-3)
        $("html").removeClass("noscroll")
        document.getElementById('snakeForm').style.display="block"
        document.getElementById("snake").classList.remove("canvasShake")
    }
    
    scoreUpdate(){
        $('#current').html(this.length-3)
    }
    
    checkRecord(){
        if ((this.length-3)>localStorage.highScore) {
            // Store
            localStorage.setItem("highScore", (this.length-3))
            // Retrieve
            document.getElementById('recordScore').innerHTML = localStorage.getItem("highScore")
        }
    }
    
    keyPress(){
        document.addEventListener("keydown",(event)=>this.onkeydown(event))
    }
    /*鍵盤控制*/
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
