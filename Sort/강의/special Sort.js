function solution(numbers) {
  const n = numbers.length;
  let temp = 0;

  for(let i = 0; i < n - 1; i ++) {
    for(let j = 0; j < n - 1 - i; j++) {
      if((numbers[j] > 0) && (numbers[j+1] < 0)) {
        temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] =temp;
      }
    }
  }
  
  
  return numbers;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]))

//3 5 2 34 30 9