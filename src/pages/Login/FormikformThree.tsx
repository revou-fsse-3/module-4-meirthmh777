import { FC, HTMLAttributes, PropsWithChildren } from "react";
// import { Formik, FormikProps } from "formik";
import MyInput from "../../common/Input";
import * as Yup from "yup";
import Button, { ButtonTypes } from "../../common/Button";
import AxiosLogIn from "../../libs/axios/Login";
import Form, { ISubmitHandler } from "../../common/Form";
import FielsSet from "../../common/Fieldset";
// import { useContext } from "react";

const yupSchemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[0-9])/, "Must be Upper Case and number")
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

interface FormikformThreeProps extends HTMLAttributes<HTMLDivElement> {}
type FormikformThreeComponents = FC<FormikformThreeProps> & PropsWithChildren;
const FormikformThree: FormikformThreeComponents = ({
  children,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Form
        initialSchemas={yupSchemas}
        submitHandler={handlerSignIn}
        initialNameValue={getInitValue()}
      >
        <FielsSet legend="Log In">
          <MyInput label="email" />
          <MyInput label="password" />
          <Button
            ButtonType={ButtonTypes.FiveButton}
            type="submit"
            className="px-3 py-2 rounded-lg"
          >
            <p className="text-2xl font-bold">Submit</p>
          </Button>
        </FielsSet>
      </Form>
    </div>
  );
};
export default FormikformThree;

function getInitValue() {
  let initValue = {
    email: "",
    password: "",
  };
  let localEmail = localStorage.getItem("email");
  if (localEmail) {
    initValue.email = localEmail;
  }
  let localPassword = localStorage.getItem("password");
  if (localPassword) {
    initValue.password = localPassword;
  }
  return initValue;
}
//   const ISubmitHandler= (value)=> {console.log(value)}: ISubmitHandler = async (values, action) => {

//   // const data = JSON.stringify(values);
//   console.log("test");
//   console.log(values);
//   // const response = await AxiosLogIn(data);
//   // localStorage.setItem("token", response.data.token);
//   action.setSubmitting(false);
// }

const handlerSignIn: ISubmitHandler = async (values, action) => {
  const data = JSON.stringify(values);
  const response = await AxiosLogIn(data);
  alert(`
  you can go to Category now
  ${JSON.stringify(response, null, 2)}`);
  localStorage.setItem("token", response.data.token);
  action.setSubmitting(false);
};
