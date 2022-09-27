function solution(clothes) {
  let answer = 1;
  let map = new Map();
  
  clothes.forEach(c => {
    const [item, type] = c
    // console.log(item, type);

    if(map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 2);
  })

  for([key, value] of map) {
    // console.log(key, value);
    answer *= value;
  }
  
  return answer - 1;
}

console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]))