import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

// sign up
export const signup = (data) => {
  return axios.post(`${domainName}${api.signup}`, data);
};

// sign in
export const signin = (data) => {
  return axios.post(`${domainName}${api.signin}`, data);
};

// post create
export const createPost = (data) => {
  return request({
    url: `${domainName}${api.createPost}`,
    method: "post",
    data,
  });
};

// get all posts
export const getAllPosts = ({ pageParam = 1 }) => {
  return request({
    url: `${domainName}${api.allPosts}${pageParam}`,
    method: "get",
  });
};
