import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";



function Register() {
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Username is required"),
        password: Yup.string().min(4).max(20).required("Password is required"),
    });

    const onSubmit = (data: typeof initialValues) => {
        axios.post("http://localhost:3001/auth", data).then((res) => {
          console.log(res.data);
        });
    }

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            type="text"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="password"
            type="password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
