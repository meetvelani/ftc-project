import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

// ********* demo  **********

export async function signup(data) {
  return axios.post({ url: `${domainName}${api.signup}`, body: data });
}
