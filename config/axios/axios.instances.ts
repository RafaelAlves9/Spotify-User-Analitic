import { getLocalStorageProperty } from "../../src/utils/getLocalStorageProperty";
import { AxiosBuilder } from "./axios.builder";

const token = getLocalStorageProperty("application", "token");
const baseUrl = "https://api.spotify.com/v1/"; //api do backend

const instances = {
  public: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .toDomain()
    .initInstance(),
  privateFile: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "multipart/form-data",
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

instances.private.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instances.private.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export { instances };