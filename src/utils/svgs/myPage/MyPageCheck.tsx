import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const MyPageCheck = ({color = '#404040'}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M14.2668 9.32533L10.6918 12.9087L9.31675 11.5337C9.24205 11.4464 9.15011 11.3756 9.04673 11.3256C8.94334 11.2755 8.83073 11.2474 8.71596 11.243C8.6012 11.2386 8.48675 11.2579 8.37982 11.2998C8.27288 11.3417 8.17576 11.4052 8.09454 11.4865C8.01333 11.5677 7.94978 11.6648 7.90789 11.7717C7.86599 11.8787 7.84665 11.9931 7.85109 12.1079C7.85552 12.2226 7.88363 12.3352 7.93365 12.4386C7.98367 12.542 8.05452 12.634 8.14175 12.7087L10.1001 14.6753C10.178 14.7526 10.2703 14.8137 10.3718 14.8551C10.4734 14.8966 10.5821 14.9176 10.6918 14.917C10.9104 14.9161 11.1199 14.8293 11.2751 14.6753L15.4418 10.5087C15.5199 10.4312 15.5819 10.339 15.6242 10.2375C15.6665 10.1359 15.6883 10.027 15.6883 9.91699C15.6883 9.80698 15.6665 9.69806 15.6242 9.59651C15.5819 9.49496 15.5199 9.40279 15.4418 9.32533C15.2856 9.17012 15.0744 9.083 14.8543 9.083C14.6341 9.083 14.4229 9.17012 14.2668 9.32533ZM12.0001 3.66699C10.3519 3.66699 8.74074 4.15573 7.37033 5.07141C5.99992 5.98709 4.93182 7.28858 4.30109 8.8113C3.67036 10.334 3.50533 12.0096 3.82687 13.6261C4.14842 15.2426 4.94209 16.7274 6.10753 17.8929C7.27297 19.0583 8.75782 19.852 10.3743 20.1735C11.9908 20.4951 13.6664 20.3301 15.1891 19.6993C16.7118 19.0686 18.0133 18.0005 18.929 16.6301C19.8447 15.2597 20.3334 13.6485 20.3334 12.0003C20.3334 10.906 20.1179 9.82234 19.6991 8.8113C19.2803 7.80025 18.6665 6.88159 17.8926 6.10777C17.1188 5.33395 16.2002 4.72012 15.1891 4.30133C14.1781 3.88254 13.0944 3.66699 12.0001 3.66699ZM12.0001 18.667C10.6815 18.667 9.39261 18.276 8.29628 17.5435C7.19996 16.8109 6.34547 15.7697 5.84089 14.5515C5.3363 13.3334 5.20428 11.9929 5.46152 10.6997C5.71875 9.40652 6.35369 8.21863 7.28604 7.28628C8.21839 6.35393 9.40628 5.71899 10.6995 5.46176C11.9927 5.20452 13.3331 5.33654 14.5513 5.84113C15.7695 6.34571 16.8107 7.2002 17.5432 8.29652C18.2758 9.39285 18.6668 10.6818 18.6668 12.0003C18.6668 13.7684 17.9644 15.4641 16.7141 16.7144C15.4639 17.9646 13.7682 18.667 12.0001 18.667Z"
        fill={color}
      />
    </Svg>
  );
};

export default MyPageCheck;
