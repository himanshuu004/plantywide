import axios from "axios";

const baseURL = "https://planty-wide-backend-tanishks-projects.vercel.app";

interface PlantsDetailsProps {
  id: string;
  count: number;
}

export const addToCart = async (id: string, count: number) => {
  try {
    const item = { id, count };
    const response = await axios.post(`${baseURL}/addtocart`, item);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const getCart = async (): Promise<PlantsDetailsProps[]> => {
  try {
    const response = await axios.get(`${baseURL}/getcart`);
    const cartItems: PlantsDetailsProps[] = response.data.map((item: any) => ({
      id: item.id,
      count: item.count,
    }));
    return cartItems;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
    } else {
      console.error("Error:", error);
    }
    throw error;
  }
};

export const deleteCart = async () => {
  try {
    const response = await axios.delete(`${baseURL}/deletecart`);
    return response.data;
  } catch (error) {
    console.error("Error deleting cart:", error);
    throw error;
  }
};

export const deleteCartItem = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/deletecart/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting cart item with id ${id}:`, error);
    throw error;
  }
};

export const incrementCart = async (id: string) => {
  try {
    const response = await axios.put(`${baseURL}/incrementcart/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error incrementing cart item with id ${id}:`, error);
    throw error;
  }
};

export const decrementCart = async (id: string) => {
  try {
    const response = await axios.put(`${baseURL}/decrementcart/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error decrementing cart item with id ${id}:`, error);
    throw error;
  }
};
