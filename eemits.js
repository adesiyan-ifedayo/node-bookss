const EventEmitter = require('events')

const emitter = new EventEmitter()

class Hit extends EventEmitter{
	log(message){
		console.log('I was touched', message)
		emitter.emit('done')
	}
}


module.exports = Hit