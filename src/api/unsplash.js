import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7_4bT0jj7ImrpnnZ2aR-nkN7EEFF7g-eOK5I9Wqv96M"
  }
})
