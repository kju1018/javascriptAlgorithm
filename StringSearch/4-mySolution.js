function solution(s, t) {
  // let answer=[];

  // let strArr = str.split('');
  // tPositon = [];
  // strArr.forEach((item, index) => {
  //   if(item === t) tPositon.push(index);
  // })

  // strArr.forEach((item, index) => {
  //   let min = Number.MAX_SAFE_INTEGER;
  //   for(let i = 0; i < tPositon.length; i++) {
  //     if(min > Math.abs(tPositon[i] - index)) {
  //       min = Math.abs(tPositon[i] - index);
  //     }
  //   }
  //   answer.push(min);
  // })
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  console.log(answer)
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}
let str = "teachermode";
console.log(solution(str, "e"));
