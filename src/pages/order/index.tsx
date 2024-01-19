import MobileOrderLayout from "@/components/layout/MobileOrderLayout";
import Header from "@/components/shared/Header";
import React, { useEffect } from "react";
import { ItemsType, useFetchAllItems } from "../../../hooks/order/useFetchItems";
import Image from "next/image";
import Item from "@/components/order/Item";
import ItemList from "@/components/order/ItemList";

const OrderPage = () => {
  const { loadAllItems, isItemsLoading, error, response } = useFetchAllItems();
  useEffect(() => {
    loadAllItems();
  }, []);

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  // 로딩 중일 경우
  if (isItemsLoading) {
    return (
      <MobileOrderLayout>
        <div className="flex flex-col justify-center items-center h-full">
          {/* <Image src={"/gif/loadingIcon.gif"} width={50} height={50} alt="로딩 중" /> */}
          <p>목록을</p>
          <p>불러오고 있습니다.</p>
        </div>
      </MobileOrderLayout>
    );
  }

  return (
    <MobileOrderLayout>
      <div className="h-full overflow-auto">{response && <ItemList items={response} />}</div>
    </MobileOrderLayout>
  );
};

export default OrderPage;
