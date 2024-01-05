import { FC, HTMLAttributes, PropsWithChildren } from "react";
// import { Formik, FormikProps } from "formik";
import MyInput from "../../common/Input";
import * as Yup from "yup";
import Button, { ButtonTypes } from "../../common/Button";
import AxiosSignUp from "../../libs/axios/SignUp";
import Form, { ISubmitHandler } from "../../common/Form";
import FielsSet from "../../common/Fieldset";
// import { useContext } from "react";

const yupSchemas = Yup.object({
  name: Yup.string().max(15, "Must be Upper Case").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[0-9])/, "Must be Upper Case and number")
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

interface FormikformTwoProps extends HTMLAttributes<HTMLDivElement> {}
type FormikformTwoComponents = FC<FormikformTwoProps> & PropsWithChildren;
const FormikformTwo: FormikformTwoComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Form
        initialSchemas={yupSchemas}
        submitHandler={handlerSignIn}
        initialNameValue={{
          name: "",
          email: "",
          password: "",
        }}
      >
        <FielsSet legend="Sign Up">
          <MyInput label="name" />
          <MyInput label="email" />
          <MyInput label="password" />
          <Button
            ButtonType={ButtonTypes.FiveButton}
            type="submit"
            className="px-3 py-2 rounded-lg"
          >
            <p className="text-2xl font-bold">Submit</p>
          </Button>
          /
        </FielsSet>
      </Form>
    </div>
  );
};
export default FormikformTwo;

const handlerSignIn: ISubmitHandler = async (values, action) => {
  const [_name, email, password] = Object.values(values);
  const data = JSON.stringify(values);
  const respond = await AxiosSignUp(data);
  // console.log(respond);
  alert(`
  you can log in now
  ${JSON.stringify(respond, null, 2)}`);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  action.setSubmitting(false);
};
