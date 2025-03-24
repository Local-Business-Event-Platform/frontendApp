import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SWidth} from '../../../globalStyle';
import {SvgColorProps} from '../types/svgType';

const MyPageOption = ({color = '#171717'}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M18.5833 12.5505C18.4497 12.3984 18.376 12.2029 18.376 12.0005C18.376 11.7981 18.4497 11.6026 18.5833 11.4505L19.65 10.2505C19.7675 10.1194 19.8405 9.9544 19.8585 9.77924C19.8765 9.60407 19.8385 9.42772 19.75 9.27548L18.0833 6.39215C17.9957 6.24008 17.8624 6.11955 17.7023 6.04772C17.5422 5.9759 17.3635 5.95645 17.1917 5.99215L15.625 6.30882C15.4256 6.35001 15.2181 6.31681 15.0416 6.21548C14.865 6.11416 14.7317 5.95172 14.6667 5.75882L14.1583 4.23382C14.1024 4.0683 13.9959 3.92454 13.8539 3.82285C13.7118 3.72116 13.5414 3.6667 13.3667 3.66715H10.0333C9.85161 3.65766 9.67177 3.70792 9.5213 3.81024C9.37082 3.91257 9.25798 4.06133 9.2 4.23382L8.73333 5.75882C8.66833 5.95172 8.53497 6.11416 8.35842 6.21548C8.18187 6.31681 7.97434 6.35001 7.77499 6.30882L6.16666 5.99215C6.00379 5.96913 5.83774 5.99483 5.68945 6.06602C5.54116 6.1372 5.41725 6.25067 5.33333 6.39215L3.66666 9.27548C3.57596 9.42602 3.53518 9.60139 3.55015 9.7765C3.56511 9.95162 3.63506 10.1175 3.74999 10.2505L4.80833 11.4505C4.94193 11.6026 5.01561 11.7981 5.01561 12.0005C5.01561 12.2029 4.94193 12.3984 4.80833 12.5505L3.74999 13.7505C3.63506 13.8834 3.56511 14.0493 3.55015 14.2245C3.53518 14.3996 3.57596 14.5749 3.66666 14.7255L5.33333 17.6088C5.42091 17.7609 5.55426 17.8814 5.71437 17.9532C5.87448 18.0251 6.05318 18.0445 6.225 18.0088L7.79166 17.6921C7.99101 17.651 8.19854 17.6842 8.37509 17.7855C8.55164 17.8868 8.685 18.0492 8.74999 18.2421L9.25833 19.7671C9.31631 19.9396 9.42916 20.0884 9.57963 20.1907C9.73011 20.293 9.90994 20.3433 10.0917 20.3338H13.425C13.5997 20.3343 13.7701 20.2798 13.9122 20.1781C14.0542 20.0764 14.1608 19.9327 14.2167 19.7671L14.725 18.2421C14.79 18.0492 14.9234 17.8868 15.0999 17.7855C15.2764 17.6842 15.484 17.651 15.6833 17.6921L17.25 18.0088C17.4218 18.0445 17.6005 18.0251 17.7606 17.9532C17.9207 17.8814 18.0541 17.7609 18.1417 17.6088L19.8083 14.7255C19.8968 14.5732 19.9348 14.3969 19.9168 14.2217C19.8989 14.0466 19.8259 13.8816 19.7083 13.7505L18.5833 12.5505ZM17.3417 13.6671L18.0083 14.4171L16.9417 16.2671L15.9583 16.0671C15.3581 15.9445 14.7338 16.0464 14.2038 16.3537C13.6738 16.6609 13.2751 17.152 13.0833 17.7338L12.7667 18.6671H10.6333L10.3333 17.7171C10.1415 17.1354 9.74281 16.6442 9.21283 16.337C8.68285 16.0297 8.05851 15.9278 7.45833 16.0505L6.47499 16.2505L5.39166 14.4088L6.05833 13.6588C6.46829 13.2005 6.69494 12.6071 6.69494 11.9921C6.69494 11.3772 6.46829 10.7838 6.05833 10.3255L5.39166 9.57548L6.45833 7.74215L7.44166 7.94215C8.04185 8.06483 8.66618 7.96288 9.19617 7.65565C9.72615 7.34841 10.1249 6.85728 10.3167 6.27548L10.6333 5.33382H12.7667L13.0833 6.28382C13.2751 6.86561 13.6738 7.35675 14.2038 7.66398C14.7338 7.97122 15.3581 8.07317 15.9583 7.95048L16.9417 7.75048L18.0083 9.60048L17.3417 10.3505C16.9363 10.8078 16.7125 11.3977 16.7125 12.0088C16.7125 12.6199 16.9363 13.2098 17.3417 13.6671ZM11.7 8.66715C11.0407 8.66715 10.3963 8.86265 9.84809 9.22892C9.29993 9.59519 8.87269 10.1158 8.6204 10.7249C8.3681 11.334 8.30209 12.0042 8.43071 12.6508C8.55933 13.2974 8.8768 13.8913 9.34297 14.3575C9.80915 14.8237 10.4031 15.1411 11.0497 15.2698C11.6963 15.3984 12.3665 15.3324 12.9756 15.0801C13.5847 14.8278 14.1053 14.4005 14.4716 13.8524C14.8378 13.3042 15.0333 12.6598 15.0333 12.0005C15.0333 11.1164 14.6821 10.2686 14.057 9.64346C13.4319 9.01834 12.5841 8.66715 11.7 8.66715ZM11.7 13.6671C11.3704 13.6671 11.0481 13.5694 10.774 13.3863C10.5 13.2031 10.2863 12.9428 10.1602 12.6383C10.034 12.3337 10.001 11.9986 10.0654 11.6753C10.1297 11.352 10.2884 11.0551 10.5215 10.822C10.7546 10.5889 11.0515 10.4301 11.3748 10.3658C11.6981 10.3015 12.0333 10.3345 12.3378 10.4607C12.6423 10.5868 12.9026 10.8005 13.0858 11.0745C13.2689 11.3486 13.3667 11.6708 13.3667 12.0005C13.3667 12.4425 13.1911 12.8664 12.8785 13.179C12.5659 13.4916 12.142 13.6671 11.7 13.6671Z"
        fill={color}
      />
    </Svg>
  );
};

export default MyPageOption;
