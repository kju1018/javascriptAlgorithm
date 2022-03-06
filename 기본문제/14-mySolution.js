function solution(arr){
  let answer = '', length = 0
  arr.forEach(item => {
    if(length < item.length){
      length = item.length;
      answer = item
    }
  })
  return answer;
}


let str=["teacher", "time", "student333", "beautiful", "good"];
console.log(solution(str));