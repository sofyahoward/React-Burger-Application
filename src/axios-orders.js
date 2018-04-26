import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-aecf3.firebaseio.com/"
});

export default instance;