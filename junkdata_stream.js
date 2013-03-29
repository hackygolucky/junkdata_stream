// Junk data stream
var through = ('through')



function template_mapping(template) {
	var result = {}
	for (key in result) {
		if (template[key] === String) {
			result[key] = Math.random().toString()
		} else if (template[key] === Boolean) {
			result[key] = Math.random() > 0.5
		} else if (template[key] == Number) {
			result[key] = Math.random()
		}
	}
	return result
}

function myStream(ttl, mappings) {
	// returns a stream
	return through(function write(data) {
		this.queue(data)
	}, 

	function end() {
		this.queue(null) // do we want this to end? This is optional.
	}
	}

myStream.on('data', console.log)




