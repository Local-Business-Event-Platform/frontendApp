import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const KakaoIcon = () => {
  return (
    <Svg
      width={SWidth * 48}
      height={SWidth * 48}
      viewBox="0 0 48 48"
      fill="none">
      <Rect width="48" height="48" rx="24" fill="#FEE500" />
      <G clip-path="url(#clip0_507_12900)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.0001 14.6667C18.4769 14.6667 14 18.1255 14 22.3914C14 25.0445 15.7316 27.3833 18.3684 28.7744L17.2589 32.8272C17.1609 33.1853 17.5705 33.4708 17.885 33.2633L22.7482 30.0536C23.1586 30.0932 23.5757 30.1163 24.0001 30.1163C29.5228 30.1163 34 26.6576 34 22.3914C34 18.1255 29.5228 14.6667 24.0001 14.6667Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_507_12900">
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

export default KakaoIcon;
