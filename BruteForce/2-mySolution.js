function solution(arr){
  let answer=[], reverseArr = [];
  
  for(let num of arr) {
    const reverseNum = num.toString().split('').reverse().join('');
    reverseArr.push(Number(reverseNum));
  }
  for(let reverseNum of reverseArr) {
    let flag = true;
    if(reverseNum <= 1) flag = false;

    if(reverseNum % 2 === 0) flag = reverseNum === 2 ? true : false

    for(let i = 3; i <= parseInt(Math.sqrt(reverseNum)); i += 2) {
      if(reverseNum % i === 0) flag = false
    }

    if(flag) answer.push(reverseNum);
  }

  return answer
}
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));