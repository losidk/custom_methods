// Array reverse 自定义实现
/**
 * reverse 会将原数组按顺序反转后放入一个新的数组中
 */

function customReverse () {
  const l = this.length
  const res = []
  for (let i = 0; i < l; i++) {
    res[i] = this[l - i - 1]
  }
  return res
}

Array.prototype.reverse = customReverse

const testArr = [1, 2, 3, -1]

const transferArr = testArr.reverse()

console.log(transferArr)
