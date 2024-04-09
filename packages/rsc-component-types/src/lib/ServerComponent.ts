import type { FunctionComponent } from "react";

export type ServerComponent<
  P extends Record<string, unknown> = Record<string, never>
> = FunctionComponent<P>;
