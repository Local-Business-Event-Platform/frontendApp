import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const KakaoIcon = () => {
  return (
    <Svg
      width={SWidth * 56}
      height={SWidth * 56}
      viewBox="0 0 56 56"
      fill="none">
      <Rect width="56" height="56" rx="28" fill="#FEE500" />
      <G clip-path="url(#clip0_279_9504)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.0001 18.6667C22.4769 18.6667 18 22.1256 18 26.3915C18 29.0446 19.7316 31.3834 22.3684 32.7745L21.2589 36.8273C21.1609 37.1854 21.5705 37.4708 21.885 37.2633L26.7482 34.0536C27.1586 34.0932 27.5757 34.1164 28.0001 34.1164C33.5228 34.1164 38 30.6576 38 26.3915C38 22.1256 33.5228 18.6667 28.0001 18.6667Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_279_9504">
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

export default KakaoIcon;
