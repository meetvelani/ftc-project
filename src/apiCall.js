import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";


// *************************************************** demo  ****************************************************************

export async function demo() {
  return request({ url: api.demo, method: 'get'})
}

