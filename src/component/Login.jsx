import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import productService from "../service/produce.service"


const Login = () => {

    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
      const navigate = useNavigate();
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

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
      };

    const checkLogin = (e) => {
        console.log(user);
        const { username, password } = user;

     for (const user1 of userList) {
        if ('admin' === username && 'admin' === password) {
            navigate("/admin/"+username);
            break;
        }
        if (user1.username === username && user1.password === password) {
            navigate("/home/"+username);
            break;
        }
    }


      };    


  return (
    <>
      <div className="container mt-4 ">
        <div className="col">
          <div className="col-md-12">
            <div className="card">
          

              <div className="card-body"></div>
              <form  onSubmit={(e) => checkLogin(e)} > 
                      <div className="mb-3">
                        <label>Enter Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
    
                      <div className="mb-3">
                        <label>Enter Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      {/* <button  onClick={() => deleteProduct()} className="btn bt-sm btn-danger ms-2 p2-2">Check Login</button> */}
                      <button className="btn bt-sm btn-primary w-10 ms-2">Login</button>
                      <Link to={'registerUser/'} className="btn bt-sm btn-success ms-2">Register</Link>
                    </form>
              </div>
              </div>
              </div>
              </div>

{/*
              <table className="table">
  <thead>

      <tr>
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  
  <tbody>
  {
    userList.map((p,num)=>(
    <tr>
      <th>{num+1}</th>
      <th>{p.email}</th>
      <td>{p.password}</td>
      <td>{p.phone}</td>
      <td>{p.username}</td>
    </tr>
        ))
      }
  </tbody>
</table>*/}
    </>
  )
}

export default Login;
