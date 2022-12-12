// import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
// import useAuth from "../hooks/useAuth";
// const { token } = useAuth();
// import axiosPrivate from "./Axios";
// import useRefreshToken from "../hooks/useRefreshToken";

export const requestHandler = (request) => {
  //   const token = LocalStorage.GetItem(TOKEN) || SessionStorage.GetItem(TOKEN);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNTE4ZDE5MzZjODAwYzA4YmIxMzQ3IiwiU3VidXNlcklkIjoiNjJkNTE4ZDE5MzZjODAwYzA4YmIxMzQ5IiwibmFtZSI6IkthaXJvcyBCdXNpbmVzcyBTb2x1dGlvbnMgUHR5IEx0ZCIsImJhc2U2NHRva2VuIjoiYTJGcGNtOXpaR1YyTVRwTFFHbHliM05RWVhOek9Uaz0iLCJ1c2VybmFtZSI6ImthaXJvc2RldjEiLCJhcGl1cmwiOiJodHRwczovL2Nsb3VkMi5rYWlyb3Nzb2x1dGlvbnMuY28vazIwMjIxdWF0Z2FsL2FwaS92MS8iLCJjb21wYW55IjoiMTBnYWwiLCJGaXJzdE5hbWUiOiJ1c21hbiIsIkxhc3ROYW1lIjoia2hhbGlkIiwiRW1haWwiOiJ1LmtoYWxpZDIyMkBnbWFpbC5jb20iLCJQaG9uZSI6Iis2MTggNjEwMiAyMTk4IiwiQ291bnRyeSI6IkFVU1RSQUxJQSIsIkFkZHJlc3MiOiJMMSwgNTMgQnVyc3dvb2QgUm9hZCIsIkNvbXBhbnlOYW1lIjoiYWFzIiwiRGF0ZSI6IjIwMjItMTAtMDVUMDg6MTc6NTcuOTQ2WiIsImlzTGljZW5zZWhvbGRlciI6ZmFsc2UsImlzQWRtaW4iOmZhbHNlLCJwbGFudCI6Ik9TQiIsIlBsYW50TmFtZSI6Ik9zYm9ybmUgUGFyayIsInNlY3VyaXR5IjpbeyJ1cmwiOiIvcG8vIn0seyJ1cmwiOiIvcG9hcHByb3ZhbCJ9LHsidXJsIjoiL3RpbWVlbnRyeSJ9LHsidXJsIjoiL2JhcSJ9LHsidXJsIjoiL3RpbWVhcHByb3ZhbCJ9LHsidXJsIjoiL29yZGVyZW50cnkifSx7InVybCI6Ii9yb3V0ZXBsYW5uZXJhZG1pbiJ9LHsidXJsIjoiL211bHRpbGV2ZWxhcHByb3ZhbC9yZXF1aXNpdGlvbiJ9LHsidXJsIjoiL3F1b3RlZW50cnkifSx7InVybCI6Ii9tdWx0aWxldmVsYXBwcm92YWwvYXBpbnZvaWNlIn0seyJ1cmwiOiIvbW9iaWxlb3JkZXJncHMifV0sInNlY3VyaXR5SnNvbiI6Ilt7XCJ1cmxcIjpcIi9wby9cIn0se1widXJsXCI6XCIvcG9hcHByb3ZhbFwifSx7XCJ1cmxcIjpcIi90aW1lZW50cnlcIn0se1widXJsXCI6XCIvYmFxXCJ9LHtcInVybFwiOlwiL3RpbWVhcHByb3ZhbFwifSx7XCJ1cmxcIjpcIi9vcmRlcmVudHJ5XCJ9LHtcInVybFwiOlwiL3JvdXRlcGxhbm5lcmFkbWluXCJ9LHtcInVybFwiOlwiL211bHRpbGV2ZWxhcHByb3ZhbC9yZXF1aXNpdGlvblwifSx7XCJ1cmxcIjpcIi9xdW90ZWVudHJ5XCJ9LHtcInVybFwiOlwiL211bHRpbGV2ZWxhcHByb3ZhbC9hcGludm9pY2VcIn0se1widXJsXCI6XCIvbW9iaWxlb3JkZXJncHNcIn1dIiwiR3JvdXBMaXN0IjoiX0tSb3V0ZVBsYW5-UHJvamVjdEltcG9ydH5fS1JlcUFwcHJ2fl9LT3JkZXJFbnRyeX5FZnhBZG1pbn5FZnhQb3dlckRldmVsb3Blcn5FZnhEZXZlbG9wZXJ-X1RpbWVBZG1pbiIsIkN1cnJlbnRSb2xlIjoiIn0sImlhdCI6MTY2NDk1Nzg3N30.-H0Kr068omnYc7FHEZtY5Su9w1TT6uNf1k7ZqKQp88s";

  if (token && request.headers)
    request.headers["Authorization"] = `Bearer ${token}`;

  return request;
};

export const successResponseHandler = (response) => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = async (error) => {
  // const refresh = useRefreshToken();

  const prevRequest = error?.config;
  console.log(prevRequest);
  if (error?.response?.status === 403 && !prevRequest?.sent) {
    // prevRequest.sent = true;
    // const newAccessToken = await refresh();
    // prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
    // return axiosPrivate(prevRequest);
  }
  return Promise.reject(error);
};

export const responseIntercept = (response) => {
  console.log("response", response);
  return response;
};
