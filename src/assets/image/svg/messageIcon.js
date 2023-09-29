import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MessageIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M18 3.99994H17V11.9999C17 12.5499 16.55 12.9999 16 12.9999H4V13.9999C4 15.0999 4.9 15.9999 6 15.9999H16L20 19.9999V5.99994C20 4.89994 19.1 3.99994 18 3.99994ZM15 8.99994V1.99994C15 0.899939 14.1 -6.10352e-05 13 -6.10352e-05H2C0.9 -6.10352e-05 0 0.899939 0 1.99994V14.9999L4 10.9999H13C14.1 10.9999 15 10.0999 15 8.99994Z"
      fill="#5BC0F8"
    />
  </Svg>
);

export default MessageIcon;