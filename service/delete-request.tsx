import { API_ENDPOINTS } from "@/constants/ApiEndpoints";
import axiosInstance from "./axios";

// // Delete Category
// export const deleteAAMainCategory = async (categoryId: string) => {
//   try {
//     const res = await axiosInstance.delete(
//       `${API_ENDPOINTS.deleteAAMainCategory}?id=${categoryId}`
//     );
//     return res?.data;
//   } catch (error) {
//     console.log("Error fetching location:", error);
//     throw error;
//   }
// };

export const deleteCartItemById = async (id: string) => {
  try {
    const res = await axiosInstance.delete(
      `${API_ENDPOINTS.addCart}/${id}`
    );
    return res?.data;
  } catch (error) {
    console.log("Error fetching location:", error);
    throw error;
  }
};
