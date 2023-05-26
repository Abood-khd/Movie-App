import React from 'react'
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";



export default function Login({saveUserData}) {
  let Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setapiError] = useState("");


 


  async function sendloginDate(values) {
    setLoading(true)
    let { data } = await axios
      .post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
      .catch((err) => {
        setapiError(err.response.data.message);
        setLoading(false);
      });

    if (data.message === "success") {
      localStorage.setItem('userToken',data.token)
      setLoading(false);
      saveUserData()
      Navigate("/");
    }
  }

  let validate = Yup.object({
    email: Yup.string().required("email is required").email("email invalid"),
    password: Yup.string().required("passowrd is required").matches(/^[0-9]{5,10}$/, "must start with capital "),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "01012341234",
    },
    onSubmit: sendloginDate,
    validationSchema: validate,
  });



  return  <>
    <div className="w-50 m-auto">
          <h3>login Now</h3>
        <form onSubmit={formik.handleSubmit}>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}

   

          <label htmlFor="email">email</label>
          <input  onChange={formik.handleChange}  onBlur={formik.handleBlur}  name="email"  id="email"  className="form-control"  type="email"/>
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="name">password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            id="password"
            className="form-control"
            type="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : (
            ""
          )}

              <button className='btn btn-success mt-3 form-control' > {loading ? <h6> <i className="fas fa-spinner fa-spin "></i></h6>:"login"}</button>
            </form>
            </div>
            </>
}
