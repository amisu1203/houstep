import { create } from "zustand";
import { OrderStore } from "./types/order.types";

const useOrderStore = create<OrderStore>((set) => ({
  totalQuantity: 0,
  totalPrice: 0,
  setTotalQuantity: (itemQuantity: number) => set((state) => ({ totalQuantity: state.totalQuantity + itemQuantity })),
  setTotalPrice: (itemPrice: number) => set((state) => ({ totalPrice: state.totalPrice + itemPrice })),
  setClearOrder: () => set(() => ({ totalPrice: 0, totalQuantity: 0 })),
}));

export default useOrderStore;
