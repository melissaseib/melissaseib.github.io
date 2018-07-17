import _ from "lodash";
import { host, apiHost } from "./host";

//takes options and a bool. Bool checks for which token will be sent back
export const processOptions = (options, bool) => {
  let token = `${localStorage.getItem("token") ||
    sessionStorage.getItem("token")}`;
  const fetchDefaultOptions = {
    headers: new Headers({
      "Content-Type": "application/json",
      "X-ACCESS-TOKEN": token,
      "X-AUTH-TOKEN": token,
      Authorization: ` Bearer ${token}`,
      "cache-control": "no-cache"
    })
  };
  const newOptions = _.defaults(options, fetchDefaultOptions);
  newOptions.body = newOptions.body && JSON.stringify(newOptions.body);
  return newOptions;
};

export const fileFetch = (url, options) =>
  fetch(host + url, {
    /* Need to use unaltered fetch because not JSON*/
    headers: new Headers({
      Authorization: ` Bearer ${localStorage.getItem("token") ||
        sessionStorage.getItem("token")}`
    }),
    method: options.method || "",
    body: options.data || ""
  }).then(res =>
    res.json().then(json => {
      if (res.status >= 400) {
        throw json;
      } else {
        return json;
      }
    })
  );

//
export const jsonFetch = (url, options, bool) => {
  //set path based on presence of bool
  return fetch("apiHost + url", processOptions(options, bool)).then(res =>
    res.json().then(json => {
      if (res.status >= 400) {
        throw json;
      } else {
        return json;
      }
    })
  );
};

// console.log("why am I here at the end of the fetch");
// return promise;
