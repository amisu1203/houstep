import { useRouter } from "next/router";
import { useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { AxiosError } from "axios";

// 상태관리로 리스폰스 타입 적어놓은거 옮기기
export type ItemsType = {
  name: string;
  price: number;
  event: number;
  id: string;
  materialType: number;
};

export type AllItemsType = ItemsType[];

// 전체 상품 조회
export const useFetchAllItems = () => {
  const [isItemsLoading, setIsItemsLoading] = useState(false);
  const [response, setResponse] = useState<AllItemsType | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const router = useRouter();

  const loadAllItems = async () => {
    setIsItemsLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.get("/items");
      setResponse(res.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      console.error("전체 상품 조회에 실패했습니다.", err);
      setError(axiosError);
    } finally {
      setIsItemsLoading(false);
    }
  };
  return { loadAllItems, isItemsLoading, error, response };
};
