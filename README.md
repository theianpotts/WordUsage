# WordUsage
This is a simple TS console application run with NodeJS to count word usage in text files

## Prerequisites
You will need to download and install NodeJs to run this application via a console/terminal using node. Download from https://nodejs.dev/en/download/

## Building WordUsage
Clone the repository locally.
Open a console/terminal on the folder containing the wordusage.ts file and others and (on first usage) enter:
  npm install
Then enter:
  npm run build
  
## Running WordUsage
Once the application has been built (ie. transpiled into JS) it can be run using node as follows:

  node wordusage sampletext.txt
  
 (The wordusage app takes one parameter, the filename of a text file, so this example parses sampletext.txt and outputs word usage results. You may also try the simpler shortsampletext.txt)
 
## Running Tests
The project also includes a few unit tests written using Jest (ts-jest specifically). These tests check the code returns expected results on certain test data.

The tests may be run from the console with:

npm test

## The Code
WordUsage is written in TypeScript with the main code found in the wordusage.ts file. This is transpiled into JS on building. The accompanying tests are found in wordusage.test.ts
