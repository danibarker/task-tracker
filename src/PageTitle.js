import { GrandChild } from "./components/GrandChild";

export function PageTitle({ text, fontSize }) {
  return (
    <div>
      <h1>{text}</h1>
      <GrandChild fontSize={fontSize} />
    </div>
  );
}
