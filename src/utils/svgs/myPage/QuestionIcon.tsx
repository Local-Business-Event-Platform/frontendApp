import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SWidth} from '../../../../globalStyle';
import {SvgFocusColorProps} from '../../types/svgType';

const QuestionIcon = ({focus, color = '#404040'}: SvgFocusColorProps) => {
  return (
    <Svg
      width={SWidth * 25}
      height={SWidth * 24}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M11.9083 14.741C11.8725 14.7806 11.8391 14.8224 11.8083 14.866C11.7768 14.9125 11.7516 14.9629 11.7333 15.016C11.7093 15.0633 11.6924 15.1138 11.6833 15.166C11.6792 15.2215 11.6792 15.2772 11.6833 15.3327C11.6805 15.442 11.7033 15.5504 11.75 15.6493C11.7874 15.7528 11.8471 15.8467 11.9249 15.9244C12.0027 16.0022 12.0966 16.0619 12.2 16.0993C12.2997 16.1434 12.4076 16.1662 12.5167 16.1662C12.6257 16.1662 12.7336 16.1434 12.8333 16.0993C12.9367 16.0619 13.0307 16.0022 13.1084 15.9244C13.1862 15.8467 13.2459 15.7528 13.2833 15.6493C13.3203 15.548 13.3373 15.4405 13.3333 15.3327C13.334 15.223 13.3129 15.1143 13.2715 15.0128C13.23 14.9112 13.1689 14.8189 13.0917 14.741C13.0142 14.6629 12.922 14.6009 12.8205 14.5586C12.7189 14.5163 12.61 14.4945 12.5 14.4945C12.39 14.4945 12.2811 14.5163 12.1795 14.5586C12.078 14.6009 11.9858 14.6629 11.9083 14.741ZM12.5 3.66602C10.8518 3.66602 9.24065 4.15476 7.87024 5.07044C6.49983 5.98611 5.43173 7.2876 4.801 8.81032C4.17027 10.333 4.00524 12.0086 4.32678 13.6251C4.64833 15.2416 5.442 16.7265 6.60744 17.8919C7.77287 19.0573 9.25773 19.851 10.8742 20.1726C12.4907 20.4941 14.1663 20.3291 15.689 19.6983C17.2117 19.0676 18.5132 17.9995 19.4289 16.6291C20.3446 15.2587 20.8333 13.6475 20.8333 11.9993C20.8333 10.905 20.6178 9.82137 20.199 8.81032C19.7802 7.79927 19.1664 6.88061 18.3925 6.10679C17.6187 5.33297 16.7001 4.71914 15.689 4.30035C14.678 3.88156 13.5943 3.66602 12.5 3.66602ZM12.5 18.666C11.1815 18.666 9.89252 18.275 8.79619 17.5425C7.69986 16.8099 6.84538 15.7687 6.3408 14.5506C5.83621 13.3324 5.70419 11.992 5.96143 10.6987C6.21866 9.40554 6.8536 8.21765 7.78595 7.2853C8.7183 6.35295 9.90619 5.71802 11.1994 5.46078C12.4926 5.20355 13.833 5.33557 15.0512 5.84015C16.2694 6.34474 17.3106 7.19922 18.0431 8.29555C18.7757 9.39188 19.1667 10.6808 19.1667 11.9993C19.1667 13.7675 18.4643 15.4632 17.214 16.7134C15.9638 17.9636 14.2681 18.666 12.5 18.666ZM12.5 7.83268C12.0609 7.8324 11.6294 7.94778 11.2491 8.16722C10.8687 8.38665 10.5529 8.7024 10.3333 9.08268C10.273 9.17753 10.2325 9.2836 10.2143 9.3945C10.1961 9.5054 10.2004 9.61884 10.2272 9.728C10.2539 9.83717 10.3025 9.9398 10.3699 10.0297C10.4373 10.1196 10.5222 10.195 10.6196 10.2512C10.7169 10.3075 10.8245 10.3434 10.9361 10.357C11.0477 10.3706 11.1608 10.3614 11.2688 10.3301C11.3767 10.2988 11.4772 10.2459 11.5642 10.1748C11.6512 10.1036 11.7229 10.0156 11.775 9.91602C11.8484 9.78885 11.9541 9.68333 12.0814 9.61016C12.2088 9.537 12.3532 9.49877 12.5 9.49935C12.721 9.49935 12.933 9.58715 13.0892 9.74343C13.2455 9.89971 13.3333 10.1117 13.3333 10.3327C13.3333 10.5537 13.2455 10.7657 13.0892 10.9219C12.933 11.0782 12.721 11.166 12.5 11.166C12.279 11.166 12.067 11.2538 11.9107 11.4101C11.7545 11.5664 11.6667 11.7783 11.6667 11.9993V12.8327C11.6667 13.0537 11.7545 13.2657 11.9107 13.4219C12.067 13.5782 12.279 13.666 12.5 13.666C12.721 13.666 12.933 13.5782 13.0892 13.4219C13.2455 13.2657 13.3333 13.0537 13.3333 12.8327V12.6827C13.8845 12.4827 14.3478 12.0954 14.6423 11.5884C14.9368 11.0814 15.0438 10.4871 14.9445 9.90926C14.8452 9.33142 14.546 8.80686 14.0992 8.42728C13.6523 8.04769 13.0863 7.83723 12.5 7.83268Z"
        fill={focus === 1 ? '#1447E6' : color}
      />
    </Svg>
  );
};

export default QuestionIcon;
