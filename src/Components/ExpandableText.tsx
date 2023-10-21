import { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  onClick: () => void;
}

const ExpandableText = ({ children, onClick, maxChars = 10 }: Props) => {
  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
    onClick();
  };

  if (children.length <= maxChars) return <div>{children}</div>;

  return (
    <>
      <div>{state ? children : children.substring(0, maxChars) + "..."}</div>
      <button onClick={toggle}>{state ? "Hide" : "Show More"}</button>
    </>
  );
};

export default ExpandableText;
