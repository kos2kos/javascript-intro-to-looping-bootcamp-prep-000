function forLoop(arg){
  for (var i = 0; i < 25; i++){
    arg.push(`I am ${i} strange loop ${i === 0 ?'':'s'}.`);
  }return arg
}
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
     array = [1]
}

