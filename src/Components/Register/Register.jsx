import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {


  
  let Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setapiError] = useState("");

  async function sendRegisterDate(values) {
    setLoading(true)
    let { data } = await axios
      .post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
      .catch((err) => {
        setapiError(err.response.data.message);
        setLoading(false);
      });

    if (data.message === "success") {
      Navigate("/login");
      setLoading(false);
    }
  }

  let validate = Yup.object({
    name: Yup.string().required("name is required").min(3, "minimum name is 3 char ").max(15, "maximum char is 15"),
    email: Yup.string().required("email is required").email("email invalid"),
    // password: Yup.string().required("passowrd is required").matches(/^[0-9]{5,10}$/, "must start with capital "),
    // rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "repassword dont match"),
    phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}/, "this not eg phone"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "01012341234",
    },
    onSubmit: sendRegisterDate,
    validationSchema: validate,
  });

  return (
    <>
      <div className="w-50 m-auto">
        <h3>Register Now</h3>
        <form onSubmit={formik.handleSubmit}>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}

          <label htmlFor="name">name</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" id="name" className="form-control" type="text"/>
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : (
            ""
          )}

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

          <label htmlFor="rePassword">rePassword</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="rePassword"
            id="rePassword"
            className="form-control"
            type="password"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : (
            ""
          )}



          <button type="submit" className="btn btn-info p-3 mt-3 form-control" > {loading ? <h6> <i className="fas fa-spinner fa-spin "></i></h6>:"Register"}</button>
        </form>
      </div>
    </>
  );
}
