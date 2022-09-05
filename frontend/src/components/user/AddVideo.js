import { Button, IconButton } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import VideoManager from "./VideoManager";

const AddVideo = () => {
  const navigate = useNavigate();
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  const userForm = {
    title: "",
    description: "",
  };
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded");
      }
    });
  };
  const userSubmit = async (formdata) => {
    formdata.thumbnail = selImage;
    formdata.file = selFile;
    console.log(formdata);

    const response = await fetch("http://localhost:5000/video/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "Video added successfully😁👍",
        icon: "success",
      });
      navigate("/user/AddVideo");
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Formik initialValues={userForm} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* <!-- Name input --> */}
            <div class="form-outline mb-4">
              <input
                type="text"
                id="title"
                class="form-control"
                onChange={handleChange}
                value={values.title}
              />
              <label class="form-label" for="form4Example1">
                Title
              </label>
            </div>

            {/* <!-- Message input --> */}
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="description"
                rows="4"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              <label class="form-label" for="form4Example3">
                Description
              </label>
            </div>
            <div class="form-outline mb-4">
              <Button variant="contained" component="label">
                Upload Video
                <input
                  hidden
                  accept="video/*"
                  multiple
                  type="file"
                  onChange={uploadFile}
                />
              </Button>
              <Button variant="contained" component="label">
                Upload Thumbnail
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </Button>
            </div>

            {/* <!-- Checkbox --> */}
            <div class="form-check d-flex justify-content-center mb-4">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form4Example4"
                checked
              />
              <label class="form-check-label" for="form4Example4">
                Agree to the Terms & Conditions
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </form>
        )}
      </Formik>
      <VideoManager />
    </div>
  );
};

export default AddVideo;
