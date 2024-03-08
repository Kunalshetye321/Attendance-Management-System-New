import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productService from "../service/produce.service"


const Viewattendance = () => {

  const [userAttList, setUserAttList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const {username} = useParams();
  console.log(username);

  //Get List of products
  const init = () => {
    productService
      .findAllByUsername(username)
      .then((res) => {
        setUserAttList(res.data);
        console.log(res)
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
                   All {username} Attendance
            </div>
            <table className="table">
  <thead>

      <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Date</th>
      <th scope="col">Time1</th>
      <th scope="col">Time2</th>
    </tr>
  </thead>
  <tbody>
  {
    userAttList.map((u,num)=>(
    <tr>
      <th>{num+1}</th>
      <td>{u.username}</td>
      <td>{u.date}</td>
      <td>{u.time1}</td>
      <td>{u.time2}</td>
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

export default Viewattendance
