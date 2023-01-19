import axios from "axios";

const key = "AIzaSyDFp3AclubSyK__QU-l_yWd_9naunqvG2o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: key,
  },
});
