import React from "react";
import { AllItemsType, ItemsType } from "../../../hooks/order/useFetchItems";
import Item from "./Item";

type ItemListProps = {
  items: AllItemsType;
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="px-[25px] py-[18px] bg-purple-600">
      {items.map((item: ItemsType) => {
        return <Item key={item.id} name={item.name} price={item.price} materialType={item.materialType} event={item.event} id={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
