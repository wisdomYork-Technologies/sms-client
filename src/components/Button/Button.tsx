import React from "react";
import { Button as ButtonBase } from "@chakra-ui/react";
import { ButtonProps } from "utils/interfaces";

export const Button = ({
  bgColor,
  color,
  border,
  height,
  width,
  label,
  onClick,
  alignSelf,
}: ButtonProps) => {
  return (
    <ButtonBase
      bg={bgColor || "#E2E8F0"}
      border={border || "transparent"}
      borderRadius="8px"
      color={color || "#080808"}
      fontSize="18px"
      fontWeight="600"
      height={height}
      width={width}
      onClick={onClick}
      alignSelf={alignSelf}
    >
      {label}
    </ButtonBase>
  );
};

export default Button;
