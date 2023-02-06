# WordUsage
This is a simple TS console application run with NodeJS to count word usage in text files

## Prerequisites
You will need to download and install NodeJs to run this application via a console/terminal using node. Download from https://nodejs.dev/en/download/

## Building WordUsage
Open a console/terminal on the folder containing the wordusage.ts file and others and enter
  npm run build
  
## Running WordUsage
Once the application has been built (ie. transpiled into JS) it can be run using node as follows:

  node wordusage sampletext.txt
  
 (The wordusage app takes one parameter, the filename of a text file, so this example parses sampletext.txt and outputs word usage results. You may also try the simpler shortsampletext.txt)
