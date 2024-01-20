import MobileOrderLayout from "@/components/layout/MobileOrderLayout";
import React, { useEffect } from "react";
import { useFetchAllItems } from "../../../hooks/order/useFetchItems";
import ItemList from "@/components/order/ItemList";
import { useRouter } from "next/router";

const OrderPage = () => {
  const router = useRouter();
  const { loadAllItems, isItemsLoading, error, response } = useFetchAllItems();

  useEffect(() => {
    loadAllItems();
  }, []);

  // 로딩 중일 경우
  if (isItemsLoading) {
    return (
      <MobileOrderLayout>
        <div className="flex flex-col justify-center items-center h-full">
          <p>목록을</p>
          <p>불러오고 있습니다.</p>
        </div>
      </MobileOrderLayout>
    );
  }

  // 타임아웃 에러 발생했을 경우
  if (error && error.code === "ECONNABORTED") {
    alert("요청 시간 초과로 홈페이지로 이동합니다.");
    router.push("/");
  }

  return (
    <MobileOrderLayout>
      <div className="h-full overflow-auto">{response && <ItemList items={response} />}</div>
    </MobileOrderLayout>
  );
};

export default OrderPage;
