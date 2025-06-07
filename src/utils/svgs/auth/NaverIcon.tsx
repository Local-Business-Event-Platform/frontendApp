import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const NaverIcon = () => {
  return (
    <Svg
      width={SWidth * 48}
      height={SWidth * 48}
      viewBox="0 0 48 48"
      fill="none">
      <Rect width="48" height="48" rx="24" fill="#03C75A" />
      <G clip-path="url(#clip0_507_12901)">
        <Path
          d="M27.5614 24.7033L20.1461 14H14V34H20.4386V23.295L27.8539 34H34V14H27.5614V24.7033Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_507_12901">
          <Rect
            width="20"
            height="20"
            fill="white"
            transform="translate(14 14)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NaverIcon;
