import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <h1>This is Home Page.</h1>
      <h1>Click Buttons above to switch page.</h1>
    </div>
  );
};

export default index;
