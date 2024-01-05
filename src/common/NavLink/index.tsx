import { FC, LiHTMLAttributes, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
interface indexProps extends LiHTMLAttributes<HTMLLIElement> {
  to: string;
  label: string;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ to, label, ...resProps }) => {
  return (
    <li
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "text-white" : isPending ? "text-pink-600" : ""
        }
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default index;
