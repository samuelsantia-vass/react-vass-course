import { CSSProperties, ReactNode } from "react";

interface HelloProps {
  name: string;
  counter?: number;
}

function Hello({ name = "World" }: HelloProps) {
  return <p>Hello {name}</p>;
}

interface SectionProps {
  children: ReactNode;
  style: CSSProperties;
}

function Section({ children, style }: SectionProps) {
  return <section style={style}>{children}</section>;
}

function App() {
  const name = "Pedro";

  return (
    <Section style={{ color: "red" }}>
      <Hello name={name} />
    </Section>
  );
}

export default App;
