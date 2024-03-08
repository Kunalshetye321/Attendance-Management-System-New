import axios from "axios";

const API_URL = "http://localhost:8080"; 

class ProductService {

    saveNewUser(user) {
        //console.log("ReactJS Service")
        return axios.post(API_URL + "/addNewUser", user);
    }
    getAllUser() {
        // console.log("ReactJS Service")    
        return axios.get(API_URL + "/checklogin");
    }

    // saveUserCheckIn(att){
    //     console.log("ReactJS saveUserCheckIn Service")
    //     console.log(att)
    //     return axios.post(API_URL + "/storeAttendance", att);
    // }
    saveUserCheckIn(att) {
        return axios.post(API_URL + "/storeAttendance", att)
          .then(response => {
            console.log("Success:", response.data);
            return response.data;
          })
          .catch(error => {
            console.error("Error:", error);
            throw error;
          });
      }
      
      getLastUserAtt()
      {
        return axios.post(API_URL + "/lastAtt");
      }

      editProduct(userAtt) {
        return axios.post(API_URL + "/editProduct/" + userAtt.id, userAtt);
    }
 

    findAllByUsername(username)
    {
      return axios.post(API_URL + "/viewAttendance/" + username);
    }
}

export default new ProductService;
