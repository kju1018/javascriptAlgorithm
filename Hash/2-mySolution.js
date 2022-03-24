function solution(a, b) {
  let answer = "YES";
  let map = new Map();
  for(let word of a) {
    if(map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }
  for(let word of b) {
    if(!map.has(word) || map.get(word) === 0 ) answer = 'NO';
    map.set(word, map.get(word) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
