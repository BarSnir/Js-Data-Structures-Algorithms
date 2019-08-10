const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage.

// push to the last element
strings.push('e');
// O(1);

// pop the last element
strings.pop(); 
// O(1);

// unshift first element;
strings.unshift('x');
// O(n);

// unshift element index;
strings.splice(2, 0, 'alien');
// O(n);
 
console.log(strings);