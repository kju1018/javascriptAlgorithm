export default class PriorityQueue {
  constructor() {
    this.queue = [];
    this.lastIndex = 0;
  }

  enQueue(data) {
    this.queue.push(data);
    
    let parentIndex = this.lastIndex;

    while (true) {
      const childIndex = parentIndex;
      parentIndex = Math.ceil(parentIndex/2) - 1;

      if(parentIndex < 0) break;

      if(this.queue[parentIndex] < data) {
        this.queue[childIndex] = this.queue[parentIndex];
        this.queue[parentIndex] = data;
      }
    }
    this.lastIndex++;
  }

  print() {
    console.log(this.queue);
  }
}
