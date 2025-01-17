import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { pxToRem } from "@/utils/remPxConverter";
import { LargeNumberLike } from "crypto";


interface IAvatar { 
  widthX: number;
  heightY: number;
}
const AvatarComp : React.FC<IAvatar> = ({widthX,heightY}) => {
  return (
    <>
        <Avatar
          alt="Avatar Profile"
          src="/images/profile.png"
          sx={{ width: pxToRem(widthX), height: pxToRem(heightY), objectFit: "contain" }}
        />
    </>
  );
};

export default AvatarComp;
