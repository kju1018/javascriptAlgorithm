function solution(arr){
  let answer = [];
  // arr.forEach(item => {
  //   if(!answer.includes(item))
  //     answer.push(item);
  // })
  answer = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));