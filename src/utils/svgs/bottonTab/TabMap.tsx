import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {TabProps} from '../../types/tabMenuType';

const TabMap = ({focused, color = colors.secondary}: TabProps) => {
  return (
    <Svg
      width={SWidth * 25}
      height={SWidth * 24}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M20.5168 6.20858L15.5168 4.54192H15.4584C15.4196 4.53802 15.3805 4.53802 15.3418 4.54192H15.1501H15.0418H14.9834L10.2501 6.16692L5.51675 4.54192C5.39143 4.50059 5.25809 4.48962 5.1277 4.5099C4.99731 4.53019 4.8736 4.58114 4.76675 4.65858C4.65905 4.73526 4.57114 4.83647 4.51028 4.95384C4.44942 5.07121 4.41736 5.20137 4.41675 5.33358V17.0002C4.4163 17.175 4.47077 17.3454 4.57245 17.4874C4.67414 17.6295 4.8179 17.736 4.98342 17.7919L9.98342 19.4586C10.1513 19.5133 10.3322 19.5133 10.5001 19.4586L15.2501 17.8752L19.9834 19.5002C20.0719 19.5123 20.1616 19.5123 20.2501 19.5002C20.4243 19.5027 20.5944 19.447 20.7334 19.3419C20.8411 19.2652 20.929 19.164 20.9899 19.0467C21.0507 18.9293 21.0828 18.7991 21.0834 18.6669V7.00025C21.0839 6.82555 21.0294 6.65512 20.9277 6.51306C20.826 6.371 20.6823 6.26449 20.5168 6.20858ZM9.41675 17.5086L6.08342 16.4002V6.49192L9.41675 7.60025V17.5086ZM14.4168 16.4002L11.0834 17.5086V7.60025L14.4168 6.49192V16.4002ZM19.4168 17.5086L16.0834 16.4002V6.49192L19.4168 7.60025V17.5086Z"
        fill={focused ? '#1447E6' : color}
      />
    </Svg>
  );
};

export default TabMap;
