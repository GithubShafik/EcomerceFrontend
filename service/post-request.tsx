import { API_ENDPOINTS } from "@/constants/ApiEndpoints";
import axiosInstance from "./axios";

export let IMG_URL = "https://blogimages-storage.s3.ap-south-1.amazonaws.com";

// Register user
export const RegisterUser = async (data: any): Promise<any> => {
  try {
    const url = API_ENDPOINTS.registeruser;
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error in getItemListBySubCategoryId:", error);
    throw error;
  }
};

// /login
export const LoginUser = async (data: any): Promise<any> => {
  try {
    const url = API_ENDPOINTS.login;
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// addCart
export const addCart = async (data: any): Promise<any> => {
  try {
    const url = API_ENDPOINTS.addCart;
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// /api/products

export const addProducts = async (data: any): Promise<any> => {
  try {
    const url = API_ENDPOINTS.getproducts;
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};



export const placeOeder = async (data: any): Promise<any> => {
  try {
    const url = API_ENDPOINTS.placeOeder;
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


