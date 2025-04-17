import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const FillHeart24 = ({
  color = colors.icon.interactive.primaryHovered,
}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M18.7996 6.16648C17.9162 5.28082 16.7453 4.74026 15.4982 4.64245C14.2511 4.54465 13.0102 4.89603 11.9996 5.63315C10.9393 4.84451 9.61957 4.48691 8.30618 4.63234C6.99279 4.77778 5.78328 5.41546 4.92122 6.41697C4.05917 7.41847 3.6086 8.70941 3.66025 10.0298C3.7119 11.3502 4.26193 12.602 5.19958 13.5331L10.3746 18.7165C10.8079 19.143 11.3916 19.382 11.9996 19.382C12.6076 19.382 13.1912 19.143 13.6246 18.7165L18.7996 13.5331C19.7726 12.5542 20.3187 11.23 20.3187 9.84981C20.3187 8.46958 19.7726 7.14542 18.7996 6.16648ZM17.6246 12.3831L12.4496 17.5581C12.3907 17.6176 12.3206 17.6648 12.2434 17.697C12.1661 17.7292 12.0833 17.7458 11.9996 17.7458C11.9159 17.7458 11.833 17.7292 11.7558 17.697C11.6786 17.6648 11.6085 17.6176 11.5496 17.5581L6.37458 12.3581C5.72104 11.6901 5.35509 10.7927 5.35509 9.85815C5.35509 8.92359 5.72104 8.02619 6.37458 7.35815C7.04054 6.70064 7.93872 6.33195 8.87458 6.33195C9.81043 6.33195 10.7086 6.70064 11.3746 7.35815C11.452 7.43625 11.5442 7.49825 11.6458 7.54056C11.7473 7.58286 11.8562 7.60464 11.9662 7.60464C12.0763 7.60464 12.1852 7.58286 12.2867 7.54056C12.3883 7.49825 12.4804 7.43625 12.5579 7.35815C13.2239 6.70064 14.1221 6.33195 15.0579 6.33195C15.9938 6.33195 16.8919 6.70064 17.5579 7.35815C18.2204 8.01744 18.5984 8.90997 18.6109 9.84455C18.6233 10.7791 18.2693 11.6814 17.6246 12.3581V12.3831Z"
        fill={color}
      />
      <Path
        d="M17.6246 12.3831L12.4496 17.5581C12.3907 17.6176 12.3206 17.6648 12.2434 17.697C12.1661 17.7292 12.0833 17.7458 11.9996 17.7458C11.9159 17.7458 11.833 17.7292 11.7558 17.697C11.6786 17.6648 11.6085 17.6176 11.5496 17.5581L6.37458 12.3581C5.72104 11.6901 5.35509 10.7927 5.35509 9.85815C5.35509 8.92359 5.72104 8.02619 6.37458 7.35815C7.04054 6.70064 7.93872 6.33195 8.87458 6.33195C9.81043 6.33195 10.7086 6.70064 11.3746 7.35815C11.452 7.43625 11.5442 7.49825 11.6458 7.54056C11.7473 7.58286 11.8562 7.60464 11.9662 7.60464C12.0763 7.60464 12.1852 7.58286 12.2867 7.54056C12.3883 7.49825 12.4804 7.43625 12.5579 7.35815C13.2239 6.70064 14.1221 6.33195 15.0579 6.33195C15.9938 6.33195 16.8919 6.70064 17.5579 7.35815C18.2204 8.01744 18.5984 8.90997 18.6109 9.84455C18.6233 10.7791 18.2693 11.6814 17.6246 12.3581V12.3831Z"
        fill={color}
      />
    </Svg>
  );
};

export default FillHeart24;
