import React, { useEffect, useState } from 'react'
import productService from "../service/produce.service"
import { Link } from 'react-router-dom';

const Admin = () => {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  //Get List of products
  const init = () => {
    productService
      .getAllUser()
      .then((res) => {
          setUserList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="container mt-4 ">
        <div className="col">
          <div className="col-md-12">
            <div className="card">
            <div className="card-header fs-3 text-center">
                   All User List
            </div>
            <table className="table">
  <thead>

      <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    userList.map((u,num)=>(
    <tr>
      <th>{num+1}</th>
      <td>{u.username}</td>
      <td>{u.password}</td>
      <td>{u.email}</td>
      <td>{u.phone}</td>
      <td>
        {/* <Link  to={'editProduct/'+p.id} className="btn bt-sm btn-primary">Edit</Link> */}
        {/* <button  onClick={() => deleteProduct(p.id)} className="btn bt-sm btn-danger ms-2 p2-2">Delete</button> */}
        <Link to={'/viewattendance/'+u.username} className="btn bt-sm btn-primary ms-2">View Attendance</Link>
      </td>
    </tr>
        ))
      }
  </tbody>
</table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Admin
