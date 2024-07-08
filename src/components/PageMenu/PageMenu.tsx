import React from "react";
import { MenuItem } from "./components/MenuItem";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";

import "./PageMenu.css";
import { DEFAULT_PAGE_MENU_ITEMS } from "./utils/constants";
export type IPageMenuProps = {};

type IMenuItem = {
  label: string;
  checked: boolean;
};

const PageMenu: React.FC<IPageMenuProps> = ({}) => {
  const [isAllSelected, setIsAllSelected] = React.useState<boolean>(false);
  const [menuItems, setMenuItems] = React.useState<IMenuItem[]>(
    DEFAULT_PAGE_MENU_ITEMS
  );

  const toggleCheckbox = (idx: number, checked: boolean) => {
    setMenuItems((prev) =>
      prev.map((item, index) => (index === idx ? { ...item, checked } : item))
    );
  };
  const toggleAll = (checked: boolean) => {
    setIsAllSelected(checked);
    setMenuItems((prev) => prev.map((item) => ({ ...item, checked })));
  };

  return (
    <div className="w-[300px] lg:w-[370px] py-[10px] ellty_shadow shadow-sm m-auto px-4 rounded-lg">
      <MenuItem
        label="All Pages"
        checked={isAllSelected}
        onChange={(prev) => {
          toggleAll(prev.target.checked);
        }}
      />
      <Divider />
      {menuItems.map((menuItem, index) => (
        <MenuItem
          key={`menu-item-${index}`}
          label={menuItem.label}
          checked={menuItem.checked}
          alt={menuItem.label}
          onChange={(e) => toggleCheckbox(index, e.target.checked)}
        />
      ))}
      <Divider />
      <Button
        label="Done"
        onClick={() => {
          alert("Succesfully submitted");
          toggleAll(false);
        }}
      />
    </div>
  );
};

export default PageMenu;
