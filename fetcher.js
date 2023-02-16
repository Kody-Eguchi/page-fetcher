const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

console.log(url, path);

const fetcher = function(url, path) {
  request(url, (err, res, body) => {
    console.log(err);
    console.log(res);
    console.log(body);
    if (!err) {
      // callback(path, body);
      fs.writeFile(path, body, err => {
        if (err) {
          console.error(err);
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      });
    }
  });
};


// const callback = (path, content) => {
//   fs.writeFile(path, content, err => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(`Downloaded and saved 3261 bytes to ${path}`);
//   });
// };

fetcher(url, path);

//fetcher => request => writeFile

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
// Install and use the request library to make the HTTP request
// ✅npm init -y
// ✅npm install request
// Use Node's fs (file system) module to write the file
// Do not use the pipe function
// Do not use synchronous functions (see warning above)