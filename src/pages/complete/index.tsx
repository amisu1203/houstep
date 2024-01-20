import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useOrderStore from "../../../stores/order/orderStore";
import { ORDER_PAGE } from "../../../constants/routing";

const OrderCompletePage = () => {
  const router = useRouter();
  const { setClearOrder } = useOrderStore();

  // 3초 뒤 주문 페이지로 이동
  useEffect(() => {
    // 주문 정보 상태 초기화
    setClearOrder();
    const redirectTimer = setTimeout(() => {
      router.push(ORDER_PAGE);
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="max-w-[350px] mx-auto h-screen sm:shadow flex flex-col justify-center items-center gap-3">
      <Image src="/svg/check-filled.svg" alt="체크 아이콘" width="48" height="48" />
      <p>주문이 완료되었습니다.</p>
    </div>
  );
};

export default OrderCompletePage;
