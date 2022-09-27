function solution(numbers) {
  const n = numbers.length;
  for(let i = 1; i < n; i++) {
    let temp = numbers[i];
    let j = 0;

    for(j = i -1; j >= 0; j--) {
      if(numbers[j] > temp)
        numbers[j+1] = numbers[j]
      else
        break;
    }
    numbers[j+1] = temp;

  }
  
  
  return numbers;
}

console.log(solution([11, 7, 5, 6, 10, 9]))

//3 5 2 34 30 9