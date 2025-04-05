import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../globalStyle';
import {SvgColorProps} from '../types/svgType';

const AppBarBackArrow = ({color = colors.primary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 25}
      height={SWidth * 24}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M9.25732 12.667L14.0073 17.3337C14.3407 17.667 14.8407 17.667 15.174 17.3337C15.5073 17.0003 15.5073 16.5003 15.174 16.167L11.0907 12.0003L15.174 7.83366C15.5073 7.50033 15.5073 7.00033 15.174 6.66699C15.0073 6.50033 14.8407 6.41699 14.5907 6.41699C14.3407 6.41699 14.174 6.50033 14.0073 6.66699L9.25732 11.3337C8.92399 11.7503 8.92399 12.2503 9.25732 12.667C9.25732 12.5837 9.25732 12.5837 9.25732 12.667Z"
        fill={color}
      />
    </Svg>
  );
};

export default AppBarBackArrow;
