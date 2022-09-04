import React, { useContext } from "react";
import "./AddBlog.css";
import { Button } from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";

const AddBlog = () => {
  const url = app_config.backend_url;
  const userForm = {
    title: "",
    description: "",
    category: "",
    data: "",
  };
  const navigate = useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch(url + "/blog/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="body">
      <div className="container mt-2 cont">
        <h2 className="text-center mb-0.5em">Add Blogs</h2>
        <p className="text-center">Please enter the details of blogs</p>

        <Formik
          initialValues={{
            userForm
          }}
          onSubmit={userSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="box">
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      class="form-control"
                    />
                    <label
                      className="form-label"
                      for="form2Example1"
                      style={{ marginLeft: "0px" }}
                    >
                      Email address
                    </label>
                  </div>
                </div>

                <div className="box">
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label class="form-label" for="form2Example2">
                      Password
                    </label>
                  </div>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}

                {/* <!-- Submit button --> */}
                <Button type="submit" className="sign">
                  Sign in
                </Button>
              </div>
              {/* <!-- Register buttons --> */}
              <div class="text-center all">
                <div className="txt">
                  <p>
                    Not a member? <a href="/signUp">Register here</a>
                  </p>
                </div>
                <p>or sign up with:</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBlog;
