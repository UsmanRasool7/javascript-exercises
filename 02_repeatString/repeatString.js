const repeatString = function(string,num) {
  let str = [];
  for(let i=0;i<num;i++)
  {
    str.push(string);
  }
  return str.join('');
};

// Do not edit below this line
module.exports = repeatString;
