function solution(str) {
  let answer = "";
  let map = new Map();
  let max = 0;
  for (let w of str) {
    if (map.has(w)) map.set(w, map.get(w) + 1);
    else map.set(w, 1);
  }
  map.forEach((value, key) => {
    if (max < value) {
      max = value;
      answer = key;
    }
  });

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
