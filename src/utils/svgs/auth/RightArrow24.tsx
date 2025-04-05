import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const RightArrow24 = ({color = colors.secondary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M14.3584 11.4087L10.8251 7.8754C10.7476 7.7973 10.6554 7.7353 10.5539 7.693C10.4523 7.65069 10.3434 7.62891 10.2334 7.62891C10.1234 7.62891 10.0145 7.65069 9.91293 7.693C9.81138 7.7353 9.71921 7.7973 9.64174 7.8754C9.48653 8.03154 9.39941 8.24275 9.39941 8.4629C9.39941 8.68306 9.48653 8.89427 9.64174 9.0504L12.5917 12.0004L9.64174 14.9504C9.48653 15.1065 9.39941 15.3178 9.39941 15.5379C9.39941 15.7581 9.48653 15.9693 9.64174 16.1254C9.71961 16.2026 9.81195 16.2637 9.91349 16.3052C10.015 16.3467 10.1237 16.3677 10.2334 16.3671C10.3431 16.3677 10.4518 16.3467 10.5533 16.3052C10.6549 16.2637 10.7472 16.2026 10.8251 16.1254L14.3584 12.5921C14.4365 12.5146 14.4985 12.4224 14.5408 12.3209C14.5831 12.2193 14.6049 12.1104 14.6049 12.0004C14.6049 11.8904 14.5831 11.7815 14.5408 11.6799C14.4985 11.5784 14.4365 11.4862 14.3584 11.4087Z"
        fill={color}
      />
    </Svg>
  );
};

export default RightArrow24;
