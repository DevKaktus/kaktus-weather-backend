import fetch from "node-fetch";

let kazan = null;

export function fetchToUrl(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
        if (result) {
            kazan = result;
            console.log('weather data updated')
        } else console.log('failed to update weather data')
    });
}

export { kazan };
