// =======================================================================
// WordUsage by Ian Potts
// Instructions for use:
// Open console window on path with app.js within it.
// Ensure node is installed - https://nodejs.dev/en/download/

// So build with:
//  npm run build
// then run with
//  node wordusage sampletext.txt
// =======================================================================

import * as fs from 'fs';

// =======================================================================
// Functions used by WordUsage application
// =======================================================================

export const countWordUsageInText = (text: string) => {

    // 1. First parse the words in text into an array (elminating whitespace, punctuation etc)
    var words = text.match(/\b(\w+)\b/g);

    // 2. Now count those words and build a dictionary of usage
    var dictOfUsage: { [key: string]: number } = {};
    if (words) {
        for (var word of words) {
            let wordLower = word.toLowerCase();
            dictOfUsage[wordLower] ? dictOfUsage[wordLower]++ : dictOfUsage[wordLower] = 1;
        }
    }

    // 3. Now turn that into an array and sort by usage
    // (NB: The sort order here is descending, we might want the code to specify order via a param in future)
    return Object.keys(dictOfUsage).map(k => ([k, dictOfUsage[k]])).sort((a, b) => (Number(b[1]) - Number(a[1])));
};

const countWordUsageInFile = (filename: string) => {

    // Read file into string
    fs.readFile(filename, 'utf8', (err: any, filedata: string) => {
        if (err) {
            console.error(err);
            return;
        }

        var words = countWordUsageInText(filedata);

        if (words) {
            // Output the results to console
            // (NB: All results are output. Another improvement could be to have an extra command line param to specify to return the top N results)
            for (var word of words) {
                console.log(word[0] + ': ' + word[1]);
            }
        }
    });
};


// =======================================================================
// Main entry for WordUsage
// =======================================================================

var args: string[] = process.argv;

if (args.length > 2) {
    var filename: string = args[2];

    countWordUsageInFile(filename);

} else {
    console.log("No filename argument provided.");
}
