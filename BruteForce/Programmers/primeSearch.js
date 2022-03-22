function solution(numbers) {
  const splitNumbers = numbers.split('');
  const n = splitNumbers.length;
  let answerNumbers = new Set();

  const visitNumbers = new Array(n).fill(false, 0, n);

  loop('', visitNumbers, splitNumbers, answerNumbers)
  return answerNumbers.size;
}

function loop(number, visitNumbers, splitNumbers, answerNumbers) {
  if(number === '152154') {
    console.log('')
  }
  const n = splitNumbers.length;
  for(let i = 0; i < n; i++) {
    if(!visitNumbers[i]) {
      let prime = number + splitNumbers[i]
      visitNumbers[i] = true;
      if(prime.length < n)
        loop(prime, visitNumbers, splitNumbers, answerNumbers);
      if(isPrime(Number(prime))){
        answerNumbers.add(Number(prime));
        visitNumbers[i] = false
      } else {
        visitNumbers[i] = false
      }
    }
  }
}

function isPrime(number) {
  let flag = true;
  if(number <= 1) flag = false;

  if(number % 2 === 0) flag = number === 2 ? true : false
  if(number === 25){
    console.log()
  }
  for(let i = 3; i <= Math.sqrt(number); i += 2) {
    if(number % i === 0) {
      flag = false
      break;
    }
  }

  return flag
}

console.log(solution("152154"))