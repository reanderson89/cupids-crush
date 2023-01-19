import axios from "axios";
const query = "http://127.0.0.1:8000/";


export default {
  getAll: function() {
    return axios.get(`${query}`);
  }
};
