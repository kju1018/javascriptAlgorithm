function solution(str){         
  let answer = '', nowWord = str[0], count = 0;
  for(let word of str) {
    if(word === nowWord) {
      count++;
    }
    if(word !== nowWord) {
      answer += count !== 1 ? nowWord + count : nowWord;
      nowWord = word;
      count = 1;
    }
  }
  answer += count !== 1 ? nowWord + count : nowWord;
  return answer
}

let str="KKHSSSSSSEEEEESS";
console.log(solution(str));


function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}