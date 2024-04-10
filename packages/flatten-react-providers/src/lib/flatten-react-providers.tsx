import React, { ComponentType, ReactElement, ReactNode } from "react";

class Builder {
  public constructor(
    private readonly providers: ((children: ReactNode) => ReactElement)[] = []
  ) {}

  public chain(Provider: ComponentType<{ children: ReactNode }>): Builder;
  public chain<TProps extends Record<string, unknown>>(
    Provider: ComponentType<{ children: ReactNode } & TProps>,
    props: TProps
  ): Builder;
  public chain(
    Provider: ComponentType<{ children: ReactNode }>,
    props?: Record<string, unknown>
  ): Builder {
    return new Builder([
      ...this.providers,
      children => <Provider {...(props ?? {})}>{children}</Provider>,
    ]);
  }

  public build(): ComponentType<{ children?: ReactNode }> {
    const MergedProviders: ComponentType<{ children?: ReactNode }> = ({
      children,
    }) =>
      this.providers.reduceRight((acc, provider) => provider(acc), children);

    return MergedProviders;
  }
}

export function FlattenProviders(): Builder {
  return new Builder();
}
