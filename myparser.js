// Open a log file and parse it

// Load the fs (filesystem) module.
var fs = require('fs');//

// Read the contents of the file into memory.
fs.readFile('example_log.txt', function (err, logData) {

// If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;

// logData is a Buffer, convert to string.
    var text = logData.toString();

    // Create an empty json object
    var results = {};

// Break up the file into lines.
    var lines = text.split('\n');

    /*
    Split out the file and then sort by the letter
    Then add the numbers for the final column that correspond to these letters
    Finally save this information to the results var
    */
    lines.forEach(function(line) {
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    });

    console.log(results);
    // { A: 2, B: 14, C: 6 }
});