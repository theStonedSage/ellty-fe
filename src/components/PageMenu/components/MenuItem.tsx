import React from "react";

interface IMenuItemProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}
const MenuItem: React.FC<IMenuItemProps> = ({ label, ...rest }) => {
  return (
    <div className="flex justify-between py-2">
      <label className="text-sm">{label}</label>
      <input {...rest} type="checkbox" />
    </div>
  );
};

export { MenuItem };
