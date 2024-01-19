import React from "react";
import { ItemsType } from "../../../hooks/order/useFetchItems";
import { getOrganizedPrice } from "../../../utils/priceUtil";

type ItemProps = ItemsType;

const Item: React.FC<ItemProps> = ({ name, price, event, id, materialType }) => {
  return (
    <article className="border py-[9px] px-3 bg-slate-500 gap-[15px] border-[#0000004D] rounded-[10px] flex">
      {/* 이미지 사용시 image 태그를 사용하지만 소스가 없으므로 div 태그 사용했습니다. */}
      <div className="bg-[#D9D9D9] w-[62px] shrink-0 h-[62px]">이미지</div>
      <div className="bg-pink-300 w-full flex-col flex justify-between">
        <div className="flex gap-2">
          <h2>{name}</h2>
          <p>이벤트 유무</p>
        </div>
        <div className="flex justify-between">
          <p>0</p>
          <p>{getOrganizedPrice(price)}원</p>
        </div>
      </div>
    </article>
  );
};

export default Item;
