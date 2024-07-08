import React from "react";

export type IDividerProps = {};

const Divider: React.FC<IDividerProps> = ({}) => {
  return <div className="!h-[0.7px] bg-[#CDCDCD] my-[10px]" />;
};

export { Divider };
