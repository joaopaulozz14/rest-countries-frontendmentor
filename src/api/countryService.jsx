import apiClient from "./apiClient";

export const fetchCountries = async () => {
  const response = await apiClient.get("/all");
  console.log(response, "fdsa response ");
  
  return response.data;
};
