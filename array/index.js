// array has 2 types
//static
//dynamic
//static array are fixed in size

const strings = ["a", "b", "c", "d"];
// 4 items takes 4 shells for storing data
// 4*4 = 16 bytes

//lookup O(1)
//push O(1)
//insert O(n)
//delete O(n)

//console.log(strings[2]); //O(1)

//PUSH
strings.push("e"); //O(1) but can be O(n)
console.log(strings);

//POP
strings.pop(); //O(n)
console.log(strings);

// strings.pop();
// console.log(strings);

//unshift  (it add items at the begining of the array)
strings.unshift("z"); //O(n)
console.log(strings);

//shift  (it remove first item from an array)
strings.shift();
console.log(strings);

//splice
// its used to add item in middle of the array
strings.splice(2, 0, "alien"); //O(n)
//splice(index, deleteIndex,value to be placed at the position)
console.log(strings);
