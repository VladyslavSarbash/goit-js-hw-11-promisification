// #1
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger1 = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger1);
delay(1000).then(logger1);
delay(1500).then(logger1);

export { delay, logger1 };
