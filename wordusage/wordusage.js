"use strict";
// =======================================================================
// WordUsage by Ian Potts
// Instructions for use:
// Open console window on path with app.js within it.
// Ensure node is installed - https://nodejs.dev/en/download/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWordUsageInText = void 0;
// So build with:
//  npm run build
// then run with
//  node wordusage sampletext.txt
// =======================================================================
const fs = __importStar(require("fs"));
// =======================================================================
// Functions used by WordUsage application
// =======================================================================
const countWordUsageInText = (text) => {
    // 1. First parse the words in text into an array (elminating whitespace, punctuation etc)
    var words = text.match(/\b(\w+)\b/g);
    // 2. Now count those words and build a dictionary of usage
    var dictOfUsage = {};
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
exports.countWordUsageInText = countWordUsageInText;
const countWordUsageInFile = (filename) => {
    // Read file into string
    fs.readFile(filename, 'utf8', (err, filedata) => {
        if (err) {
            console.error(err);
            return;
        }
        var words = (0, exports.countWordUsageInText)(filedata);
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
var args = process.argv;
if (args.length > 2) {
    var filename = args[2];
    countWordUsageInFile(filename);
}
else {
    console.log("No filename argument provided.");
}
//# sourceMappingURL=wordusage.js.map