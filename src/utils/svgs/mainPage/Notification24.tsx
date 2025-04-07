import React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const Notification24 = () => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_865_7242)">
        <Path
          d="M6.75 18V10.25C6.75 7.35051 9.10051 5 12 5V5C14.8995 5 17.25 7.35051 17.25 10.25V18M6.75 18H17.25M6.75 18H5M17.25 18H19"
          stroke="#292929"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11 21L13 21"
          stroke="#292929"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          cx="12"
          cy="4"
          r="1"
          fill="#171717"
          stroke="#292929"
          strokeWidth="1.5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_865_7242">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Notification24;
