/**
 * This function takes a non-negative integer as an argument and return it with its digits in descending order
 * @param {*} n The number to be sorted
 * @returns The number n sorted in descending order
 */
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
  }