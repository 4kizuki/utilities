import { render } from "@testing-library/react";
import { FunctionComponent, ReactNode } from "react";
import { FlattenProviders } from "./flatten-react-providers";

const ProviderOuter: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};
const ProviderInner: FunctionComponent<{
  children?: ReactNode;
  someProps: string;
}> = ({ children, someProps }) => {
  return (
    <section>
      <span>{someProps}</span>
      {children}
    </section>
  );
};

const MergedProvider = FlattenProviders()
  .chain(ProviderOuter)
  .chain(ProviderInner, { someProps: "SomeProperty" })
  .build();

const Main: FunctionComponent = () => {
  return (
    <MergedProvider>
      <main>main</main>
    </MergedProvider>
  );
};

describe("FlattenReactProviders", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.children.length).toBe(1);
    expect(baseElement.children[0].children.length).toBe(1);

    const appRoot = baseElement.children[0].children[0];

    expect(appRoot.tagName).toBe("DIV");
    expect(appRoot.children.length).toBe(1);
    expect(appRoot.children[0].tagName).toBe("SECTION");
    expect(appRoot.children[0].children.length).toBe(2);
    expect(appRoot.children[0].children[0].tagName).toBe("SPAN");
    expect(appRoot.children[0].children[0].textContent).toBe("SomeProperty");
    expect(appRoot.children[0].children[1].tagName).toBe("MAIN");
    expect(appRoot.children[0].children[1].textContent).toBe("main");
  });
});
