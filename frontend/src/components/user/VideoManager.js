import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import "./VideoManager.css";

const VideoManager = () => {
  const url = app_config.backend_url;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch(url + "/video/getall");
    console.log(response.status);
    const data = await response.json();

    console.log(data);
    setUserArray(data);
    setLoading(false);
  };


  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);

    const response = await fetch(url + "/video/delete/" + id, {
      method: "Delete",
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User deleted successfully",
      });

      //get data from backend
      getDataFromBackend();
    }
  };

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
      return userArray.map(({ _id, title, description, file, thumbnail }) => (
        <div className="col-md-4 mt-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={url + "/" + file}
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
              <p class="card-text">{description}</p>
              <button className="btn btn-primary">
              View
            </button>

            &nbsp;&nbsp;&nbsp;
              
              <button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
              Delete
            </button>
            </div>
          </div>
        </div>
        //     {/* <Button
        //       className="btn btn-primary"
        //       onClick={(e) =>
        //         updateUser({ _id, firstname, lastname, email, password })
        //       }
        //     >
        //       {" "}
        //       <i class="fas fa-pen-nib"></i>
        //     </Button> */}
        //   </td>
        //   <td>
        //     {/* <Button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
        //       <i class="fas fa-trash"></i>{" "}
        //     </Button> */}
        //   </td>
        // </tr>
      ));
    }
  };
  return (
    <div>
      <section>
        <div className="text-center blogheader">
          <h1 className="heading">My Video</h1>
          {/* <p className=''>cmab mhjc gh kigiesiuvbu</p> */}
        </div>
      </section>
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

export default VideoManager;