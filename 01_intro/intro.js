// function expect(value) {
//     return {
//         toBe: exp => {
//             if (value === exp) {
//                 console.log('Success')
//             } else {
//                 console.error(`Value is ${value}, but expectation is ${exp}`)
//             }
//         }
//     }
// }

const sum = (a, b) => a + b

const nativeNull = () => null

// console.log(sum(23, 2))

// expect(sum(41, 1)).toBe(43)

module.exports = {sum, nativeNull}