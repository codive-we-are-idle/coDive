const typeOf = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

export const isObject = data => typeOf(data) === 'object';
export const isArray = data => typeOf(data) === 'array';
export const isBoolean = data => typeOf(data) === 'boolean';
export const isNull = data => typeOf(data) === 'null';
export const isUndefined = data => typeOf(data) === 'undefined';
export const isFunction = data => typeOf(data) === 'function';
export const isSymbol = data => typeOf(data) === 'symbol';
export const isString = data => typeOf(data) === 'string';
export const isNumber = data => typeOf(data) === 'number';
export const isMath = data => typeOf(data) === 'math';
export const isBigInt = data => typeOf(data) === 'bigint';
export const isNumericString = data => !isNaN(Number(data));
