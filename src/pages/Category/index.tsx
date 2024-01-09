import {
  FC,
  //   Fragment,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import AxiosGetCategory, { Datum } from "../../libs/axios/CategoryList";
import type NavigationLoader from "../../libs/Rout";
import Table from "../../common/Table";
import { Link } from "react-router-dom";

export const loader: NavigationLoader<Object> = async () => {
  let getTokne = localStorage.getItem("token");
  if (!getTokne) {
    window.location.href = "/log-in";
    return {};
  }
  return {};
};
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const [data, setData] = useState<Datum[]>([]);
  // console.log(data);
  async function getList() {
    const res = await AxiosGetCategory();
    setData(res.data);
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Link to={"create"}>add new category</Link>
      <Table data={data} />
      {/* {data.map((d, id) => (
        <Fragment key={id}>
          <li>{d.name}</li>
        </Fragment>
      ))} */}
    </div>
  );
};

export default index;
