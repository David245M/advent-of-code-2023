import _ from 'lodash'
import { getInput } from '../../utils/readInput.js'

const input = getInput(1)
const strings = input.split('\n')

Array.prototype.sum = function () {
  return this.reduce((acc, a) => acc + a, 0)
}

const getCalibrationValues = (strings) => {
  return strings.map((str) => {
    const digits = [...str.matchAll(/\d/g)].map((m) => m[0])
    const tuple = [_.first(digits), _.last(digits)]
    return parseInt(tuple.join(''))
  })
}

const part1 = () => {
  const numbers = getCalibrationValues(strings)
  return numbers.sum()
}

const parseNum = (n) => {
  if (!isNaN(parseInt(n))) return parseInt(n, 10)
  const map = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  return map[n]
}

const part2Regex = /\d|one|two|three|four|five|six|seven|eight|nine/

const getRealCalibrationValues = (strings) => {
  return strings.map((str) => {
    const first = str.match(part2Regex)

    let match = first
    let substr = str
    let second = null

    while (match !== null) {
      substr = substr.slice(match.index + 1)
      second = match
      match = substr.match(part2Regex)
    }
    return parseInt([first[0], second[0]].map(parseNum).join(''))
  })
}

const part2 = () => {
  const numbers = getRealCalibrationValues(strings)
  return numbers.sum()
}

console.log(part1())
console.log(part2())
