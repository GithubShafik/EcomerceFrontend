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

export const getProductById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`${API_ENDPOINTS.getproducts}${id}`);
    return res?.data;
  } catch (error) {
    console.log("Error fetching product:", error);
    throw error;
  }
};

export const getMyOrders = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getMyOrders);
    return res?.data;
  } catch (error) {
    console.log("Error fetching my orders:", error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getAllOrders);
    return res?.data;
  } catch (error) {
    console.log("Error fetching all orders:", error);
    throw error;
  }
};

export const getOrderStatuses = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.getOrderStatuses);
    return res?.data;
  } catch (error) {
    console.log("Error fetching order statuses:", error);
    throw error;
  }
};

