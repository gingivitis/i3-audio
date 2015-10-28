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
import program from 'commander'
import config from './config'
import ActionTypes from './constants'

var socket

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
    send(ActionTypes.TOGGLE)
} else if (program.stop) {
    send(ActionTypes.STOP)
} else if (program.next) {
    send(ActionTypes.NEXT)
} else if (program.previous) {
    send(ActionTypes.PREVIOUS)
} else if (program.love) {
    send(ActionTypes.LOVE)
} else if (program.hate) {
    send(ActionTypes.HATE)
} else {
    program.outputHelp()
    process.exit(1)
}

function send(action) {
    let client = net.connect(config.port, () => {
        client.write(action, () => client.end())
    })
    client.on('error', (err) => console.error(err))
}
