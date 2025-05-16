import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';

const RadioCheck16 = () => {
  return (
    <Svg
      width={SWidth * 16}
      height={SWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
        fill="#5EBA63"
      />
      <Circle cx="8" cy="8" r="4" fill="white" />
    </Svg>
  );
};

export default RadioCheck16;
