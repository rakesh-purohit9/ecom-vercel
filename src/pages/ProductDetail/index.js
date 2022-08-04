import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  Stack,
  PagerIndicator,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/casestudy");
  }
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-merriweather mx-[auto] overflow-auto w-[100%]"
        compid="32:381"
        comptype="Column"
      >
        <Column
          className="items-center lg:pr-[107px] xl:pr-[122px] pr-[138px] 3xl:pr-[165px] w-[100%]"
          compid="24"
          comptype="Column"
        >
          <Row
            className="bg-gray_900_b2 items-center lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] shadow-bs w-[100%]"
            compid="37:16"
            comptype="Row"
          >
            <Img
              src="images/img_menu.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] w-[2%]"
              compid="37:20"
              comptype="Image"
              alt="menu"
            />
            <Img
              src="images/img_group2.png"
              className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[395px] xl:ml-[451px] ml-[508px] 3xl:ml-[609px] mt-[1px] w-[12%]"
              compid="37:27"
              comptype="Image"
              alt="GroupTwo"
            />
            <Img
              src="images/img_search.png"
              className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[325px] xl:ml-[371px] ml-[418px] 3xl:ml-[501px] lg:w-[24px] xl:w-[27px] w-[31px] 3xl:w-[37px]"
              compid="37:23"
              comptype="Image"
              alt="search"
            />
            <Img
              src="images/img_cart.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              compid="37:26"
              comptype="Image"
              alt="cart"
            />
          </Row>
          <Row
            className="3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] mt-[97px] w-[84%]"
            compid="20"
            comptype="Row"
          >
            <Column
              className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[21px] xl:p-[24px] p-[27px] 3xl:p-[32px] rounded-radius10 w-[50%]"
              compid="44:21"
              style={{ backgroundImage: "url('images/img_group4.png')" }}
              comptype="Column"
            >
              <Row
                className="items-center justify-between lg:mt-[266px] xl:mt-[304px] mt-[342px] 3xl:mt-[410px] w-[100%]"
                compid="11"
                comptype="Row"
              >
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rotate-[180deg] rounded-radius50 lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                  compid="32:517"
                  comptype="IconButton"
                  size="mdIcn"
                  variant="icbOutlineBlack9003f"
                >
                  <Img
                    src="images/img_vector.png"
                    className="flex items-center justify-center"
                    compid="32:517"
                    comptype="IconButton"
                    alt="Vector"
                  />
                </Button>
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                  compid="32:513"
                  comptype="IconButton"
                  size="mdIcn"
                  variant="icbOutlineBlack9003f"
                >
                  <Img
                    src="images/img_vector.png"
                    className="flex items-center justify-center"
                    compid="32:513"
                    comptype="IconButton"
                    alt="Vector One"
                  />
                </Button>
              </Row>
              <Img
                src="images/img_group3.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:mt-[252px] xl:mt-[289px] mt-[325px] 3xl:mt-[390px] w-[8%]"
                compid="39:8"
                comptype="Image"
                alt="GroupThree"
              />
            </Column>
            <Column
              className="3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] w-[42%]"
              compid="19"
              comptype="Column"
            >
              <Text
                className="font-bold font-merriweather lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px] text-gray_900 w-[auto]"
                compid="32:474"
                comptype="Text"
              >
                Sona Armless Chair
              </Text>
              <Text
                className="font-jacquesfrancois font-normal mt-[3px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]"
                compid="32:473"
                comptype="Text"
              >
                $400.00
              </Text>
              <Text
                className="font-bold font-interui mt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]"
                compid="41:1"
                comptype="Text"
              >
                <span className="text-gray_900 font-medium">Available</span>
                <span className="text-gray_900"> : </span>
                <span className="text-gray_900 font-normal not-italic">
                  In Stock
                </span>
              </Text>
              <Text
                className="font-interui font-normal leading-[normal] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[95%]"
                compid="40:2"
                comptype="Text"
              >
                Versatile elegance for dining room, office or living room. This
                seating solution offers great appeal. Bamboo chairs combine
                premium quality materials with unique high-style design, with
                the advanced product engineering and packaging reinforcement,
                each product is designed, manufactured and packaged with
                shipping in mind.
              </Text>
              <Row
                className="font-interui items-center lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[65%]"
                compid="13"
                comptype="Row"
              >
                <Column className="w-[71%]" compid="44:19" comptype="Column">
                  <Text
                    className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]"
                    compid="32:472"
                    comptype="Text"
                  >
                    COLOR
                  </Text>
                  <Img
                    src="images/img_menu_gray_800.png"
                    className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[39%]"
                    compid="44:13"
                    comptype="Image"
                    alt="menu One"
                  />
                </Column>
                <Column className="w-[29%]" compid="44:18" comptype="Column">
                  <Text
                    className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]"
                    compid="40:3"
                    comptype="Text"
                  >
                    SIZE
                  </Text>
                  <Row
                    className="items-center justify-between ml-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[99%]"
                    compid="44:17"
                    comptype="Row"
                  >
                    <Text
                      className="bg-gray_200 font-medium lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius2 text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_800 tracking-ls1 w-[24px]"
                      compid="44:14"
                      comptype="Text"
                    >
                      XL
                    </Text>
                    <Button
                      className="font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 w-[25%]"
                      compid="44:15"
                      comptype="Button"
                      shape="RoundedBorder2"
                      size="sm"
                    >
                      S
                    </Button>
                    <Button
                      className="font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 w-[25%]"
                      compid="44:16"
                      comptype="Button"
                      shape="RoundedBorder2"
                      size="sm"
                      variant="FillGray200"
                    >
                      M
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Row
                className="font-interui items-center justify-between mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[100%]"
                compid="41:14"
                comptype="Row"
              >
                <Text
                  className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]"
                  compid="32:467"
                  comptype="Text"
                >
                  QTY
                </Text>
                <Button
                  className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center w-[19%]"
                  compid="1"
                  comptype="Button"
                  shape="CircleBorder24"
                  size="md"
                  variant="OutlineGray500"
                >
                  - 01 +
                </Button>
                <Button
                  className="flex items-center justify-center text-center w-[63%]"
                  compid="32:461"
                  comptype="Button"
                  onClick={handleNavigate1}
                  leftIcon={
                    <Img
                      src="images/img_cart_gray_900.png"
                      className="w-[26px] h-[26px] mr-[8px] text-center lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[23px] xl:h-[24px] xl:mr-[7px] 2xl:h-[27px] 3xl:w-[31px] 3xl:h-[32px] 3xl:mr-[9px]"
                      compid="41:53"
                      comptype="Image"
                      alt="cart"
                    />
                  }
                  shape="RoundedBorder10"
                  size="xl"
                >
                  <div className="common-pointer bg-transparent font-bold lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 tracking-ls208">
                    SHOP NOW
                  </div>
                </Button>
              </Row>
              <Row
                className="font-interui items-center lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] w-[40%]"
                compid="44:20"
                comptype="Row"
              >
                <Text
                  className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]"
                  compid="41:15"
                  comptype="Text"
                >
                  SHARE
                </Text>
                <Img
                  src="images/img_social.png"
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[54%]"
                  compid="41:46"
                  comptype="Image"
                  alt="social"
                />
              </Row>
            </Column>
          </Row>
          <Text
            className="font-bold mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-gray_900 w-[auto]"
            compid="32:460"
            comptype="Text"
          >
            Related Product
          </Text>
        </Column>
        <Column
          className="font-jacquesfrancois items-end lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:pl-[115px] xl:pl-[131px] pl-[148px] 3xl:pl-[177px] w-[100%]"
          compid="25"
          comptype="Column"
        >
          <div
            className="overflow-x-auto w-[100%]"
            compid="23"
            comptype="HorizontalScroll"
          >
            <Stack
              className="lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] w-[100%]"
              compid="22"
              comptype="Stack"
            >
              <Row
                className="absolute h-[max-content] inset-y-[0] justify-between my-[auto] right-[10%] w-[39%]"
                compid="14"
                comptype="Row"
              >
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius10 w-[58%]"
                  compid="32:430"
                  style={{ backgroundImage: "url('images/img_item3.png')" }}
                  comptype="Column"
                >
                  <PagerIndicator
                    className="h-[12px] lg:mt-[311px] xl:mt-[355px] mt-[400px] 3xl:mt-[480px] w-[max-content]"
                    compid="32:433"
                    comptype="PagerIndicator"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] border-white_A700 border-2 border-solid"
                    selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                    unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  />
                </Column>
                <PagerIndicator
                  className="h-[12px] lg:mt-[328px] xl:mt-[375px] mt-[422px] 3xl:mt-[506px] w-[max-content]"
                  compid="32:441"
                  comptype="PagerIndicator"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] border-white_A700 border border-solid"
                  selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                />
              </Row>
              <Row
                className="absolute items-center w-[100%]"
                compid="32:446"
                comptype="Row"
              >
                <Column
                  className="bg-cover bg-repeat items-center lg:pt-[295px] xl:pt-[338px] pt-[380px] 3xl:pt-[456px] rounded-radius10 w-[22%]"
                  compid="8"
                  style={{ backgroundImage: "url('images/img_group8.png')" }}
                  comptype="Column"
                >
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    compid="37:10"
                    comptype="EditText"
                    name="price One"
                    placeholder="$300.00"
                    suffix={
                      <Img
                        src="images/img_cart.png"
                        className="w-[16px] h-[16px] bg-orange_A200 lg:w-[12px] lg:h-[13px] lg:mx-[10px] xl:w-[14px] xl:h-[15px] xl:mx-[11px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mx-[15px] rounded-radius50 my-[auto] mx-[13px]"
                        compid="37:12"
                        comptype="Image"
                        alt="cart"
                      />
                    }
                  ></Input>
                </Column>
                <Stack
                  className="bg-cover bg-repeat lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius10 w-[22%]"
                  compid="32:453"
                  style={{ backgroundImage: "url('images/img_item2.png')" }}
                  comptype="Stack"
                >
                  <Img
                    src="images/img_group3.png"
                    className="absolute bottom-[0] lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-x-[0] mx-[auto] w-[11%]"
                    compid="32:456"
                    comptype="Image"
                    alt="Group"
                  />
                </Stack>
                <Img
                  src="images/img_rectangle.png"
                  className="lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] lg:ml-[326px] xl:ml-[373px] ml-[420px] 3xl:ml-[504px] rounded-radius10 w-[22%]"
                  compid="32:439"
                  comptype="Image"
                  alt="Rectangle"
                />
              </Row>
            </Stack>
          </div>
        </Column>
        <Column
          className="font-interui items-center 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] lg:pr-[107px] xl:pr-[122px] pr-[138px] 3xl:pr-[165px] w-[100%]"
          compid="26"
          comptype="Column"
        >
          <footer
            className="bg-gray_900 w-[100%]"
            compid="32:382"
            comptype="Footer"
          >
            <Column
              className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]"
              compid="6"
              comptype="Column"
            >
              <Row
                className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] w-[79%]"
                compid="32:403"
                comptype="Row"
              >
                <Row
                  className="items-center justify-between w-[51%]"
                  compid="32:424"
                  comptype="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]"
                    compid="32:425"
                    comptype="Text"
                  >
                    SUBSCRIBE TO OUR NEWSLETTER
                  </Text>
                  <Button
                    className="flex items-center justify-center text-center w-[42%]"
                    compid="32:426"
                    comptype="Button"
                    rightIcon={
                      <Img
                        src="images/img_arrow.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        compid="32:429"
                        comptype="Image"
                        alt="arrow"
                      />
                    }
                    shape="CircleBorder20"
                    size="md"
                    variant="FillBluegray901"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] tracking-ls1">
                      Enter Your E-mail Address Here
                    </div>
                  </Button>
                </Row>
                <div
                  className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] h-[97px] 2xl:h-[98px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] w-[1px]"
                  compid="32:421"
                  comptype="View"
                ></div>
                <Text
                  className="font-bold lg:ml-[177px] xl:ml-[202px] ml-[228px] 3xl:ml-[273px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]"
                  compid="32:404"
                  comptype="Text"
                >
                  JOIN US ON
                </Text>
                <Button
                  className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  compid="32:417"
                  comptype="IconButton"
                  onClick={handleNavigate6}
                  variant="icbFillIndigo600"
                >
                  <Img
                    src="images/img_facebook.png"
                    className="flex items-center justify-center"
                    compid="32:417"
                    comptype="IconButton"
                    onClick={handleNavigate6}
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  compid="32:414"
                  comptype="IconButton"
                  onClick={handleNavigate3}
                  variant="icbFillBlue300"
                >
                  <Img
                    src="images/img_twitter.png"
                    className="flex items-center justify-center"
                    compid="32:414"
                    comptype="IconButton"
                    onClick={handleNavigate3}
                    alt="twitter"
                  />
                </Button>
                <Img
                  src="images/img_eye.png"
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  compid="32:405"
                  comptype="Image"
                  alt="eye"
                />
              </Row>
              <div
                className="bg-gray_201 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]"
                compid="32:422"
                comptype="View"
              ></div>
              <Row
                className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[73%]"
                compid="9"
                comptype="Row"
              >
                <Text
                  className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 tracking-ls1 w-[auto]"
                  compid="32:402"
                  comptype="Text"
                >
                  TERMS & CONDITION POLICY
                </Text>
                <Img
                  src="images/img_group2_99X112.png"
                  className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[199px] xl:ml-[228px] ml-[257px] 3xl:ml-[308px] w-[11%]"
                  compid="32:385"
                  comptype="Image"
                  alt="GroupTwo One"
                />
                <Text
                  className="font-medium lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                  compid="32:384"
                  comptype="Text"
                >
                  © 2019 Bamboo All Rights Reserved
                </Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ProductDetailPage;
