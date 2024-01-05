import { useField } from "formik";
import { FC, Fragment, InputHTMLAttributes, PropsWithChildren } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
type MyInputComponents = FC<MyInputProps> & PropsWithChildren;
const MyInput: MyInputComponents = ({ children, label, ...resProps }) => {
  const [field, meta, _helpers] = useField(label);
  return (
    <Fragment>
      <label className="flex flex-col item-start my-5" htmlFor={label}>
        <h1 className="text-lg text-left mx-10 my-2">{label}</h1>
        <input
          id={label}
          {...resProps}
          {...field}
          className="border-2 border-black bg-transparent mx-10 text-left text-lg rounded-lg"
        />
        {children}
        {meta.touched && meta.error ? (
          <div className="text-black text-left mx-10 my-2">{meta.error}</div>
        ) : null}
      </label>
    </Fragment>
  );
};

export default MyInput;
