const nums = [1,2,3,4,5];
function sumFor(num) {
  let res=0;
  for(let i = 0; i<num.length;i++){
    res += num[i];
  }
  return res;
}
console.log('for'+sumFor(nums));

function sumWhile(num) {
  let res=0;
  let i = 0;
  while(i<num.length){
    res+=num[i];
    i++;
  }
  return res;
}
console.log('while'+sumWhile(nums));

function sumRecursion(num, i) {
  if(i===num.length){
    return  0;
  }
  return num[i] + sumRecursion(num,i+1);
}
console.log('recursion'+sumRecursion(nums,0));

function sumTheSimpleWay(num) {
  return _.reduce(num, function(memo,nu){return memo + nu},0);
}
console.log('underscore'+sumTheSimpleWay(nums));