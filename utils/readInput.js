import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getInput = (dayNumber) => {
  const input = fs
    .readFileSync(
      path.resolve(__dirname, '..', 'days', dayNumber.toString(), 'input.txt')
    )
    .toString()
  return input
}
