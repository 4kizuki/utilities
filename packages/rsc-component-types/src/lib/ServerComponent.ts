import type { FunctionComponent } from "react";

export type ServerComponent<P extends object = Record<string, never>> =
  FunctionComponent<P>;
