import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productService from "../service/produce.service";

const Home2 = () => {
  const [date, setDate] = useState('');
  const [time2, setTime2] = useState('');

  const [userAtt, setUserAtt] = useState({
    id: '',
    date: "",
    time1: "",
    time2: "",
    username: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getLastUserAtt()
      .then((res) => {
        setUserAtt(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserAtt({ ...userAtt, [e.target.name]: value });
  };

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      return { date: formattedDate, time2: formattedTime };
    };

    const { date, time2 } = getCurrentDateTime();
    setDate(date);
    setTime2(time2);
  }, []);

  const updateTime2 = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setUserAtt((prevUserAtt) => ({ ...prevUserAtt, time2: formattedTime }));
  };

  const ProductUpdate = (e) => {
    e.preventDefault();
    updateTime2();

    productService
      .editProduct(userAtt)
      .then((res) => {
        console.log("Product Update Successfully" + userAtt.time2);
        navigate("/home/" + userAtt.username);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mt-4 ">
        <div className="col">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body"></div>
              <form onSubmit={(e) => ProductUpdate(e)}>
                <div className="mb-3">
                  <input
                    type="hidden"
                    value={userAtt.id}
                    name="id"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="hidden"
                    value={userAtt.time1}
                    name="time1"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className='form-control'>User</label>
                  <input
                    type="text"
                    name="username"
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                    value={userAtt.username}
                  />
                  <label className='form-control'>Date</label>
                  <input
                    type="text"
                    name="date"
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                    value={userAtt.date}
                  />
                  <div>
                    <label className='form-control'>Time</label>
                    <input
                      type="text"
                      name="time2"
                      className='form-control'
                      onChange={(e) => handleChange(e)}
                      value={userAtt.time1}
                    />
                  </div>
                </div>
                <button className="btn btn-primary col-md-12">Check Out</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/viewattendance/' + userAtt.username} className="btn bt-sm btn-success ms-2">View Attendance</Link>
    </div>
  );
}

export default Home2;
