function solution(a, b) {
  let answer = [];

  let aIndex = 0, bIndex = 0;
  while(aIndex != a.length || bIndex != b.length) {
    if(aIndex === a.length){
      answer.push(b[bIndex++]);
    } else if(bIndex === b.length){
      answer.push(a[aIndex++]);
    } else {
      if(a[aIndex] < b[bIndex]) {
        answer.push(a[aIndex++]);
      } else {
        answer.push(b[bIndex++]);
      }
    }
  }

  return answer;
}

let a=[1, 3, 4, 5];
let b=[1, 2];
console.log(solution(a, b));
