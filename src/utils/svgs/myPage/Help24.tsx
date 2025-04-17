import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const Help24 = ({color = colors.icon.secondary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M18.6667 12.9833V11.1667C18.6667 9.39856 17.9643 7.70286 16.714 6.45262C15.4638 5.20238 13.7681 4.5 12 4.5C10.2319 4.5 8.53619 5.20238 7.28594 6.45262C6.0357 7.70286 5.33332 9.39856 5.33332 11.1667V12.9833C4.84703 13.1553 4.42582 13.4734 4.12744 13.8941C3.82906 14.3148 3.66811 14.8175 3.66666 15.3333V17C3.66666 17.663 3.93005 18.2989 4.39889 18.7678C4.86773 19.2366 5.50362 19.5 6.16666 19.5H8.66666C8.88767 19.5 9.09963 19.4122 9.25591 19.2559C9.41219 19.0996 9.49999 18.8877 9.49999 18.6667V13.6667C9.49999 13.4457 9.41219 13.2337 9.25591 13.0774C9.09963 12.9211 8.88767 12.8333 8.66666 12.8333H6.99999V11.1667C6.99999 9.84058 7.52677 8.56881 8.46446 7.63113C9.40214 6.69345 10.6739 6.16667 12 6.16667C13.3261 6.16667 14.5978 6.69345 15.5355 7.63113C16.4732 8.56881 17 9.84058 17 11.1667V12.8333H15.3333C15.1123 12.8333 14.9003 12.9211 14.7441 13.0774C14.5878 13.2337 14.5 13.4457 14.5 13.6667V18.6667C14.5 18.8877 14.5878 19.0996 14.7441 19.2559C14.9003 19.4122 15.1123 19.5 15.3333 19.5H17.8333C18.4964 19.5 19.1322 19.2366 19.6011 18.7678C20.0699 18.2989 20.3333 17.663 20.3333 17V15.3333C20.3319 14.8175 20.1709 14.3148 19.8725 13.8941C19.5742 13.4734 19.1529 13.1553 18.6667 12.9833ZM7.83332 14.5V17.8333H6.16666C5.94564 17.8333 5.73368 17.7455 5.5774 17.5893C5.42112 17.433 5.33332 17.221 5.33332 17V15.3333C5.33332 15.1123 5.42112 14.9004 5.5774 14.7441C5.73368 14.5878 5.94564 14.5 6.16666 14.5H7.83332ZM18.6667 17C18.6667 17.221 18.5789 17.433 18.4226 17.5893C18.2663 17.7455 18.0543 17.8333 17.8333 17.8333H16.1667V14.5H17.8333C18.0543 14.5 18.2663 14.5878 18.4226 14.7441C18.5789 14.9004 18.6667 15.1123 18.6667 15.3333V17Z"
        fill={color}
      />
    </Svg>
  );
};

export default Help24;
