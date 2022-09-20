import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import "./BlogManager.css";


const BlogManager = () => {
  const url = app_config.backend_url;
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataFromBackend = async () => {
    const response = await fetch(url + "/blog/getall");

    console.log(response.status);
    const data = await response.json();
    setBlogList(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);

    const response = await fetch(url + "/blogs/delete/" + id, {
      method: "DELETE",
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User deleted successfully",
      });
    }
  };

  const displayBlog = () => {
    if (loading) {
      return (
        <div>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      );
    } else {
      return blogList.map(
        ({ _id, title, description, category, data, image, createdAt,createdBy }) => (
          <div className="col-md-4 mt-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              {/* <img
                src={url + "/" + file}
                className="img-fluid"
              /> */}
              <img
                src="https://cdn.dribbble.com/users/1983106/screenshots/6241899/10_4x.jpg?compress=1&resize=400x300"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            {/* <img src= class="card-img-top" alt="" /> */}
            <div class="card-body">
              <div className="t1 w-25 text-center mt-2">
                <h6>
              <NavLink className="category" to=""> {category} Category</NavLink>
              </h6>
              </div>
              <div className=" text-muted mt-2">By &nbsp;
              <NavLink className="text-muted author" to="">{createdBy}Author Name </NavLink>
              
              </div>
              <h4 className="title mt-3">{title}Title </h4>
              <div className="date">
              <i class="fa-solid fa-calendar-days"></i>&nbsp;{(createdAt, 'yyyy/mm/dd')}
              

              </div>
            </div>
          </div>
          </div>
        )
      );
    }
  };

  return (
    <div>
      <section>
        <div>
          <h3 className="text-center mt-4">Latest posts</h3>
        </div>
      </section>
      <section>
        <div className="container">
          {/* <img className="img-fluid" src={File} alt="" /> */}

          <div className="row mt-3 mb-5">{displayBlog()}</div>
        </div>
      </section>
    </div>
  );
};

export default BlogManager;
