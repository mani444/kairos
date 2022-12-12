import axios from "axios";
import { requestHandler } from "./Interceptors";

export const getAxiosInstance = (
  config = {
    headers: { contentType: "application/json" },
  }
) => {
  const instance = axios.create({
    baseURL:
      process.env.baseURL ||
      "https://m.kairossolutions.co/api/mpartinfo/dashBoard",

    headers: {
      "Content-Type": config.headers.contentType || "application/json",
    },
    // withCredentials: true,
  });

  instance.interceptors.request.use(requestHandler);
  // instance.interceptors.response.use(
  //   // responseIntercept, errorResponseHandler);
  //   (response) => {
  //     console.log("response", response);
  //     return response;
  //   },
  //   async (error) => {
  //     const prevRequest = error?.config;
  //     console.log("error?.config", prevRequest);

  //     // const refresh = useRefreshToken();
  //     console.log(error);

  //     if (error?.response?.status === 401) return Promise.reject(error);
  //     // && !prevRequest?.sent
  //     if (error?.response?.status === 403) {
  //       // prevRequest.sent = true;
  //       try {
  //         const response = await instance.get("/api/refresh");
  //         console.log(
  //           "response.data.token",
  //           response.data.token,
  //           response.data.email
  //         );
  //         // await authenticateUser(response.data.token, response.data.email);
  //         // const newAccessToken = await refresh();

  //         prevRequest.headers[
  //           "Authorization"
  //         ] = `Bearer ${response.data.token}`;
  //         console.log("prevRequest", prevRequest);
  //         // console.log("instance", instance.(error?.config);

  //         // return prevRequest;
  //         document.cookie = `token=${response.data.token}`;

  //         return instance(prevRequest);
  //       } catch (error) {
  //         return Promise.reject(error);
  //       }
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};

export default getAxiosInstance();
