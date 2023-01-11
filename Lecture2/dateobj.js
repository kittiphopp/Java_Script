//Date funvtion return milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
//this example takes 2 seconds to run
const start = Data.now();

console.log('starting timer....');
// expected outut: starting timer....

setTimeout(() => {
    const millis = Date.now() - start;

    console.log('seconds elapsed = ${Math.floor(millis / 1000)}');
    // expected output: seconds elapsed = 2
}, 2000);