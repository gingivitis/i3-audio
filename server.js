'use strict'

import net from 'net'
import config from './config'
import ActionTypes from './constants'
import Dispatcher from './dispatcher'

net.createServer(socket => {
    console.log('Client connected')

    /**
     *
     * Client disconnected
     *
     */
    socket.on('end', () => console.log('Client disconnected'))

    socket.setEncoding('utf8')

    socket.on('data', action => {
        console.log(`Client requested: ${action}`)

        Dispatcher.dispatch({
            type: action
        })
    })

}).listen(config.port, () => console.log(`Server bound on port ${config.port}`))
