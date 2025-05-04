import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const NaverIcon = () => {
  return (
    <Svg
      width={SWidth * 56}
      height={SWidth * 56}
      viewBox="0 0 56 56"
      fill="none">
      <Rect width="56" height="56" rx="28" fill="#03C75A" />
      <G clip-path="url(#clip0_279_9506)">
        <Path
          d="M31.5614 28.7033L24.1461 18H18V38H24.4386V27.295L31.8539 38H38V18H31.5614V28.7033Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_279_9506">
          <Rect
            width={SWidth * 20}
            height={SWidth * 20}
            fill="white"
            transform="translate(18 18)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NaverIcon;
