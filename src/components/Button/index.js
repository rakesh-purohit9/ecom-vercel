import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder31: "rounded-radius31",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder49: "rounded-radius49",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder2: "rounded-radius2",
  CircleBorder24: "rounded-radius24",
  CircleBorder20: "rounded-radius20",
  CircleBorder30: "rounded-radius30",
};
const variants = {
  icbOutlineBlack9003f: "bg-bluegray_50 shadow-bs",
  icbFillIndigo600: "bg-indigo_600",
  icbFillBlue300: "bg-blue_300",
  icbOutlineBlack900: "border-2 border-black_900 border-solid",
  FillOrangeA200: "bg-orange_A200 text-gray_900",
  FillGray200: "bg-gray_200 text-gray_800",
  OutlineGray500: "border border-gray_500 border-solid text-bluegray_900",
  FillBluegray901: "bg-bluegray_901 text-gray_201",
  FillGray902: "bg-gray_902 text-gray_50",
};
const sizes = {
  smIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  mdIcn: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  lgIcn: "lg:p-[25px] xl:p-[29px] p-[33px] 3xl:p-[39px]",
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
  lg: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xl: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder31",
    "icbCircleBorder15",
    "icbCircleBorder49",
    "RoundedBorder10",
    "RoundedBorder2",
    "CircleBorder24",
    "CircleBorder20",
    "CircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineBlack9003f",
    "icbFillIndigo600",
    "icbFillBlue300",
    "icbOutlineBlack900",
    "FillOrangeA200",
    "FillGray200",
    "OutlineGray500",
    "FillBluegray901",
    "FillGray902",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder15",
  variant: "FillOrangeA200",
  size: "smIcn",
};

export { Button };
