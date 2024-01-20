import React, { useState } from "react";
import { ItemsType } from "../../../hooks/order/useFetchItems";
import { getOrganizedPrice } from "../../../utils/priceUtil";
import useOrderStore from "../../../stores/order/orderStore";

type ItemProps = ItemsType;

const Item: React.FC<ItemProps> = ({ name, price, event }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const { setTotalQuantity, setTotalPrice } = useOrderStore();

  // 상품 최대 추가 가능 개수
  const MAX_QUANTITY = 999;

  // 상품 추가 핸들러
  const handleAddToCart = () => {
    // 최대 추가 개수 초과 시 추가 불가능
    if (itemQuantity === MAX_QUANTITY) return;

    setTotalQuantity(1);
    setTotalPrice(price);
    setItemQuantity(itemQuantity + 1);
  };

  // 상품 제거 핸들러
  const handleRemoveFromCart = () => {
    if (itemQuantity === 0) return;
    setTotalQuantity(-1);
    setTotalPrice(-price);
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <article className={`${itemQuantity !== 0 && "bg-[#F75A2F1A]"} border py-[9px] px-3 gap-[15px] border-[#0000004D] rounded-[15px] flex`}>
      {/* 이미지 사용시 image 태그를 사용하지만 소스가 없으므로 div 태그 사용했습니다. */}
      <div className="bg-[#D9D9D9] w-[62px] shrink-0 h-[62px]"></div>
      <div className="w-full flex-col flex justify-between">
        <div className="flex gap-2">
          <h2>{name}</h2>
          {event === 1 && <p className="bg-[#F75A2F] text-main-white rounded-[10px] px-[10px] py-[2px] text-[13px]">이벤트</p>}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[5px]">
            <button onClick={handleRemoveFromCart}>-</button>
            <p>{itemQuantity}</p>
            <button onClick={handleAddToCart} className="w-[27px] text-left">
              +
            </button>
          </div>
          <p>{getOrganizedPrice(price)}원</p>
        </div>
      </div>
    </article>
  );
};

export default Item;
