import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const MyPageMoreIcon = ({color = colors.secondary}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 7.83333C12.3296 7.83333 12.6519 7.73559 12.926 7.55245C13.2 7.36931 13.4137 7.10902 13.5398 6.80447C13.666 6.49993 13.699 6.16482 13.6347 5.84152C13.5703 5.51822 13.4116 5.22124 13.1785 4.98816C12.9454 4.75507 12.6485 4.59633 12.3252 4.53203C12.0019 4.46772 11.6667 4.50072 11.3622 4.62687C11.0577 4.75301 10.7974 4.96664 10.6142 5.24072C10.4311 5.5148 10.3333 5.83703 10.3333 6.16667C10.3333 6.6087 10.5089 7.03262 10.8215 7.34518C11.1341 7.65774 11.558 7.83333 12 7.83333ZM12 16.1667C11.6704 16.1667 11.3481 16.2644 11.0741 16.4476C10.8 16.6307 10.5864 16.891 10.4602 17.1955C10.3341 17.5001 10.3011 17.8352 10.3654 18.1585C10.4297 18.4818 10.5884 18.7788 10.8215 19.0118C11.0546 19.2449 11.3516 19.4037 11.6749 19.468C11.9982 19.5323 12.3333 19.4993 12.6378 19.3731C12.9424 19.247 13.2027 19.0334 13.3858 18.7593C13.5689 18.4852 13.6667 18.163 13.6667 17.8333C13.6667 17.3913 13.4911 16.9674 13.1785 16.6548C12.866 16.3423 12.442 16.1667 12 16.1667ZM12 10.3333C11.6704 10.3333 11.3481 10.4311 11.0741 10.6142C10.8 10.7974 10.5864 11.0577 10.4602 11.3622C10.3341 11.6667 10.3011 12.0019 10.3654 12.3252C10.4297 12.6485 10.5884 12.9454 10.8215 13.1785C11.0546 13.4116 11.3516 13.5703 11.6749 13.6346C11.9982 13.699 12.3333 13.6659 12.6378 13.5398C12.9424 13.4137 13.2027 13.2 13.3858 12.926C13.5689 12.6519 13.6667 12.3296 13.6667 12C13.6667 11.558 13.4911 11.1341 13.1785 10.8215C12.866 10.5089 12.442 10.3333 12 10.3333Z"
        fill={color}
      />
    </Svg>
  );
};

export default MyPageMoreIcon;
