import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";


const BlogManager = () => {

  const url = app_config.backend_url;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getDataFromBackend = async () => { 

    
    const response = await fetch(url + "/blogs/getall");
    
    console.log(response.status);
    const data = await response.json();
  }

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
  }

  const displayUser = () => {
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
      return userArray.map(({ _id, title, description, category, data, image}) => (
        <div className="col-md-4 mt-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={url + "/" + image}
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
              <h5 class="card-title">{title}</h5>
              <h6 class="card-title">{category}</h6>
              <p class="card-text">{description}</p>

              <NavLink to="" class="btn btn-primary">
                View
              </NavLink>
            </div>
          </div>
        </div>
      ));
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

          <div className="row mt-3 mb-5">{displayUser()}</div>
        </div>
      </section>
    </div>
  );
};

export default BlogManager;