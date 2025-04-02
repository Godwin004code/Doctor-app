import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StarIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={11}
      height={12}
      viewBox="0 0 11 12"
      fill="none"
      {...props}
    >
      <Path
        d="M5.60243 1L6.62887 2.36202L8.22873 1.77115L8.35586 3.47188L10.0212 3.83976L9.20866 5.33925L10.4107 6.54907L8.9165 7.37123L9.27367 9.03889L7.57215 8.92269L6.97102 10.5187L5.60243 9.50105L4.23385 10.5187L3.63271 8.92269L1.9312 9.03889L2.28836 7.37123L0.794135 6.54907L1.99621 5.33925L1.18367 3.83976L2.84901 3.47188L2.97614 1.77115L4.57599 2.36202L5.60243 1Z"
        stroke="#2260FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StarIcon;
