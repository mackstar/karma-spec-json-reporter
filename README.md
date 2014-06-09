# Karma JSON spec reporter

This is a karma reporter that will export your test data in the form of JSON but keys all describe contexts such as:

```
{
    "My Feature": {
        "should have a passing test": "PASSED",
        "might have a failing test": "FAILED"
    },
    "My Other Feature": {
      "should also have a passing test": "PASSED"
    }
}

```

## Installation


```
npm install --save-dev karma-spec-json-reporter
```

In your `karma.conf.js` add include `'specjson'` to your reporters like below:

```
reporters: ['specjson', 'dots'],
```

You will also need to set the location that you need to output your JSON file.

```
    specjsonReporter: {
        outputFile: "karma-specs.json"
    }
```

