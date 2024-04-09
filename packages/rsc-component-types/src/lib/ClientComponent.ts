import type {
  FunctionComponent,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

type SyncReactNode =
  | ReactElement
  | string
  | number
  | null
  | undefined
  | boolean
  | ReactPortal
  | Iterable<ReactNode>;

export type ClientComponent<
  P extends Record<string, unknown> = Record<string, never>
> = FunctionComponent<P> & ((props: P) => SyncReactNode);
