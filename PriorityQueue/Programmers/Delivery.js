import PriorityQueue from '../PriorityQueue.js'

function solution(N, road, K) {
  
  let queue = new PriorityQueue();
  queue.enQueue(3);
  queue.enQueue(1);
  queue.enQueue(5);
  queue.enQueue(6);
  
  queue.print();

  // return answer;
}


console.log(solution())