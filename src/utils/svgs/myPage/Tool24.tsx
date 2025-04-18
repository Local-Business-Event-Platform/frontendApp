import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const Tool24 = ({color = colors.black}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.2571 4.70454C14.8505 4.65859 14.4371 4.67191 14.0299 4.74609C13.1881 4.89948 12.413 5.30577 11.8079 5.91083C11.2029 6.51589 10.7966 7.29097 10.6432 8.1328C10.4898 8.97462 10.5966 9.8432 10.9494 10.6228C11.0939 10.942 11.0255 11.3174 10.7777 11.5652L4.96027 17.3826C4.78323 17.5596 4.68377 17.7997 4.68377 18.0501C4.68377 18.3005 4.78323 18.5406 4.96027 18.7176C5.13731 18.8947 5.37742 18.9941 5.62779 18.9941C5.87816 18.9941 6.11828 18.8947 6.29532 18.7176L12.1127 12.9002C12.3605 12.6524 12.7359 12.584 13.0551 12.7285C13.8347 13.0813 14.7033 13.1881 15.5451 13.0347C16.3869 12.8813 17.162 12.475 17.7671 11.87C18.3721 11.2649 18.7784 10.4898 18.9318 9.64801C19.006 9.24083 19.0193 8.8274 18.9734 8.4208L16.814 10.5802L16.8081 10.5861L16.808 10.5861C16.4933 10.8946 16.0701 11.0674 15.6294 11.0674C15.1887 11.0674 14.7655 10.8946 14.4508 10.5861L14.4447 10.5802L14.4448 10.5802L13.0978 9.23314L13.0918 9.22719L13.0918 9.22716C12.7833 8.91242 12.6105 8.48925 12.6105 8.04852C12.6105 7.60779 12.7833 7.18462 13.0918 6.86988L13.0977 6.86387L13.0978 6.8639L13.1062 6.85548L15.2571 4.70454ZM13.7281 3.08959C14.9066 2.87486 16.1226 3.0244 17.214 3.51828C17.4658 3.63222 17.6457 3.86249 17.6952 4.13438C17.7448 4.40628 17.6577 4.68517 17.4623 4.88059L14.2968 8.04608L14.2943 8.04852L15.6294 9.38357L18.7973 6.21565C18.9927 6.02022 19.2716 5.93316 19.5435 5.9827C19.8154 6.03224 20.0457 6.21207 20.1596 6.46386C20.6535 7.55527 20.803 8.77128 20.5883 9.94983C20.3736 11.1284 19.8048 12.2135 18.9577 13.0606C18.1106 13.9077 17.0255 14.4765 15.8469 14.6912C14.8641 14.8703 13.8552 14.796 12.9142 14.48L7.48592 19.9082C6.99312 20.4011 6.32473 20.6779 5.62779 20.6779C4.93086 20.6779 4.26247 20.4011 3.76966 19.9082C3.27686 19.4154 3 18.747 3 18.0501C3 17.3532 3.27686 16.6848 3.76966 16.192L9.19794 10.7637C8.88188 9.82275 8.80762 8.81384 8.9867 7.83098C9.20143 6.65243 9.77024 5.5673 10.6173 4.72022C11.4644 3.87314 12.5495 3.30433 13.7281 3.08959Z"
        fill={color}
      />
    </Svg>
  );
};

export default Tool24;
