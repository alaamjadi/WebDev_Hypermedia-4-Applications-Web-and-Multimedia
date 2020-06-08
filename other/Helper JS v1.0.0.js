/* JavaScript Helper */
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Using Promises 01
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}
function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Using Promises 02
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// Using Promises 03
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);

// Chaining 01
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

// Chaining 02
const promise2 = doSomething().then(successCallback, failureCallback);

// Chaining 03
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

// Chaining 04
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);

// Chaining 05
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

// Chaining after a catch
new Promise((resolve, reject) => {
  console.log("Initial");
  resolve();
})
  .then(() => {
    throw new Error("Something failed");
    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });

// Error propagation 01
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);

// Error propagation 02
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}

// Error propagation 03
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}

// Error propagation 01
window.addEventListener(
  "unhandledrejection",
  (event) => {
    /* You might start here by adding code to examine the
       promise specified by event.promise and the reason in
       event.reason */
    event.preventDefault();
  },
  false
);

// Creating a Promise around an old callback API
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);

// Composition 01
Promise.all([func1(), func2(), func3()])
.then(([result1, result2, result3]) => {
  /* use result1, result2 and result3 */
});

// Composition 02
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });

// Composition 03
const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => (x) =>
  funcs.reduce(applyAsync, Promise.resolve(x));

// Compositon 04
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);

// Compositon 05
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */

// Timing 01
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2

// Timing 02
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

// Nesting 01
doSomethingCritical()
.then(result => doSomethingOptional(result)
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // Ignore if optional stuff fails; proceed.
.then(() => moreCriticalStuff())
.catch(e => console.error("Critical failure: " + e.message));

