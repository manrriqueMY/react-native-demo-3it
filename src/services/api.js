import axios from "axios";
import { BASE_URL, PASSWORD, USER } from "../../static";

const auth = {
  username: USER,
  password: PASSWORD,
};
const token = `${USER}:${PASSWORD}`;
const encodedToken = Buffer.from(token).toString("base64");

const config = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Basic " + encodedToken,
  },
  auth,
};

const results = (data = null) => {
  if (data) {
    return {
      status: true,
      data,
      message: "",
    };
  } else {
    return {
      status: false,
      message: "Error en conexión",
      data: [],
    };
  }
};

/**
 *
 * @param {Object} data
 * @param {String} data.path
 * @param {Object} data.params
 */
export const get = async ({ path, params = {} }) => {
  const data = await axios({
    data: { ...params },
    method: "GET",
    url: BASE_URL + path,
    headers: {
      ...config.headers,
    },
  }).catch((error) => console.log(error));
  return results(data?.data);
};

/**
 *
 * @param {Object} data
 * @param {String} data.path
 * @param {Object} data.params
 */
export const post = async ({ path, params = {} }) => {
  const data = await axios({
    auth,
    data: { ...params },
    method: "POST",
    url: BASE_URL + path,
    headers: {
      ...config.headers,
    },
  }).catch((error) => console.log(error));
  return results(data?.data);
};
