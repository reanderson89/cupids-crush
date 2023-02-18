import axios from "axios";
const rootUrl = "http://127.0.0.1:8000/";


export default {
  getAllTeams: function() {
    return axios.get(`${rootUrl}finalResults`);
  },
  getAllDivisionsAndEvents: function() {
    return axios.get(`${rootUrl}`);
  }
};
