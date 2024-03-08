import React, { useState } from 'react'
import productService from "../service/produce.service"
import { useNavigate } from 'react-router-dom';


const RegisterUser = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
      });
      const [msg, setMsg] = useState('')

      const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
      };

      const navigate = useNavigate();


      const UserRegsiter = (e) => {
        e.preventDefault();
    
        productService
          .saveNewUser(user)
          .then((res) => {

            console.log("User Added Sucessfully");
            setMsg("User Added Sucessfully");
            setUser({
                username: "",
                password: "",
                email: "",
                phone: "",
            });
            navigate("/");

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
                <div className="card-header fs-3 text-center">Register User</div>
                   {
                   msg 
                   && 
                   <p className="fs-4 text-center text-success">{msg}</p>} 
    
                  <div className="card-body"></div>
                  <form onSubmit={(e) => UserRegsiter(e)}>
                          <div className="mb-3">
                            <label>Enter Username</label>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              onChange={(e) => handleChange(e)}
                              value={user.username}
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
                              value={user.password}
                              required
                            />
                          </div>
                          <div className="mb-3">
                        <label>Enter Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                          value={user.email}
                          required
                        />
                      </div>
    
                      <div className="mb-3">
                        <label>Enter Contact</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                          value={user.phone}
                          required
                        />
                      </div>

                          <button className="btn btn-primary col-md-12">Register</button>
                          {/* <Link  to={'RegisterUser/'} className="btn bt-sm btn-success">Edit</Link> */}
                        </form>
                  </div>
                  </div>
                  </div>
                  </div>
        </>
      )
}

export default RegisterUser
