import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.css";
function CreatePost() {
  const history = useNavigate();
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    postText: Yup.string().required("Post is required"),
    username: Yup.string().min(3).max(15).required("Username is required"),
  });



  const onSubmit = (data: typeof initialValues) => {
    axios.post("http://localhost:3001/posts", data).then((res) => {
      console.log(res.data);
      history("/");
       
    })
  };




  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title</label>
          <ErrorMessage name="title" component="span" />
          <Field autocomplete="off" id="inputCreatePost" name="title" />
          <label>Post</label>
          <ErrorMessage name="postText" component="span" />
          <Field autocomplete="off" id="inputCreatePost" name="postText" />
          <label>Username</label>
          <ErrorMessage name="username" component="span" />
          <Field autocomplete="off" id="inputCreatePost" name="username" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
export default CreatePost;
