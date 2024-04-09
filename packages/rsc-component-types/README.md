# rsc-component-types

The snippet below is a simple example of a React Client Component unintentionally using async function syntax.

```tsx
"use client";

const MyComponent: FunctionComponent = async () => {
  return <div>MyComponent</div>;
};
```

No build time error is reported for the above code snippet. However, the code will fail at runtime.

With the `rsc-component-types` package, you can prevent such unintentional usage of async function syntax in React Client Components.

```tsx
// OK
const GoodClientComponent: ClientComponent<{ children?: ReactNode }> = ({ children }) => {
  // do something
  return <div>{children}</div>;
};

// NG (compile error)
const WrongAsyncClientComponent: ClientComponent<{ children?: ReactNode }> = async ({ children }) => {
  // do something
  return <div>{children}</div>;
};

// OK
const GoodServerComponent: ServerComponent<{ children?: ReactNode }> = ({ children }) => {
  // do something
  return <div>{children}</div>;
};

// OK
const GoodAnyComponent: ServerComponent<{ children?: ReactNode }> = async ({ children }) => {
  await assertSession(); // pseudo auth library

  return <div>{children}</div>;
};
```
