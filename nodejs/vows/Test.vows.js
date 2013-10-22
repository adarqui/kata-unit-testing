var
	assert = require('assert'),
	vows = require('vows'),
	_Test = require('Test.js')
	;

	var Test = new _Test();

	console.log(Test)
vows.describe("Testing our mock Test.js module").addBatch({
	"some simple tests" : {
		topic : function() {
			return(Test.sameValue(5));
		},
		"sameValue should return the same value" : function(topic) {
			assert.equal(topic,5);
		},
		"unsameValue should return a different value" : function() {
			assert.notEqual(Test.unsameValue(5),5);
		},
	},
	"callback test 1" : {
		topic : function() {
			return Test.callback(this.callback);
		},
		"callback should fire" : function(err,data) {
			assert.equal(err,true);
			assert.isObject(data);
		},
	},
	"setTimeout callback test" : {
		topic : function() {
			var that = this;
			Test.setTimeout(3, 100, this.callback);
		},
		"timeout callback should take 3 seconds to run and give us 100" : function(err,value) {
			assert.equal(value,100);
		},

	},
	"Error exception handling" : {
		"should throw an error" : function() {
			assert.throws(function() { throw new Error("ERROR!"); });
		},
	},
}).run();
