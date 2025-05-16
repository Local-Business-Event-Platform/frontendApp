import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const Radio16 = () => {
  return (
    <Svg
      width={SWidth * 16}
      height={SWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M8 0.625C12.0731 0.625 15.375 3.9269 15.375 8C15.375 12.0731 12.0731 15.375 8 15.375C3.9269 15.375 0.625 12.0731 0.625 8C0.625 3.9269 3.9269 0.625 8 0.625Z"
        fill="white"
      />
      <Path
        d="M8 0.625C12.0731 0.625 15.375 3.9269 15.375 8C15.375 12.0731 12.0731 15.375 8 15.375C3.9269 15.375 0.625 12.0731 0.625 8C0.625 3.9269 3.9269 0.625 8 0.625Z"
        stroke="#45556C"
        stroke-width="1.25"
      />
    </Svg>
  );
};

export default Radio16;
