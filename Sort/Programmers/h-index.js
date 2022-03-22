function solution(citations) {
  var answer = 0;

  let newCitatiaons = citations.slice();
  newCitatiaons.sort((a, b) => b - a);

  if (citations.length != 1) solve(newCitatiaons, Math.floor(citations.length / 2));
  else answer++;

  function solve(citations, nowLength) {
    if (
      nowLength <= citations.length &&
      nowLength != 0 &&
      citations[nowLength - 1] >= nowLength
    ) {
      answer = nowLength;
      solve(citations, nowLength + 1);
    } else if (nowLength - 1 == answer) {
      return;
    } else {
      solve(citations, nowLength - 1);
    }
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
