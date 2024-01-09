import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import GetCategory, { Data } from "@axios/GetCategory";
import FormicForm, { ISubmitHandler } from "@common/Form";
import Input from "@common/Input";
import FieldSet from "@common/Fieldset";
import Button from "@common/Button";
import * as Yup from "yup";
import axiosUpdateCategory from "@axios/UpdateCategory";
import { Console } from "console";
import MySelect from "@common/SelectOption";
import DeleteCategory from "@axios/DeleteCategory";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { id } = useParams();
  const [category, setCategory] = useState<Data>({
    created_at: "",
    is_active: false,
    name: "",
    id: "",
    updated_at: "",
  });
  const GetCategoryById = async () => {
    const respond = await GetCategory(id || "");
    setCategory(respond.data);
  };
  useEffect(() => {
    GetCategoryById();
  }, []);
  const handleDelete = async () => {
    await DeleteCategory(category.id);
    window.location.href = "/category";
  };
  //   console.log(category);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {category.id.trim().length > 0 ? (
        <FormicForm
          initialNameValue={{
            id: category.id,
            name: category.name,
            is_active: category.is_active ? "active" : "not active",
          }}
          initialSchemas={Yup.object({
            id: Yup.string().required(),
            name: Yup.string().required(),
            is_active: Yup.string().required(),
          })}
          submitHandler={HandleUpdate}
        >
          <FieldSet legend="update">
            <Input label="id" type="hidden"></Input>
            <Input label="name"></Input>
            <MySelect
              label="is_active"
              options={["active", "not active"]}
            ></MySelect>
            <Button type="submit">Update</Button>
            <Button onClick={handleDelete} type="button">
              Delete
            </Button>
          </FieldSet>
        </FormicForm>
      ) : (
        "there is no idea"
      )}
    </div>
  );
};

export default index;
const HandleUpdate: ISubmitHandler = async (values, action) => {
  // const [_name, email, password] = Object.values(values);
  const data = JSON.stringify({
    ...values,
    is_active: values.is_active === "active",
  });
  console.log(data);
  await axiosUpdateCategory(data);
  // console.log(respond);
  // alert(respond);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);
  action.setSubmitting(false);
  // return redirect("/category");
  window.location.href = "/category";
};
