function solution(numbers) {
  const n = numbers.length;
  let temp = 0;
  for(let i = 0; i < n - 1; i++) {
    let idx = i;
    for(let j = i + 1; j < n; j++) {
      if(numbers[idx] > numbers[j])
        idx = j;
    }
    temp = numbers[i];
    numbers[i] = numbers[idx];
    numbers[idx] = temp;
  }
  
  
  return numbers;
}

console.log(solution([13, 5, 11, 7, 23, 15]))

//3 5 2 34 30 9