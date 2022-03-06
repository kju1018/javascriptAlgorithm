function solution(str) {
  let answer = 'YES';
  const word = str.toLowerCase();
  const n = str.length;
  for(let i = 0 ; i < Math.floor(n/2); i++) {
    if(word.charAt(i) !== word.charAt(n - 1 - i)){
      //if(word[i] !== word[n - 1 - i]){
      answer = 'NO'
    }
  }

  return answer;
}

let str = "g2dddd2ddg";
console.log(solution(str));

// function solution(s){
//   let answer="YES";
//   s=s.toLowerCase();
//   if(s.split('').reverse().join('')!=s) return "NO";    
//   return answer;
// }
