import axios from "axios";                  //Axios allows you to communicate with the APIs in your React project


//base URL to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;