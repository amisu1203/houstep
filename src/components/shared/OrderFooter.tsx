import React from "react";

const OrderFooter = () => {
  return (
    // todo: h-170 고정한거 없애기
    <footer className="border border-black w-full h-[170px] max-w-[350px] pl-[22px] fixed bottom-0 pr-[27px] pt-[23px] pb-[27px]">
      <p>총 수량 : </p>
      <p>총 가격 : </p>
      <button>주문하기</button>
    </footer>
  );
};

export default OrderFooter;
