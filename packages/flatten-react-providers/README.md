# flatten-react-providers

A library to flatten multiple React providers into a single provider for better readability and diff friendliness.

```tsx
// without this library

import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <MyProvider1>
      <MyProvider2>
        <MyProvider3>
          <Application />
        </MyProvider3>
      </MyProvider2>
    </MyProvider1>
  );
};

// with this library

import { FunctionComponent } from "react";
import { FlattenProviders } from "@4kizuki/flatten-react-providers";

const MergedProviders = FlattenProviders().chain(MyProvider1).chain(MyProvider2).chain(MyProvider3).build();

const SimplifiedApp: FunctionComponent = () => {
  return (
    <MergedProviders>
      <Application />
    </MergedProviders>
  );
};
```
