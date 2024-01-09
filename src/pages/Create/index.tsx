import { FC, HTMLAttributes, PropsWithChildren } from "react";
import FormicForm, { ISubmitHandler } from "@common/Form";
import Fieldset from "@common/Fieldset";
import Input from "@common/Input";
import * as Yup from "yup";
import AxiosCreateCategory from "@axios/Create";
import Button, { ButtonTypes } from "@common/Button";

interface IndexProps extends HTMLAttributes<HTMLDivElement> {}
type IndexComponents = FC<IndexProps> & PropsWithChildren;
const Index: IndexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <FormicForm
        initialNameValue={{ name: "" }}
        initialSchemas={Yup.object({
          name: Yup.string().required(),
        })}
        submitHandler={handlerCreate}
      >
        <Fieldset legend="Create">
          <Input label="name"></Input>
          <Button type="submit">Submit</Button>
        </Fieldset>
      </FormicForm>
    </div>
  );
};

export default Index;
const handlerCreate: ISubmitHandler = async (values, action) => {
  // const [_name, email, password] = Object.values(values);
  const data = JSON.stringify(values);
  const respond = await AxiosCreateCategory(data);
  // console.log(respond);
  alert(respond);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);
  action.setSubmitting(false);
  // return redirect("/category");
  window.location.href = "/category";
};
