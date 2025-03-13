function findNumber(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        return "Dữ liệu không hợp lệ"; 
    }

    const n = arr.length + 1; 
    const expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); 

    return expectedSum - actualSum; 
}

console.log(findNumber([1, 2, 3, 5])); 
console.log(findNumber([10, 11, 13, 14])); 
console.log(findNumber("abc")); 
