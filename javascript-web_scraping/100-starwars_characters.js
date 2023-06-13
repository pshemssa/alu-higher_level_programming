#!/usr/bin/node
const movieId = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/' + movieId;

const request = require('request');
request(url, function (error, _response, body) {
  if (error) {
    console.error(error);
  } else {
    const characters = JSON.parse(body).characters;
    for (const character of characters) {
      request(character, function (error, _response, body) {
        if (error) {
          console.error(error);
        } else {
          console.log(JSON.parse(body).name);
        }
      });
    }
  }
});
