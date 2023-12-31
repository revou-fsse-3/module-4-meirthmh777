import { useField } from "formik";
import { FC, Fragment, SelectHTMLAttributes, PropsWithChildren } from "react";

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}
type MySelectComponents = FC<MySelectProps> & PropsWithChildren;
const MySelect: MySelectComponents = ({
  children,
  label,
  options,
  ...resProps
}) => {
  const [field, meta, _helpers] = useField(label);
  return (
    <Fragment>
      <label className="flex flex-col item-start my-5" htmlFor={label}>
        <h1 className="text-lg text-left mx-10 my-2">{label}</h1>
        <select
          // id={label}
          {...resProps}
          {...field}
          className="border-2 border-black bg-transparent mx-10 text-left text-lg rounded-lg"
        >
          {options.map((o) => (
            <Fragment key={o}>
              <option value={o}>{o}</option>
            </Fragment>
          ))}
        </select>

        {children}
        {meta.touched && meta.error ? (
          <div className="text-black text-left mx-10 my-2">{meta.error}</div>
        ) : null}
      </label>
    </Fragment>
  );
};

export default MySelect;
