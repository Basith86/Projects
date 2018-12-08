var arr = [];
var ele,det,btn;
$("#X").click(function(){
  ele ='X';
  btn = $(this).parent().detach();
})

$("#O").click(function(){
  ele ='O';
  btn = $(this).parent().detach();
})

$("td").click(function(){
  $(this).text(ele);
  id = $(this)[0].id;
  arr[id] = ele; 
  var ans = checkRow(arr);
  if(ans){
     arr = [];
    det = $("table").detach();
    $(this).parent().parent().find("td").text(" ");
    $("p").text("Winner : " + ele)
    
  }
  var ans = checkColumn(arr);
  if(ans){
     arr = [];
    $(this).parent().parent().find("td").text(" ");
    $("p").text("Winner : " + ele)  
    det = $("table").detach();
  }
  var ans = checkDiagonal(arr); 
  if(ans){
     arr = [];
    $(this).parent().parent().find("td").text(" ");
    det = $("table").detach();
    $("p").text("Winner : " + ele) 
  }
  switchPlayer();
  return arr;
})

$("#restart").click(function(){
  $("#attach").append(btn);
  $("#attach").append(det);
  $(document).find("p").text(" ");
   
  })


function switchPlayer(){
  if(ele === 'X') {
    ele = 'O'
  }
  else {
    ele = 'X'
  }
}

function checkRow(arr){
  var i=0;
  while(i < 9){
        if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2] && arr[i] != null ){
        return true;
        }
      i=i+3;
    }
  return false;
  }

function checkColumn(arr){
  var i=0;
  while(i < 3){
    if(arr[i] === arr[i+3] && arr[i+3] === arr[i+6] && arr[i] != null ){
        return true;
        } 
    i++;
  }
  return false;
}

function checkDiagonal(arr){
    if(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] != null ){
        return true;
        } 
    else
      if(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] != null ){
        return true;
        }  
  else return false;
}



