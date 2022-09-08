import fetch from "node-fetch";

let kazan = null;

export function fetchToUrl(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
        if (result) {
            kazan = result;
        }      
    });
}

export { kazan };
