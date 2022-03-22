function solution(n, k, arr){         
  let answer = 0;
  let set = new Set();

  for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++){
      for(let t = j+1; t < n; t++) {
        set.add(arr[i] + arr[j] + arr[t]);
      }
    }
  }
  let setArr = [...set];
  setArr.sort((a, b) => {
    return b - a;
  })
  answer = setArr[k-1];
  
  return answer
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));