import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SliderIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={16}
      height={11}
      viewBox="0 0 16 11"
      fill="none"
      {...props}
    >
      <Path
        d="M7 3H15M7 3C7 4.10457 6.10457 5 5 5C3.89543 5 3 4.10457 3 3M7 3C7 1.89543 6.10457 1 5 1C3.89543 1 3 1.89543 3 3M1 3H3M12 8H15M12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8M12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8M1 8H8"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SliderIcon;
