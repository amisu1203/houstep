import React, { useEffect, useState } from "react";
import useOrderStore from "../../../stores/order/orderStore";
import { getOrganizedPrice } from "../../../utils/priceUtil";

const OrderFooter = () => {
  const { totalQuantity, totalPrice } = useOrderStore();
  const [isAvailable, setAvailable] = useState(false);
  const [orderBtnTxt, setOrderBtnTxt] = useState("주문하기");

  // 주문하기 클릭 핸들러
  const handleClickOrder = () => {
    setOrderBtnTxt("로딩 중...");
    setAvailable(false);
  };

  // 상품 수량이 0 일때 주문 비활성화
  useEffect(() => {
    if (totalQuantity === 0) {
      setAvailable(false);
    } else setAvailable(true);
  }, [totalQuantity]);

  return (
    <footer className="bg-main-white rounded-b-none rounded-[20px] flex flex-col items-end shadow shadow-[#00000040] w-full h-[170px] sm:max-w-[350px] pl-[22px] fixed bottom-0 pr-[27px] pt-[23px] pb-[27px]">
      <p>총 수량 : {getOrganizedPrice(totalQuantity)}개</p>
      <p>총 가격 : {getOrganizedPrice(totalPrice)}원</p>
      <button
        onClick={handleClickOrder}
        disabled={!isAvailable}
        className={`mt-[18px] h-[49px] w-full text-[18px] text-main-white ${isAvailable ? "bg-main-black" : "bg-[#C1C1C1]"}`}
      >
        {orderBtnTxt}
      </button>
    </footer>
  );
};

export default OrderFooter;
