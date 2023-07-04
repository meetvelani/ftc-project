import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

// sign up
export const signup = async (data) => {
  return axios.post(`${domainName}${api.signup}`, data);
};

// sign in
export const signin = async (data) => {
  return axios.post(`${domainName}${api.signin}`, data);
};

// post create
export const createPost = async (data) => {
  return request({
    url: `${domainName}${api.createPost}`,
    method: "post",
    data,
  });
};

// get all posts
export const getAllPosts = async (page) => {
  return request({
    url: `${domainName}${api.allPosts}${page}`,
    method: "get",
  });
};
