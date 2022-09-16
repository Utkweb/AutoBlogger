<<<<<<< HEAD
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";


const BlogManager = () => {
  const url = app_config.backend_url;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
=======
// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { Button } from "@mui/material";
// // import UpdateUser from "./UpdateUser";

// const BlogManager = () => {
//   const [userArray, setUserArray] = useState([]);
//   const [loading, setLoading] = useState(false);
>>>>>>> 1194fb37668c30dcaaf87568d3ba1a73c86eab76

//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [updateFormData, setUpdateFormData] = useState(null);

//   const getDataFromBackend = async () => {
//     setLoading(true);

<<<<<<< HEAD
    const response = await fetch(url + "/blogs/getall");
    console.log(response.status);
    const data = await response.json();
=======
//     const response = await fetch("http://localhost:5000/blog/getall");
//     const data = await response.json();
>>>>>>> 1194fb37668c30dcaaf87568d3ba1a73c86eab76

//     console.log(data);
//     setUserArray(data);
//     setLoading(false);
//   };

<<<<<<< HEAD
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);

    const response = await fetch(url + "/blogs/delete/" + id, {
      method: "Delete",
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User deleted successfully",
      });
=======
//   const deleteUser = async (id) => {
//     console.log(id);

//     const response = await fetch("http://localhost:5000/blog/delete/" + id, {
//       method: "Delete",
//     });
//     if (response.status === 200) {
//       Swal.fire({
//         icon: "success",
//         title: "success",
//         text: "User deleted successfully",
//       });
>>>>>>> 1194fb37668c30dcaaf87568d3ba1a73c86eab76

//       //get data from backend
//       getDataFromBackend();
//     }
//   };

<<<<<<< HEAD
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
=======
//   const updateUser = (user) => {
//     console.log(user);
//     setUpdateFormData(user);
//     setShowUpdateForm(true);
//   };
//   useEffect(() => {
//     getDataFromBackend();
//   }, []);

//   const displayUser = () => {
//     if (loading) {
//       return (
//         <div>
//           <button class="btn btn-primary" type="button" disabled>
//             <span
//               class="spinner-grow spinner-grow-sm"
//               role="status"
//               aria-hidden="true"
//             ></span>
//             <span class="visually-hidden">Loading...</span>
//           </button>
//           <button class="btn btn-primary" type="button" disabled>
//             <span
//               class="spinner-grow spinner-grow-sm"
//               role="status"
//               aria-hidden="true"
//             ></span>
//             Loading...
//           </button>
//         </div>
//       );
//     } else {
//       return userArray.map(({ _id, title,description,category,data }) => (
//         <div role="lisitem" className="blog-items">
//           <div className="blog-single-item">
//             <img src="" alt="Not Found" />
//             <div className="default-blog-content">
//               <div className="blog-post mb-2">
//                 <a href="/technology">technology</a>
//                 <div className="blog-author">
//                   <div className="blog-author-text">By</div>
//                   <a href="#" className="blog-author-link">Mary R edward</a>


//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       //   <tr key={_id}>

//       //     <td>{1}</td>
//       //     <td>{title}</td>
//       //     <td>{description}</td>
//       //     <td>{category}</td>
//       //     <td>{data}</td>
//       //     <td>
//       //       <Button
//       //         className="btn btn-primary"
//       //         onClick={(e) =>
//       //           updateUser({ _id, title,description,category,data })
//       //         }
//       //       >
//       //         {" "}
//       //         <i class="fas fa-pen-nib"></i>
//       //       </Button>
//       //     </td>
//       //     <td>
//       //       <Button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
//       //         <i class="fa fa-trash" aria-hidden="true"></i>
//       //       </Button>
//       //     </td>
//       //   </tr>
//       // ));
//     )}
//   };
//   return (
//     <div>
//       <section>
//         <div className="text-center blogheader">
//           <h1 className="heading">My Blog</h1>
//           {/* <p className=''>cmab mhjc gh kigiesiuvbu</p> */}
//         </div>
//       </section>
//       <section>
//         <div>
//           <h3 className="text-center mt-4">Latest posts</h3>
//         </div>
//       </section>
//       <section>
//         <div className="container">
//           {/* <img className="img-fluid" src={File} alt="" /> */}

//           <div className="row mt-3 mb-5">{displayUser()}</div>
//         </div>
//       </section>
     
//     </div>
//   );
// };

// export default BlogManager;
>>>>>>> 1194fb37668c30dcaaf87568d3ba1a73c86eab76
