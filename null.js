export const Null = new Proxy(
  {},
  {
    get() {
      return Null;
    },
    set() {
      return Null;
    },
  }
);

export const isNull = (value) => value === null || value === Null;
