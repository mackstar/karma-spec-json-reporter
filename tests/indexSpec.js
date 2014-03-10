describe("Reporter", function() {

	it("should add output to the output object", function() {
		parseResult({output: true});
		expect(output).toEqual({output: true});
	});

	it("should create a key for the suite", function() {
		var input = 
		{
			description: "a description",
			suite: ["a suite"],
			success: true
		}
		parseResult(input);
		var expectedOutput = {
			"a suite" : {
				"a description" : "PASSED"
			}
		}
		expect(output).toEqual(expectedOutput);
	});
});