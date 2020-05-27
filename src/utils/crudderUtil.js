import axios from "axios";
export const crudder = (base) => (resource) => {
  const URL = `${base}/${resource}`;
  return {
    get: (params = {}) => {
      return axios({
        method: "get",
        url: URL,
        params,
      });
    },
  };
};
