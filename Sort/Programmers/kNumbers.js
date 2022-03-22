function solution(array, commands) {
  // var answer = [];
  // let sliceArray = [];
  // let tempArray = array.slice();
  // for(let i = 0; i < commands.length; i++) {
  //   sliceArray = tempArray.slice(commands[i][0]-1, commands[i][1]);
  //   sliceArray.sort((a,b) => a-b);
  //   answer.push(sliceArray[commands[i][2]-1]);
  // }
  // console.log(answer)
  let answer = commands.map(command => {
    const [sPosition, ePosition, position] = command
    const newArray = array
        .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
        .sort((a,b) => a - b)    

    return newArray[position - 1]
  })
  console.log(answer)
  return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [1, 1, 1], [1, 7, 3]])