import "whatwg-fetch";
import _ from "lodash";
import { jsonFetch } from "./fetch";

/* Leaderboard could be cached, but not right now*/
const api = {
  getUser() {
    return jsonFetch("/users", {
      method: "GET"
    });
  }
};
export default api;
