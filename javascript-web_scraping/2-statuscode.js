#!/usr/bin/node

const request = require('request');

// Check if the URL is provided as a command line argument
if (process.argv.length < 3) {
  console.log('Please provide a URL as a command line argument.');
  process.exit(1);
}

const url = process.argv[2];

request(url, function (error, response) {
  if (error) {
    console.log('An error occurred:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
