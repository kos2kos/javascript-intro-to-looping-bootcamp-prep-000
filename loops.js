function forLoop(arg){
  for (var i = 0; i < 26; i++){
    if (i === 1){
    arg.push(`I am 1 strange loop.`);
    }
    else{
    arg.push(`I am ${i} strange loops.`);
  }return arg
}}
function whileLoop(num){
  while(num > 0){
    console.log(num)
    num--
  } return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 
}

function doWhileLoop(array){
 console.log("idk wtf should go here")
  while(maybeTrue() && array.length > 0);{
     array.length = array.length - 1
  }
}


