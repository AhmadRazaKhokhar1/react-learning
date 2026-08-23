"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { yupFormSchema } from "./form-schema";

export default function formikPage() {
  const initialValue = {
    name: "",
    age: 0,
    email: "",
    dob: "",
  };
  return (
    <Formik
      validationSchema={yupFormSchema}
      initialValues={initialValue}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props) => {
        const { errors, values, touched } = props;
        console.log({ errors, values, touched });
        return (
          <Form>
            <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
              <label htmlFor="name">First Name</label>
              <Field
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                className={
                  touched.name && errors.name
                    ? "border-red-500 border"
                    : "border-blue-500 border"
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="First Name"
                type="email"
                className={
                  touched.email && errors.email
                    ? "border-red-500 border"
                    : "border-blue-500 border"
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
              <label htmlFor="dob">DOB</label>
              <Field
                id="dob"
                name="dob"
                placeholder="First Name"
                type="date"
                className={
                  touched.dob && errors.dob
                    ? "border-red-500 border"
                    : "border-blue-500 border"
                }
              />
              <ErrorMessage
                name="dob"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
              <label htmlFor="age">Age</label>
              <Field
                id="age"
                name="age"
                placeholder="First Name"
                type="number"
                className={
                  touched.age && errors.age
                    ? "border-red-500 border"
                    : "border-blue-500 border"
                }
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
