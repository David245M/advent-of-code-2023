// script that creates a day folder, index.js and input.txt file
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import process from 'node:process'

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 --day [day number]')
  .demandOption(['day']).argv

const day = parseInt(argv.day, 10)
const basename = path
  .dirname(fileURLToPath(import.meta.url))
  .split('/')
  .slice(0, -1)
  .join('/')

if (!day) {
  console.error('Please provide a day number')
  process.exit(1)
}

const src = path.join(basename, 'days', day.toString())

if (fs.existsSync(src)) {
  console.error(`Day ${day} already exists`)
  process.exit(1)
}

fs.mkdirSync(src)
fs.writeFileSync(path.join(src, 'index.js'), '')
fs.writeFileSync(path.join(src, 'input.txt'), '')
