import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const BusinessDownArrow = ({color = colors.tertiary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16.1671 9.64076C16.0109 9.48556 15.7997 9.39844 15.5796 9.39844C15.3594 9.39844 15.1482 9.48556 14.9921 9.64076L12.0004 12.5908L9.0504 9.64076C8.89427 9.48556 8.68306 9.39844 8.4629 9.39844C8.24275 9.39844 8.03154 9.48556 7.8754 9.64076C7.7973 9.71823 7.7353 9.8104 7.693 9.91195C7.65069 10.0135 7.62891 10.1224 7.62891 10.2324C7.62891 10.3424 7.65069 10.4514 7.693 10.5529C7.7353 10.6545 7.7973 10.7466 7.8754 10.8241L11.4087 14.3574C11.4862 14.4355 11.5784 14.4975 11.6799 14.5398C11.7815 14.5821 11.8904 14.6039 12.0004 14.6039C12.1104 14.6039 12.2193 14.5821 12.3209 14.5398C12.4224 14.4975 12.5146 14.4355 12.5921 14.3574L16.1671 10.8241C16.2452 10.7466 16.3072 10.6545 16.3495 10.5529C16.3918 10.4514 16.4136 10.3424 16.4136 10.2324C16.4136 10.1224 16.3918 10.0135 16.3495 9.91195C16.3072 9.8104 16.2452 9.71823 16.1671 9.64076Z"
        fill={color}
      />
    </Svg>
  );
};

export default BusinessDownArrow;
