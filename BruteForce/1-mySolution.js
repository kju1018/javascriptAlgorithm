function solution(n, arr) {
  let answer = '', max = 0;
  
  arr.forEach(item => {
    let strItem = item.toString()
    let sum = 0;
    for(let word of strItem) {
      sum += Number(word)
    }
    if(max < sum) {
      max = sum
      answer = item
    } else if(max === sum) {
      if(item > answer) answer = item
    }
  })

  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
