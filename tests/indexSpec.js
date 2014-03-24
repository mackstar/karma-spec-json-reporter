describe("Reporter", function() {

	beforeEach(function(){
		output = {};
	});

	it("should create a key for the suite", function() {
		var input = testObject();
		parseResult(input);
		var expectedOutput = {
			"a suite" : {
				"a description" : "PASSED"
			}
		}
		expect(output).toEqual(expectedOutput);
	});

	it("should return the value FAILED for failing test", function() {
		var input = testObject();
		input.success = false;
		parseResult(input);
		var expectedOutput = {
			"a suite" : {
				"a description" : "FAILED"
			}
		}
		expect(output).toEqual(expectedOutput);
	});

	it("should flatten nested tests that have multiple suites", function() {
		var input = testObject();
		input.suite.push("a second suite");
		parseResult(input);
		var expectedOutput = {
			"a suite a second suite" : {
				"a description" : "PASSED"
			}
		}
		expect(output).toEqual(expectedOutput);
	});

	function testObject() {
		return {
			description: "a description",
			suite: ["a suite"],
			success: true
		};
	}
});