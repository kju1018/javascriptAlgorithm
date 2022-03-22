function solution(a, b){
  let answer = [];
  let n = a.length;
  let m = b.length;
  a.sort((a,b) => a - b);
  b.sort((a,b) => a-  b);

  let p1 = p2 = 0;
  while(p1<n && p2<m) {
    if(a[p1] > b[p2]) p2++;
    else if(a[p1] < b[p2]) p1++;
    else {
      answer.push(a[p1++]);
      p2++;
    }
  }

  return answer
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));