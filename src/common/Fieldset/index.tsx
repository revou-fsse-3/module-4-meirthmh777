import { FC, FieldsetHTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, legend, ...resProps }) => {
  return (
    <fieldset
      {...resProps}
      className={
        "  text-center w-full " +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <legend className="text-2xl underline">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default index;
