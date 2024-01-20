import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ORDER_PAGE } from "../../../constants/routing";

const OrderErrorPage = () => {
  const router = useRouter();

  // 3초 뒤 주문 페이지로 이동
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push(ORDER_PAGE);
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="max-w-[350px] mx-auto sm:shadow h-screen flex flex-col justify-center items-center gap-3">
      <p className="whitespace-pre-line text-center">{`주문에 실패하였습니다.\n다시 시도해주세요.`}</p>
    </div>
  );
};

export default OrderErrorPage;
