var _Test = function(opts) {
	var Test = this;
	var Private = {
		opts : opts
	}

	Test.sameValue = function(value) {
		return value;
	}

	Test.unsameValue = function(value) {
		return value+1;
	}

	Test.callback = function(cb) {
		return cb(true,{});
	}

	Test.setTimeout = function(sleep, value, cb) {
		setTimeout(function() {
			cb(null,value);
		}, sleep*1000);
	}

	Private.Init = function() {
	}

	Private.Init();
}

module.exports = _Test;
