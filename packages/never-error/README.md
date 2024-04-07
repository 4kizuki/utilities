# never-error

```typescript
import { NeverError } from '@4kizuki/never-error';

function someSwitch(value: '1' | '2' | '3') {
  switch (value) {
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    default:
      throw new NeverError(value, 'value');
  }
}
```
