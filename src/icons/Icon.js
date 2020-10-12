import React from "react";
import { IconConfig } from "./iconsConfig";

export const Icon = ({ name, fill }) => {
  const IConfig = IconConfig[name];
  return <IConfig fill={fill} />;
};
