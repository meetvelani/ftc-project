import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

// sign up
export const signup = async (data) => {
  return axios.post(`${domainName}${api.signup}`, data);
};

// sign in
export const signin = async(data)=>{
  return axios.post(`${domainName}${api.signin}`,data)
}