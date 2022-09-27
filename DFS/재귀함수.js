function solution(n) {
  let answer = 0;

  function DFS(L) {
    if(L == 0)
      return
    
    DFS(L-1);
    console.log(L);    
  }
  
  DFS(n)

  
  return answer;
}

solution(3)

//3 5 2 34 30 9