const pipe =
  (...args) =>
  (init) =>
    args.reduce((acc, cur) => cur(acc), init);

const a = pipe(
  (x) => x + 3,
  (x) => x * 2,
  (x) => console.log("Got", x)
);

a(5);
