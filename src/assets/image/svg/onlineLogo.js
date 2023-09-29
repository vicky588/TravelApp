import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const OnlineLogo = ({color = '#5BC0F8', size = 14, strokeWidth = 2}) => {
  return (
   
      <Svg width={size} height={size} viewBox="0 0 14 14">
        <Circle cx={size / 2} cy={size / 2} r={size / 2 - strokeWidth} fill={color} stroke="white" stroke-width={strokeWidth} />
      </Svg>
 
  );
};
export default OnlineLogo;