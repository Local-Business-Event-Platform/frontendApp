import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const DownArrowTwo24 = ({color = colors.icon.primary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16.1671 9.64174C16.0109 9.48653 15.7997 9.39941 15.5796 9.39941C15.3594 9.39941 15.1482 9.48653 14.9921 9.64174L12.0004 12.5917L9.0504 9.64174C8.89427 9.48653 8.68306 9.39941 8.4629 9.39941C8.24275 9.39941 8.03154 9.48653 7.8754 9.64174C7.7973 9.71921 7.7353 9.81138 7.693 9.91293C7.65069 10.0145 7.62891 10.1234 7.62891 10.2334C7.62891 10.3434 7.65069 10.4523 7.693 10.5539C7.7353 10.6554 7.7973 10.7476 7.8754 10.8251L11.4087 14.3584C11.4862 14.4365 11.5784 14.4985 11.6799 14.5408C11.7815 14.5831 11.8904 14.6049 12.0004 14.6049C12.1104 14.6049 12.2193 14.5831 12.3209 14.5408C12.4224 14.4985 12.5146 14.4365 12.5921 14.3584L16.1671 10.8251C16.2452 10.7476 16.3072 10.6554 16.3495 10.5539C16.3918 10.4523 16.4136 10.3434 16.4136 10.2334C16.4136 10.1234 16.3918 10.0145 16.3495 9.91293C16.3072 9.81138 16.2452 9.71921 16.1671 9.64174Z"
        fill={color}
      />
    </Svg>
  );
};

export default DownArrowTwo24;
