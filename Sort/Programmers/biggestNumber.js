function solution(numbers) {
  let answer;
  let tempArr = numbers.slice();
  tempArr.sort((a,b) => {
    console.log(a, b)
    return a-b
  })
  // tempArr.sort((a, b) => {
  //   console.log((b.toString() + a.toString()), (a.toString() + b.toString()) )
  //   return (b.toString() + a.toString()) - (a.toString() + b.toString())
  // });
  // console.log(tempArr)
  // let answer = tempArr.reduce((a, b) => {
  //   return a.toString() + b.toString()
  // });
  // if(answer[0] === '0') {
  //   answer = Number(answer);
  //   answer = answer.toString()
  // }
  
  return answer;
}

console.log(solution([3, 30, 34, 5, 9, 2]))

//3 5 2 34 30 9