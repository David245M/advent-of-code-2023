import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import nodemon from 'nodemon'
import process from 'node:process'

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 --day [day number]')
  .demandOption(['day']).argv

const day = parseInt(argv.day, 10)

nodemon({ script: `days/${day}/index.js` }).on('start', () => {
  console.clear()
})
