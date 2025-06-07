import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const ArrowUp24 = ({
  color = colors.icon.interactive.secondary,
}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 8.29492L6 14.2949L7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowUp24;
