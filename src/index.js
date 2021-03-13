module.exports = function check(str, bracketsConfig) {
  let buffer = [];
  
  for (let i = 0; 1 < str.length; i++) {
    if (searchInBracketsConfig(str[i], bracketsConfig, buffer) == false){
      return false;
    }

  }
   if (buffer.length != 0 ){
     return false;
   }
    
   return true;
  // your solution
}

function searchInBracketsConfig(symbol, bracketsConfig, buffer){
  for(let i = 0; i < bracketsConfig.length; i++){

    if (bracketsConfig[i][1] == symbol && buffer[buffer.length - 1] == bracketsConfig[i][0]) {
      buffer.pop();
      break;

    }

    if (breaketsConfig[i][0] == symbol) {
      buffer.push(symbol);
      break;
    }

    if (breaketsConfig[i][1] == symbol && buffer [buffer.length - 1] != bracketsConfig[i][0]){
      return false;
    }
  }
  
}
