//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

// a)
import fetch from 'node-fetch';

async function fetchURLData(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

// c)
async function fetchMultipleURLsData(urls) {
  try {
    const fetchPromises = urls.map(url => fetchURLData(url));
    const responses = await Promise.all(fetchPromises);
    return responses;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

// b)
// Testing individual URL with the original fetchURLData
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

// Testing individual URL with the updated fetchURLData using async/await
(async () => {
  try {
    const data = await fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();

// Testing multiple URLs with the extended fetchMultipleURLsData
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/posts/1',
];

(async () => {
  try {
    const data = await fetchMultipleURLsData(urls);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
