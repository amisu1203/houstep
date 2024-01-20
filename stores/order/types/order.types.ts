export type OrderStore = {
  totalQuantity: number;
  totalPrice: number;
  setTotalQuantity: (data: number) => void;
  setTotalPrice: (data: number) => void;
  setClearOrder: () => void;
};
