import { API_ENDPOINTS } from "@/constants/ApiEndpoints";
import axiosInstance from "./axios";

export const updateFeatures = async (data: any): Promise<any> => {
  try {
    const res = await axiosInstance.put(API_ENDPOINTS.sample, data);
    return res?.data;
  } catch (error) {
    console.log("Error Updating Features:", error);
    throw error;
  }
};

export const updateCart = async (data: any): Promise<any> => {
  try {
    const res = await axiosInstance.put(API_ENDPOINTS.addCart, data);
    return res?.data;
  } catch (error) {
    console.log("Error Updating Features:", error);
    throw error;
  }
};
