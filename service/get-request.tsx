import { API_ENDPOINTS } from "@/constants/ApiEndpoints";
import axiosInstance from "./axios";
import { Pipeline } from "@/types/pipeline";

// Dummy
export const getSample = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.sample);
    return res?.data;
  } catch (error) {
    console.log("Error fetching location:", error);
    throw error;
  }
};


export const getconfig = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getconfig);
    return res?.data;
  } catch (error) {
    console.log("Error fetching config:", error);
    throw error;
  }
};

export const getCategory = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getcategory);
    return res?.data;
  } catch (error) {
    console.log("Error fetching config:", error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getCart);
    return res?.data;
  } catch (error) {
    console.log("Error fetching config:", error);
    throw error;
  }
};

export const getproducts = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getproducts);
    return res?.data;
  } catch (error) {
    console.log("Error fetching config:", error);
    throw error;
  }
};

