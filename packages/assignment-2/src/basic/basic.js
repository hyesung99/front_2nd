const isClass = (target) => target.constructor.toString().startsWith("class");
const isNumber = (target) => target instanceof Number;
const isString = (target) => target instanceof String;
const isBoolean = (target) => target instanceof Boolean;
const isSymbol = (target) => target instanceof Symbol;
const isObject = (target) => typeof target === "object" && target !== null;

const isPrimitive = (target) =>
  isClass(target) ||
  isNumber(target) ||
  isString(target) ||
  isBoolean(target) ||
  isSymbol(target);

export function shallowEquals(target1, target2) {
  if (target1 === target2) {
    return true;
  }

  if (!isObject(target1) || !isObject(target2)) {
    return false;
  }

  if (isPrimitive(target1) || isPrimitive(target2)) {
    return false;
  }

  const keys1 = Object.keys(target1);
  const keys2 = Object.keys(target2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => target1[key] === target2[key]);
}

export function deepEquals(target1, target2) {
  if (target1 === target2) {
    return true;
  }

  if (typeof target1 !== "object" || typeof target2 !== "object") {
    return false;
  }

  if (isPrimitive(target1) || isPrimitive(target2)) {
    return false;
  }

  const keys1 = Object.keys(target1);
  const keys2 = Object.keys(target2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => deepEquals(target1[key], target2[key]));
}

export function createNumber1(n) {
  return new CustomNumber(n, "number");
}

export function createNumber2(n) {
  return new CustomNumber(n, "string");
}

export function createNumber3(n) {
  return new CustomNumber(n, "json");
}

class CustomNumber {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }

  toJSON() {
    if (this.type === "json") {
      return `${this.value}`;
    }
    return this.value;
  }
}

export function createUnenumerableObject(target) {
  return target;
}

export function forEach(target, callback) {}

export function map(target, callback) {}

export function filter(target, callback) {}

export function every(target, callback) {}

export function some(target, callback) {}
