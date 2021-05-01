import { Null, isNull } from "./null.js";

const general = globalThis || window || global;

Object.defineProperties(general, {
  Null: {
    value: Null,
    writable: false,
    configurable: false,
    enumerable: true,
  },
  isNull: {
    value: isNull,
    writable: false,
    configurable: false,
    enumerable: false,
  },
});
