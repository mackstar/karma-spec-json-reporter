var output = {};

var SPECJSONReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);
  
  this.onSpecComplete = function(browser, result) {
    
    process.stdout.write(JSON.stringify(output));
  };
  
};

function parseResult(result) {
    output = result;
};

SPECJSONReporter.$inject = ['baseReporterDecorator'];

module.exports = {
  'reporter:specjson': ['type', SPECJSONReporter]
};
