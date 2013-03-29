var junkdata_stream = require('junkdata-stream')
	, through = require('through')
 
var server = junkdata(
  33  // milliseconds between junk!
, {   // shape of junk!
    keyname: Number
  , otherKey: String
  , someOtherKey: Boolean
  }
)
 
through(function write(data) {
	this.queue(data) 
}, 
	function end() {
		this.queue(null) // do we need this to end? This is optional.
	}

junkdata_stream.on('data', console.log)