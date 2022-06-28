import {SliderComponent} from 'react-native';

export function sum(a, b) {
  return a + b;
}

export function reverseNumber(x) {
  if (x < 0) {
    let temp = -1 * x;
    let tempNum = temp.toString().split('').reverse().join('');
    return -1 * parseInt(tempNum);
  } else {
    return parseInt(x.toString().split('').reverse().join(''));
  }
}
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

export async function reverseAsync(x) {
  if (x < 0) {
    let temp = -1 * x;
    let tempNum = temp.toString().split('').reverse().join('');
    await sleep(3000);
    return -1 * parseInt(tempNum);
  } else {
    await sleep(10000);
    return parseInt(x.toString().split('').reverse().join(''));
  }
}

export function makeApiUpdates(items, callbacks) {
  for (let i = 0; i < items.length; i++) {
    callbacks(items[i]);
  }
}
