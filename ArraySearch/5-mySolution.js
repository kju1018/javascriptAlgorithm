function solution(arr){         
  let answer = [], rank = 1;
  for(let i = 0 ; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        rank ++;
      }
    }
    answer.push(rank);
    rank = 1;
  }
  return answer
}
let arr=[87, 92, 92, 92, 76];
console.log(solution(arr));