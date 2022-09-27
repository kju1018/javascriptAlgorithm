function solution(numbers) {
  const n = numbers.length;
  let temp = 0;
  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - i - 1; j++) {
      if(numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  
  
  return numbers;
}

console.log(solution([13, 5, 11, 7, 23, 15]))

//3 5 2 34 30 9