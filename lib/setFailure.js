export default function setFailure(fn, failValue, ...args) {
  try {
    return fn(...args);
  } catch (e) {
    console.error(e);
    return failValue;
  }
}