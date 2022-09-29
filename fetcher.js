const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const localFile = process.argv[3];

if (process.argv.length !== 4) {
  console.log('Please enter a URL and local file path!');
  return;
}
const requestCallback = function(error, response, body) {
  if (!response || response.statusCode !== 200) {
    console.log('error:', response && response.statusCode);
    return;
  }
  console.log(`Downloaded and saved ${body.length} bytes to ${localFile}`);
  fs.writeFile(localFile, body, function(error) {
    if (error) {
      console.log('error!', error);
    }
  });
};


request(url, requestCallback);