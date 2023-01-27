import axios from "axios";
const query = "http://127.0.0.1:8000/finalResults";


export default {
  getAll: function() {
    return axios.get(`${query}`);
  }
};
