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
        <h2 className="text-center mb-0.5em head">Add Blogs</h2>
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
                      type="text"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      class="form-control"
                    />
                    <label
                      className="form-label"
                      for="form2Example1"
                      style={{ marginLeft: "0px" }}
                    >
                      Title
                    </label>
                  </div>
                </div>

                <div className="box">
                  <div class="form-outline mb-4">
                    <input
                      type="textbox"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label class="form-label" for="form2Example2">
                      Description
                    </label>
                  </div>
                </div>
                <div className="box">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                      class="form-control"
                    />
                    <label
                      className="form-label"
                      for="form2Example1"
                      style={{ marginLeft: "0px" }}
                    >
                      Category
                    </label>
                  </div>
                </div>
                <div className="box">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="data"
                      value={values.data}
                      onChange={handleChange}
                      class="form-control"
                    />
                    <label
                      className="form-label"
                      for="form2Example1"
                      style={{ marginLeft: "0px" }}
                    >
                      Data
                    </label>
                  </div>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}

                {/* <!-- Submit button --> */}
                <Button variant="contained" type="submit" className="sign w-100">
                   Publish
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBlog;
