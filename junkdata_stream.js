// Junk data stream
var through = ('through')

module.exports = stream_existing

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

function stream_existing(mappings, ttl) {
	// returns a stream
	var out = through()
		, idx = 0

	setInterval(write, 1000)
	if (timeoutId === ttl) {
		function end() {
			out.queue(null)
		}
	}
	return out

	function write() {
		if(idx === mappings.length) {
			out.queue(null)
			return
		}
		out.queue(mappings[idx++].count)
	}
}
 






