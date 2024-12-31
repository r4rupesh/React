import { useState } from "react";
import {useFormik} from "formik";
export default function ({addNewComment}) {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   remarks: "",
  //   range: 5,
  // });
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name cannot be empty';
      return errors;
    }};
  
  const formik = useFormik({
    initialValues: {
      name: '',
      remarks: '',
      range: 5,
    },
    validate,
    onSubmit: values => {
      preventDefault();
      addNewComment(values);
    },
  });
  // const handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };
  // const handleSubmit = (event)=>{
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     name: "",
  //     remarks: "",
  //     range: 5,
  //   });

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>add some comments</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        />
        {formik.errors.name ? <p style={{color:"red"}}>{formik.errors.name}</p> : null}
      <br />
      <br />
      <label htmlFor="remarks">Remarks</label>
      <textarea
        name="remarks"
        id="remarks"
        placeholder="add some remarks"
        value={formik.values.remarks}
        onChange={formik.handleChange}
      ></textarea>
      <br />
      <br />
      <label htmlFor="range">Rating</label>
      <input
        type="number"
        min={1}
        max={5}
        name="range"
        id="range"
        value={formik.values.range}
        onChange={formik.handleChange}
      />
      <br />
      <br />
      <button type="submit">Add some comments</button>
    </form>
  );
};
