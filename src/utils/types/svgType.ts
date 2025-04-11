import {ColorValue} from 'react-native';

export type SvgColorProps = {
  color?: ColorValue;
};

export type SvgFocusColorProps = {
  focus?: number | boolean;
  newColor?: ColorValue;
  color?: ColorValue;
};
