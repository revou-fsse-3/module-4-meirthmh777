import { FC, HTMLAttributes, PropsWithChildren } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import Button, { ButtonTypes } from "../Button";
// import Button from "@common/Button";
import { Link } from "react-router-dom";

export interface Datum {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const columnHelper = createColumnHelper<Datum>();
const columns = [
  columnHelper.accessor("name", {
    cell: (props) => <span>{props.getValue()}</span>,
    header: "Name",
  }),
  columnHelper.accessor("is_active", {
    cell: (props) => <span>{props.getValue() ? "active" : "not active"}</span>,
    header: "status",
  }),
  columnHelper.accessor("created_at", {
    cell: (props) => <span>{new Date(props.getValue()).toDateString()}</span>,
    header: "create",
  }),
  columnHelper.accessor("updated_at", {
    cell: (props) => <span>{new Date(props.getValue()).toDateString()}</span>,
    header: "Update",
  }),
  columnHelper.accessor("id", {
    header: "action",
    cell: (props) => (
      <Link to={props.getValue()} className="bg-slate-500 p-1 text-white">
        edit
      </Link>
    ),
  }),
];

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: Datum[];
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ data, ...resProps }) => {
  // const columHealer = createColumnHelper<UsersProps>()
  //   const [data] = useState(
  //     Users.map((user) => Object.assign(user, { row: "" }))
  //   );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div
      {...resProps}
      className={
        `${resProps.className ? resProps.className : ""}` +
        " w-full min-w-[30rem] overflow-x-auto rounded-lg  "
      }
    >
      <table className="w-full text-left rounded-lg p-2 my-5">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="table-small text-left text-gray-500 bg-blue-100"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length
            ? table.getRowModel().rows.map((row, id) => (
                <tr
                  className={
                    `${id % 2 === 0 ? "bg-white" : "bg-blue-100"}` +
                    " table-small px-2 py-2"
                  }
                  key={row.index}
                >
                  {row.getVisibleCells().map((cel) => (
                    <td key={cel.id}>
                      {flexRender(cel.column.columnDef.cell, cel.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default index;
