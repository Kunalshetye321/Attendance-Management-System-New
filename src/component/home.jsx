import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import productService from "../service/produce.service";

const Home = () => {
  const [date, setDate] = useState('');
  const [time1, setTime1] = useState('');
  
  const [att, setAtt] = useState({
    username: "",
    date:"",
    time1: "",
    time2: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setAtt({ ...att, [e.target.name]: value });
  };

//   const saveCheckIn = (e) => {
//     //e.preventDefault();

//     productService
//       .saveUserCheckIn(att)
//       .then((res) => {

//         console.log("User Attendance time1 Added Sucessfully");
//         // setUseratt({
//         //     username: "",
//         //     date:"",
//         //     time1: "",
//         //     time2: "",
//         // });
//         navigate("/home2");

//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };  

const UserRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveUserCheckIn(att)
      .then((res) => {

        // setAtt({
        //     username: "",
        //     date:"",
        //     time1: "",
        //     time2: "",
        // });
        navigate("/home2");

      })
      .catch((error) => {
        console.log(error);
      });
  };  

  const {username} = useParams(); 

  useEffect(() => {
    // Function to get current date and time
    const getCurrentDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      return { date: formattedDate, time1: formattedTime };
    };
  
    // Set the current date, time, and username in the att state
    setAtt((prevAtt) => ({
      ...prevAtt,
      ...getCurrentDateTime(),
      username: username, // assuming username is a variable in your component
    }));
  }, [username]); // Added username to the dependency array so that it updates when username changes
  

  return (
    <div>
      
        <div className="container mt-4 ">
        <div className="col">
          <div className="col-md-12">
            <div className="card">
          

              <div className="card-body"></div>
              <form onSubmit={(e) => UserRegsiter(e)}>
              <div className="mb-3">

                        <label className='form-control'>User</label>
                        <input
                          type="text"
                          name="username"
                          className='form-control'
                          value={att.username}
                          onChange={(e) => handleChange(e)}
                        //   disabled
                        />
                        <label className='form-control'>Date</label>
                        <input
                          type="text"
                          name="date"
                          className='form-control'
                          value={att.date}
                          onChange={(e) => handleChange(e)}
                        //   disabled
                        />
                        <label className='form-control'>Time</label>
                        <input
                          type="text"
                          name="time1"
                          className='form-control'
                          value={att.time1}
                          onChange={(e) => handleChange(e)}
                        //   disabled
                        />
                        {/* <label className='form-control'>Time</label>
                        <input
                          type="text"
                          name="time2"
                          className='form-control'
                          value={time1}
                          onChange={(e) => handleChange(e)}
                        //   disabled
                        /> */}
                        
                      </div>
                      <button className="btn btn-primary col-md-12">Check In</button>
                      </form>
              </div>
              </div>
              </div>
              </div>

              <Link to={'/viewattendance/'+username} className="btn bt-sm btn-success ms-2">View Attendance</Link>
    </div>
  );
};

export default Home;
