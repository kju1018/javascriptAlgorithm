function solution(arr){
  let answer=arr;
  let sum = answer.reduce((prev, cur) =>{
    return prev + cur
  }, 0)
  for(let i = 0; i < answer.length;  i++){
    let temp = sum
    for(let j = i + 1 ; j < answer.length; j++){
      if(temp - (answer[j] + answer[i]) === 100){
        answer.splice(j, 1);
        answer.splice(i, 1)
        break;
      }
    }
  }

  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));