// Junk data stream
var junkdata_server = require('/junkdata-server')(33, {keyname: Number})
 
 through(function write(data) {
	this.queue(data) 
	for (key in junkdata_server) {
		junkdata_server.key = data
	}

	}, 
	function end() {
		this.queue(null) // do we want this to end? This is optional.
	}

junkdata_server.listen(8000)