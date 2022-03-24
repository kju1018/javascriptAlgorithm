function solution(a, b) {
  let answer = 0;
  let n = b.length;
  let bMap = new Map();
  let aMap = new Map();
  let lt = 0;

  for(let x of b) {
    if(bMap.has(x)) bMap.set(x, bMap.get(x) + 1);
    else bMap.set(x, 1);
  }

  for(let i = 0; i < n - 1; i++) {
    if(aMap.has(a[i])) aMap.set(a[i], aMap.get(a[i]) + 1);
    else aMap.set(a[i], 1);
  }

  for(let i = n - 1; i < a.length; i++) {
    if(aMap.has(a[i])) aMap.set(a[i], aMap.get(a[i]) + 1);
    else aMap.set(a[i], 1);

    if(aMap.size === bMap.size) {
      let flag = 0;
      for(let [key, value] of aMap){
        if(!bMap.has(key) || (bMap.get(key) !== value))  flag = 1 
      }
      if(!flag) {
        answer++;
      }
    }
    aMap.set(a[lt], aMap.get(a[lt]) - 1)
    if(aMap.get(a[lt]) === 0) aMap.delete(a[lt])
    lt++;
  }

  return answer;
}


let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
