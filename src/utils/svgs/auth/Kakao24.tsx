import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const Kakao24 = () => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Rect width="24" height="24" rx="12" fill="#FEE500" />
      <G clip-path="url(#clip0_286_4137)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.3999C8.68613 6.3999 6 8.47521 6 11.0348C6 12.6266 7.03894 14.0299 8.62103 14.8645L7.95536 17.2962C7.89655 17.5111 8.14228 17.6824 8.33099 17.5579L11.2489 15.632C11.4952 15.6558 11.7454 15.6697 12 15.6697C15.3137 15.6697 18 13.5944 18 11.0348C18 8.47521 15.3137 6.3999 12 6.3999Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_286_4137">
          <Rect
            width={SWidth * 12}
            height={SWidth * 12}
            fill="white"
            transform="translate(6 6)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Kakao24;
