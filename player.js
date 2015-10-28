#!/usr/bin/env babel-node

/**
 * player.js
 * v 0.0.1
 *
 * Key sequences must be bound to this executable in
 * desktop manager.
 *
 * USAGE
 *
 * player <option: toggle, stop, next, previous, love, hate>
 *
 */

'use strict'

import net from 'net'
import config from './config'
import constants from './constants'
import program from 'commander'

program
    .version('0.0.1')
    .option('-t, --toggle', 'Toggle playback')
    .option('-s, --stop', 'Stop playback')
    .option('-n, --next', 'Next song')
    .option('-p, --previous', 'Previous song')
    .option('-l, --love', 'Love song')
    .option('-h, --hate', 'Hate song')
    .parse(process.argv)

if (program.toggle) {

} else if (program.stop) {

} else if (program.next) {

} else if (program.previous) {

} else if (program.love) {

} else if (program.hate) {

} else {
    program.outputHelp()
    process.exit(1)
}

let client = net.connect(config.port, () => {
    console.log(`Connected to server on port ${config.port}`)
})

client.setEncoding('utf8')

client.on('data', data => {
    console.log('server says:', data)
    client.end()
})
