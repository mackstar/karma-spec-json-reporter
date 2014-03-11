var output = {},
    fs = require('fs');

var SPECJSONReporter = function(baseReporterDecorator, config) {
  baseReporterDecorator(this);
  
  this.onSpecComplete = function(browser, result) {
    parseResult(result);
  };

  this.onRunComplete = function() {
    if(config.outputFile) {
        fs.writeFile(config.outputFile, JSON.stringify(output, null, 4), function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("JSON file was written to " + config.outputFile);
            }
        }); 
    } else {
        process.stdout.write(JSON.stringify(output));    
    }
  }
};

function parseResult(result) {
    var testStatus = (result.success)? 'PASSED' : 'FAILED';
    var current = getCurrentOutputPointer(result.suite);
    current[result.description] = testStatus;

};

function getCurrentOutputPointer(suite) {
    var current = output;
    for(var i = 0; i < suite.length; i++) {
        if (typeof current[suite[i]] === 'undefined') {
            current[suite[i]] = {};
        }
        current = current[suite[i]];
    }
    return current;

};

SPECJSONReporter.$inject = ['baseReporterDecorator', 'config.specjsonReporter'];

module.exports = {
  'reporter:specjson': ['type', SPECJSONReporter]
};
