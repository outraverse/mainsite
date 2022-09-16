import axios from "axios";

// axios ajax call
export function Ajax(val, callback = false) {
  if (typeof axios !== "undefined") {
    axios.post("/" + val.url, val.data)
    .then(response => {
      if (+response.status >= 400) {
        callback({
          errmsg: response.statusText,
          errno: -1,
          status: "danger"
        })
      }
      else {
        response.data = Cleanse(response.data);
        if (response.data === null) {
          console.warn({
            errmsg: "Nothing returned from the server",
            errno: -1
          });
        }
        if (callback) {
          callback(response.data);
        }
      }
    })
  }
}

/*** convert json from string format to object ***/
export function Cleanse(val) {
  if (typeof val === "string") {
    val = JSON.parse(val)
  }
  return val;
}

/*** return error message ***/
export function errShow(err) {
  if (typeof err.status === "undefined") {
    err.status = "danger";
  }
  return {
    message: err.message,
    status: err.status
  }
}

/*** compare returning error code with specified codes array ***/
export function rsltCompare(errno, code) {
  let flag = false;
  for (let i = 0; i < code.length; i++) {
    if (errno === code[i]) {
      flag = true;
      break;
    }
  }
  return flag;
}