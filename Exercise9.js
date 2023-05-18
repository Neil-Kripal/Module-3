function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1; // Random delay between 1 and 20 seconds
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(delay); // Resolve the promise with the delay value if it's even
        } else {
          reject(new Error(delay)); // Reject the promise with the delay value if it's odd
        }
      }, delay * 1000); // Convert delay to milliseconds
    });
  }
  
  randomDelay()
    .then((delay) => console.log(`Delay Successful: delay is a even number at ${delay} seconds.`))
    .catch((delay) => console.log(`Delay Failure: ${delay} seconds, delay appears is a odd number.`));
  