import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const MyPageHistory = ({color = '#404040'}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12.0001 3.66699C9.86374 3.67309 7.81132 4.49942 6.26675 5.97533V4.50033C6.26675 4.27931 6.17895 4.06735 6.02267 3.91107C5.86639 3.75479 5.65443 3.66699 5.43341 3.66699C5.2124 3.66699 5.00044 3.75479 4.84416 3.91107C4.68788 4.06735 4.60008 4.27931 4.60008 4.50033V8.25033C4.60008 8.47134 4.68788 8.6833 4.84416 8.83958C5.00044 8.99586 5.2124 9.08366 5.43341 9.08366H9.18341C9.40443 9.08366 9.61639 8.99586 9.77267 8.83958C9.92895 8.6833 10.0167 8.47134 10.0167 8.25033C10.0167 8.02931 9.92895 7.81735 9.77267 7.66107C9.61639 7.50479 9.40443 7.41699 9.18341 7.41699H7.18341C8.2549 6.29729 9.683 5.58587 11.2222 5.40505C12.7614 5.22423 14.3155 5.5853 15.6173 6.4262C16.9191 7.26709 17.8873 8.53525 18.3554 10.0127C18.8234 11.49 18.7622 13.0844 18.1821 14.5215C17.602 15.9586 16.5394 17.1487 15.1769 17.8872C13.8144 18.6258 12.2372 18.8665 10.7164 18.5681C9.1956 18.2697 7.8263 17.4508 6.84391 16.2522C5.86151 15.0535 5.3274 13.5501 5.33341 12.0003C5.33341 11.7793 5.24562 11.5674 5.08934 11.4111C4.93306 11.2548 4.7211 11.167 4.50008 11.167C4.27907 11.167 4.06711 11.2548 3.91083 11.4111C3.75455 11.5674 3.66675 11.7793 3.66675 12.0003C3.66675 13.6485 4.15549 15.2597 5.07117 16.6301C5.98685 18.0005 7.28834 19.0686 8.81105 19.6993C10.3338 20.3301 12.0093 20.4951 13.6258 20.1735C15.2423 19.852 16.7272 19.0583 17.8926 17.8929C19.0581 16.7274 19.8517 15.2426 20.1733 13.6261C20.4948 12.0096 20.3298 10.334 19.6991 8.8113C19.0683 7.28858 18.0002 5.98709 16.6298 5.07141C15.2594 4.15573 13.6483 3.66699 12.0001 3.66699ZM12.0001 8.66699C11.7791 8.66699 11.5671 8.75479 11.4108 8.91107C11.2545 9.06735 11.1667 9.27931 11.1667 9.50033V12.0003C11.1667 12.2213 11.2545 12.4333 11.4108 12.5896C11.5671 12.7459 11.7791 12.8337 12.0001 12.8337H13.6667C13.8878 12.8337 14.0997 12.7459 14.256 12.5896C14.4123 12.4333 14.5001 12.2213 14.5001 12.0003C14.5001 11.7793 14.4123 11.5674 14.256 11.4111C14.0997 11.2548 13.8878 11.167 13.6667 11.167H12.8334V9.50033C12.8334 9.27931 12.7456 9.06735 12.5893 8.91107C12.4331 8.75479 12.2211 8.66699 12.0001 8.66699Z"
        fill={color}
      />
    </Svg>
  );
};

export default MyPageHistory;
