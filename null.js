const general = window || global;
Object.defineProperties(general, {
    Null: {
      value: new Proxy({}, {get() {return Null},set(){return Null}}),
      writable: false,
      configurable: false,
      enumerable: true
    },
    isNull: {
      value: value => value === null || value === Null,
      writable: false,
      configurable: false,
      enumerable: false
    }
  }
);
