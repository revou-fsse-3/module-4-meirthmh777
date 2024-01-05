import { FC, FormHTMLAttributes, Fragment, PropsWithChildren } from "react";
import { Form, FormikProps, Formik, FormikHelpers } from "formik";
import type { ObjectSchema } from "yup";
interface FormicFormProps extends FormHTMLAttributes<HTMLFormElement> {
  initialNameValue: InitialValue;
  initialSchemas: ObjectSchema<InitialValue>;
  submitHandler: ISubmitHandler;
}
type FormComponent = FC<FormicFormProps> & PropsWithChildren;
const FormicForm: FormComponent = ({
  children,
  initialNameValue,
  initialSchemas,
  submitHandler,
  ...resProps
}) => {
  return (
    <Formik
      initialValues={initialNameValue}
      validationSchema={initialSchemas}
      onSubmit={submitHandler}
    >
      {(_props: FormikProps<InitialValue>) => (
        <Fragment>
          <Form
            {...resProps}
            className={`${resProps.className ? resProps.className : ""}`}
          >
            {children}
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};

export default FormicForm;
type InitialValue = Record<string, string>;
export interface ISubmitHandler {
  (value: InitialValue, action: FormikHelpers<InitialValue>): void;
}
