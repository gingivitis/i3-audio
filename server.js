'use strict'

import net from 'net'
import config from './config'

net.createServer(socket => {
    console.log('Client connected')

    socket.on('end', () => console.log('Client disconnected'))

    socket.write('Hello\r\n')

}).listen(config.port, () => console.log(`Server bound on port ${config.port}`))
